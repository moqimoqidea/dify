"""
Proxy requests to avoid SSRF
"""

import logging
import time

import httpx

from configs import dify_config

SSRF_DEFAULT_MAX_RETRIES = dify_config.SSRF_DEFAULT_MAX_RETRIES

HTTP_REQUEST_NODE_SSL_VERIFY = True  # Default value for HTTP_REQUEST_NODE_SSL_VERIFY is True
try:
    HTTP_REQUEST_NODE_SSL_VERIFY = dify_config.HTTP_REQUEST_NODE_SSL_VERIFY
    http_request_node_ssl_verify_lower = str(HTTP_REQUEST_NODE_SSL_VERIFY).lower()
    if http_request_node_ssl_verify_lower == "true":
        HTTP_REQUEST_NODE_SSL_VERIFY = True
    elif http_request_node_ssl_verify_lower == "false":
        HTTP_REQUEST_NODE_SSL_VERIFY = False
    else:
        raise ValueError("Invalid value. HTTP_REQUEST_NODE_SSL_VERIFY should be 'True' or 'False'")
except NameError:
    HTTP_REQUEST_NODE_SSL_VERIFY = True

BACKOFF_FACTOR = 0.5
STATUS_FORCELIST = [429, 500, 502, 503, 504]


class MaxRetriesExceededError(ValueError):
    """Raised when the maximum number of retries is exceeded."""

    pass


def make_request(method, url, max_retries=SSRF_DEFAULT_MAX_RETRIES, **kwargs):
    if "allow_redirects" in kwargs:
        allow_redirects = kwargs.pop("allow_redirects")
        if "follow_redirects" not in kwargs:
            kwargs["follow_redirects"] = allow_redirects

    if "timeout" not in kwargs:
        kwargs["timeout"] = httpx.Timeout(
            timeout=dify_config.SSRF_DEFAULT_TIME_OUT,
            connect=dify_config.SSRF_DEFAULT_CONNECT_TIME_OUT,
            read=dify_config.SSRF_DEFAULT_READ_TIME_OUT,
            write=dify_config.SSRF_DEFAULT_WRITE_TIME_OUT,
        )

    if "ssl_verify" not in kwargs:
        kwargs["ssl_verify"] = HTTP_REQUEST_NODE_SSL_VERIFY

    ssl_verify = kwargs.pop("ssl_verify")

    retries = 0
    while retries <= max_retries:
        try:
            if dify_config.SSRF_PROXY_ALL_URL:
                with httpx.Client(proxy=dify_config.SSRF_PROXY_ALL_URL, verify=ssl_verify) as client:
                    response = client.request(method=method, url=url, **kwargs)
            elif dify_config.SSRF_PROXY_HTTP_URL and dify_config.SSRF_PROXY_HTTPS_URL:
                proxy_mounts = {
                    "http://": httpx.HTTPTransport(proxy=dify_config.SSRF_PROXY_HTTP_URL, verify=ssl_verify),
                    "https://": httpx.HTTPTransport(proxy=dify_config.SSRF_PROXY_HTTPS_URL, verify=ssl_verify),
                }
                with httpx.Client(mounts=proxy_mounts, verify=ssl_verify) as client:
                    response = client.request(method=method, url=url, **kwargs)
            else:
                with httpx.Client(verify=ssl_verify) as client:
                    response = client.request(method=method, url=url, **kwargs)

            if response.status_code not in STATUS_FORCELIST:
                return response
            else:
                logging.warning(
                    "Received status code %s for URL %s which is in the force list", response.status_code, url
                )

        except httpx.RequestError as e:
            logging.warning("Request to URL %s failed on attempt %s: %s", url, retries + 1, e)
            if max_retries == 0:
                raise

        retries += 1
        if retries <= max_retries:
            time.sleep(BACKOFF_FACTOR * (2 ** (retries - 1)))
    raise MaxRetriesExceededError(f"Reached maximum retries ({max_retries}) for URL {url}")


def get(url, max_retries=SSRF_DEFAULT_MAX_RETRIES, **kwargs):
    return make_request("GET", url, max_retries=max_retries, **kwargs)


def post(url, max_retries=SSRF_DEFAULT_MAX_RETRIES, **kwargs):
    return make_request("POST", url, max_retries=max_retries, **kwargs)


def put(url, max_retries=SSRF_DEFAULT_MAX_RETRIES, **kwargs):
    return make_request("PUT", url, max_retries=max_retries, **kwargs)


def patch(url, max_retries=SSRF_DEFAULT_MAX_RETRIES, **kwargs):
    return make_request("PATCH", url, max_retries=max_retries, **kwargs)


def delete(url, max_retries=SSRF_DEFAULT_MAX_RETRIES, **kwargs):
    return make_request("DELETE", url, max_retries=max_retries, **kwargs)


def head(url, max_retries=SSRF_DEFAULT_MAX_RETRIES, **kwargs):
    return make_request("HEAD", url, max_retries=max_retries, **kwargs)
