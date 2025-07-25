const translation = {
  api: {
    success: 'Успіх',
    actionSuccess: 'Дію виконано успішно',
    saved: 'Збережено',
    create: 'Створено',
    remove: 'Видалено',
  },
  operation: {
    create: 'Створити',
    confirm: 'Підтвердити',
    cancel: 'Скасувати',
    clear: 'Очистити',
    save: 'Зберегти',
    saveAndEnable: 'Зберегти та Увімкнути',
    edit: 'Редагувати',
    add: 'Додати',
    added: 'Додано',
    refresh: 'Перезапустити',
    reset: 'Скинути',
    search: 'Пошук',
    change: 'Змінити',
    remove: 'Видалити',
    send: 'Надіслати',
    copy: 'Копіювати',
    lineBreak: 'Перенесення рядка',
    sure: 'Я впевнений',
    download: 'Завантажити',
    delete: 'Видалити',
    settings: 'Налаштування',
    setup: 'Налаштувати',
    getForFree: 'Отримати безкоштовно',
    reload: 'Перезавантажити',
    ok: 'ОК',
    log: 'Журнал',
    learnMore: 'Дізнатися більше',
    params: 'Параметри',
    duplicate: 'дублікат',
    rename: 'Перейменувати',
    audioSourceUnavailable: 'AudioSource недоступний',
    copyImage: 'Скопіювати зображення',
    openInNewTab: 'Відкрити в новій вкладці',
    zoomOut: 'Зменшити масштаб',
    zoomIn: 'Збільшити масштаб',
    close: 'Закрити',
    regenerate: 'Відновити',
    view: 'Вид',
    viewMore: 'ДИВИТИСЬ БІЛЬШЕ',
    saveAndRegenerate: 'Збереження та регенерація дочірніх фрагментів',
    submit: 'Представити',
    skip: 'Корабель',
    imageCopied: 'Скопійоване зображення',
    deleteApp: 'Видалити програму',
    viewDetails: 'Перегляд докладних відомостей',
    copied: 'Скопійовані',
    in: 'В',
    format: 'Формат',
    downloadFailed: 'Не вдалося завантажити. Будь ласка, спробуйте ще раз пізніше.',
    more: 'Більше',
    downloadSuccess: 'Завантаження завершено.',
    deSelectAll: 'Вимкнути все',
    selectAll: 'Вибрати все',
  },
  placeholder: {
    input: 'Будь ласка, введіть текст',
    select: 'Будь ласка, оберіть параметр',
  },
  voice: {
    language: {
      zhHans: 'Китайська',
      zhHant: 'Китайська (традиційна)',
      enUS: 'Англійська',
      deDE: 'Німецька',
      frFR: 'Французька',
      esES: 'Іспанська',
      itIT: 'Італійська',
      thTH: 'Тайська',
      idID: 'Індонезійська',
      jaJP: 'Японська',
      koKR: 'Корейська',
      ptBR: 'Португальська',
      ruRU: 'Російська',
      ukUA: 'Українська',
      viVN: 'В\'є тнамська',
      plPL: 'Польська',
      roRO: 'Румунська',
      hiIN: 'Хінді',
      trTR: 'Турецька',
      faIR: 'Перська',
    },
  },
  unit: {
    char: 'символів',
  },
  actionMsg: {
    noModification: 'На даний момент жодних змін немає.',
    modifiedSuccessfully: 'Успішно змінено',
    modifiedUnsuccessfully: 'Змінити не вдалося',
    copySuccessfully: 'Скопійовано успішно',
    paySucceeded: 'Платіж пройшов успішно',
    payCancelled: 'Платіж скасовано',
    generatedSuccessfully: 'Успішно згенеровано',
    generatedUnsuccessfully: 'Не вдалося згенерувати',
  },
  model: {
    params: {
      temperature: 'Температура',
      temperatureTip:
        'Контролює випадковість: зменшення призводить до менш випадкових завершень. Коли температура наближається до нуля, модель стане детермінованою та повторюваною.',
      top_p: 'Топ P',
      top_pTip:
        'Контролює різноманітність за допомогою вибірки ядра: 0,5 означає, що розглядається половина всіх зважених за ймовірністю варіантів.',
      presence_penalty: 'Штраф за присутність',
      presence_penaltyTip:
        'Наскільки штрафувати нові токени залежно від того, чи з\'являються вони в тексті поки що.\nЗбільшує ймовірність того, що модель говоритиме про нові теми.',
      frequency_penalty: 'Штраф за частоту',
      frequency_penaltyTip:
        'Наскільки штрафувати нові токени на основі їхньої існуючої частоти в тексті.\nЗменшує ймовірність того, що модель повторюватиме той самий рядок дослівно.',
      max_tokens: 'Макс. токенів',
      max_tokensTip:
        'Використовується для обмеження максимальної довжини відповіді в токенах.\nБільші значення можуть обмежити простір, залишений для підказок, журналів чатів і знань.\nРекомендується встановити значення нижче двох третин\ngpt-4-1106-preview, gpt-4-vision-preview max token (вхід 128k, вихід 4k)',
      maxTokenSettingTip: 'Ваше максимальне значення токена велике, що може обмежувати простір для запитів, даних тощо. Краще налаштувати його менш як 2/3.',
      setToCurrentModelMaxTokenTip: 'Максимальний токен оновлено до максимуму токена поточної моделі {{maxToken}}.',
      stop_sequences: 'Зупинити послідовності',
      stop_sequencesTip: 'До чотирьох послідовностей, у яких API припинить генерацію подальших токенів. Повернений текст не міститиме зупинку послідовності.',
      stop_sequencesPlaceholder: 'Введіть послідовність і натисніть Tab',
    },
    tone: {
      Creative: 'Креативний',
      Balanced: 'Збалансований',
      Precise: 'Точний',
      Custom: 'Користувацький',
    },
    addMoreModel: 'Перейдіть до налаштувань, щоб додати більше моделей',
    settingsLink: 'Налаштування постачальника моделі',
    capabilities: 'Можливості MultiModal',
  },
  menus: {
    status: 'бета',
    explore: 'Досліджувати',
    apps: 'Студія',
    plugins: 'Плагіни',
    pluginsTips: 'Інтегруйте сторонні плагіни або створіть AI-сумісні плагіни.',
    datasets: 'Знання',
    datasetsTips: 'СКОРО:  імпортуйте власні текстові дані або пишіть дані в реальному часі через Webhook для покращення контексту LLM.',
    newApp: 'Нова програма',
    newDataset: 'Створити знання',
    tools: 'Інструменти',
    exploreMarketplace: 'Дізнайтеся більше про Marketplace',
    appDetail: 'Деталі програми',
    account: 'Обліковий запис',
  },
  userProfile: {
    settings: 'Налаштування',
    emailSupport: 'Підтримка по електронній пошті',
    workspace: 'Робочий простір',
    createWorkspace: 'Створити робочий простір',
    helpCenter: 'Довідковий центр',
    communityFeedback: 'відгуки',
    roadmap: 'Дорожня карта',
    community: 'Спільнота',
    about: 'Про нас',
    logout: 'Вийти',
    compliance: 'Відповідність',
    support: 'Підтримка',
    github: 'Гітхаб',
  },
  settings: {
    accountGroup: 'ОБЛІКОВИЙ ЗАПИС',
    workplaceGroup: 'РОБОЧИЙ ПРОСТІР',
    account: 'Мій обліковий запис',
    members: 'Учасники',
    billing: 'Виставлення рахунків',
    integrations: 'Інтеграції',
    language: 'Мова',
    provider: 'Постачальник моделі',
    dataSource: 'Джерело даних',
    plugin: 'Плагіни',
    apiBasedExtension: 'Розширення API',
    generalGroup: 'ЗАГАЛЬНЕ',
  },
  account: {
    avatar: 'Аватар',
    name: 'Ім\'я',
    email: 'Електронна пошта',
    password: 'Пароль',
    passwordTip: 'Ви можете встановити постійний пароль, якщо не хочете використовувати тимчасові коди для входу',
    setPassword: 'Встановити пароль',
    resetPassword: 'Скинути пароль',
    currentPassword: 'Поточний пароль',
    newPassword: 'Новий пароль',
    confirmPassword: 'Підтвердіть пароль',
    notEqual: 'Два паролі різняться.',
    langGeniusAccount: 'Обліковий запис Dify',
    langGeniusAccountTip: 'Ваш обліковий запис Dify та пов’язані з ним дані користувача.',
    editName: 'Редагувати ім\'я',
    showAppLength: 'Показати {{length}} програм',
    delete: 'Видалити обліковий запис',
    deleteTip: 'Видалення вашого облікового запису призведе до остаточного видалення всіх ваших даних, і їх неможливо буде відновити.',
    deleteConfirmTip: 'Щоб підтвердити, будь ласка, надішліть наступне з вашої зареєстрованої електронної пошти на ',
    account: 'Рахунок',
    studio: 'Студія Dify',
    myAccount: 'Особистий кабінет',
    deletePrivacyLink: 'Політика конфіденційності.',
    sendVerificationButton: 'Надішліть код підтвердження',
    verificationLabel: 'Код підтвердження',
    verificationPlaceholder: 'Вставте 6-значний код',
    permanentlyDeleteButton: 'Назавжди видалити обліковий запис',
    feedbackTitle: 'Зворотний зв\'язок',
    feedbackLabel: 'Розкажіть, чому ви видалили свій обліковий запис?',
    feedbackPlaceholder: 'Необов\'язково',
    deletePrivacyLinkTip: 'Для отримання додаткової інформації про те, як ми обробляємо ваші дані, будь ласка, перегляньте наш',
    deleteSuccessTip: 'Вашому обліковому запису потрібен час, щоб завершити видалення. Ми надішлемо вам електронного листа, коли все буде готово.',
    deleteLabel: 'Для підтвердження, будь ласка, введіть свою електронну пошту нижче',
    deletePlaceholder: 'Будь ласка, введіть свою електронну пошту',
    workspaceName: 'Назва робочого простору',
    workspaceIcon: 'Іконка робочого простору',
    editWorkspaceInfo: 'Редагувати інформацію про робочий простір',
    changeEmail: {
      codePlaceholder: 'Вставте 6-значний код',
      continue: 'Продовжувати',
      resendTip: 'Не отримали код?',
      emailLabel: 'Новий електронний лист',
      changeTo: 'Змінити на {{email}}',
      resend: 'Переслати',
      codeLabel: 'Код перевірки',
      sendVerifyCode: 'Відправити код підтвердження',
      emailPlaceholder: 'Введіть нову електронну пошту',
      title: 'Змінити електронну пошту',
      newEmail: 'Налаштуйте нову електронну адресу',
      resendCount: 'Надішліть знову через {{count}}s',
      content4: 'Ми тільки що надіслали вам тимчасовий код підтвердження на <email>{{email}}</email>.',
      verifyEmail: 'Підтвердіть свою поточну електронну адресу',
      existingEmail: 'Користувач з цією електронною поштою вже існує.',
      content2: 'Ваш поточний електронний лист - <email>{{email}}</email>. Код для підтвердження було надіслано на цю електронну адресу.',
      verifyNew: 'Підтвердіть свою нову електронну пошту',
      content3: 'Введіть нову електронну адресу, і ми надішлемо вам код підтвердження.',
      authTip: 'Коли ви зміните свою електронну адресу, облікові записи Google або GitHub, пов\'язані з вашою старою електронною адресою, більше не зможуть увійти в цей обліковий запис.',
      content1: 'Якщо ви продовжите, ми надішлемо код підтвердження на <email>{{email}}</email> для повторної аутентифікації.',
      unAvailableEmail: 'Цей електронний лист тимчасово недоступний.',
    },
  },
  members: {
    team: 'Команда',
    invite: 'Додати',
    name: 'ІМ\'Я',
    lastActive: 'ОСТАННЯ АКТИВНІСТЬ',
    role: 'РОЛІ',
    pending: 'В очікуванні...',
    owner: 'Власник',
    admin: 'Адміністратор',
    adminTip: 'Може створювати програми та керувати налаштуваннями команди',
    normal: 'Звичайний',
    normalTip: 'Може лише використовувати програми, не може створювати програми',
    editor: 'Редактор',
    editorTip: 'Може створювати програми, але не може керувати налаштуваннями команди',
    inviteTeamMember: 'Додати учасника команди',
    inviteTeamMemberTip: 'Вони зможуть отримати доступ до даних вашої команди безпосередньо після входу.',
    emailNotSetup: 'Поштовий сервер не налаштований, тому запрошення електронною поштою не можуть бути надіслані. Будь ласка, повідомте користувачів про посилання для запрошення, яке буде видано після запрошення.',
    email: 'Електронна пошта',
    emailInvalid: 'Недійсний формат електронної пошти',
    emailPlaceholder: 'Будь ласка, введіть адресу електронної пошти',
    sendInvite: 'Надіслати запрошення',
    invitedAsRole: 'Запрошено як користувача {{role}}',
    invitationSent: 'Запрошення надіслано',
    invitationSentTip: 'Запрошення надіслано, і вони можуть увійти в Dify, щоб отримати доступ до даних вашої команди.',
    invitationLink: 'Посилання на запрошення',
    failedInvitationEmails: 'Наступних користувачів не було успішно запрошено',
    ok: 'ОК',
    removeFromTeam: 'Видалити з команди',
    removeFromTeamTip: 'Буде видалено доступ до команди',
    setAdmin: 'Призначити адміністратором',
    setMember: 'Встановити як звичайного члена',
    setEditor: 'Встановити як Редактор',
    disInvite: 'Скасувати запрошення',
    deleteMember: 'Видалити учасника',
    you: '(Ви)',
    builder: 'Будівник',
    datasetOperatorTip: 'Тільки може управляти базою знань',
    datasetOperator: 'Адміністратор знань',
    setBuilder: 'Встановити як будівельник',
    builderTip: 'Може створювати та редагувати власні програми',
    transferModal: {
      continue: 'Продовжувати',
      resendTip: 'Не отримали код?',
      resend: 'Переслати',
      sendVerifyCode: 'Відправити код підтвердження',
      codePlaceholder: 'Вставте 6-значний код',
      codeLabel: 'Код перевірки',
      verifyEmail: 'Підтвердіть свою поточну електронну адресу',
      warningTip: 'Ви станете членом адміністрації, і новий власник матиме повний контроль.',
      resendCount: 'Надішліть знову через {{count}} сек.',
      warning: 'Ви збираєтеся передати право власності на "{{workspace}}". Це набирає чинності негайно і не підлягає скасуванню.',
      title: 'Перенести право власності на робочий простір',
      transfer: 'Перенести право власності на робочий простір',
      transferLabel: 'Передати право власності на робочий простір на',
      verifyContent: 'Вашу поточну електронну адресу <email>{{email}}</email>.',
      verifyContent2: 'Ми надішлемо тимчасовий код підтвердження на цю електронну пошту для повторної автентифікації.',
      transferPlaceholder: 'Виберіть учасника робочого простору…',
      sendTip: 'Якщо ви продовжите, ми надішлемо код підтвердження на <email>{{email}}</email> для повторної аутентифікації.',
    },
    transferOwnership: 'Перенести право власності',
  },
  integrations: {
    connected: 'Підключено',
    google: 'Google',
    googleAccount: 'Увійти за допомогою облікового запису Google',
    github: 'GitHub',
    githubAccount: 'Увійти за допомогою облікового запису GitHub',
    connect: 'Підключити',
  },
  language: {
    displayLanguage: 'Мова інтерфейсу',
    timezone: 'Часовий пояс',
  },
  provider: {
    apiKey: 'Ключ API',
    enterYourKey: 'Введіть свій ключ API тут',
    invalidKey: 'Недійсний ключ OpenAI API',
    validatedError: 'Не вдалося підтвердити: ',
    validating: 'Перевірка ключа...',
    saveFailed: 'Не вдалося зберегти ключ API',
    apiKeyExceedBill: 'У цього ключа API немає доступної квоти, будь ласка, прочитайте',
    addKey: 'Додати ключ',
    comingSoon: 'Скоро',
    editKey: 'Редагувати',
    invalidApiKey: 'Недійсний API ключ',
    azure: {
      apiBase: 'API-шлях',
      apiBasePlaceholder: 'Базовий URL-адреса API вашої кінцевої точки Azure OpenAI.',
      apiKey: 'Ключ API',
      apiKeyPlaceholder: 'Введіть свій ключ API тут',
      helpTip: 'Дізнайтеся про послугу Azure OpenAI',
    },
    openaiHosted: {
      openaiHosted: 'Розміщений OpenAI',
      onTrial: 'НА ПРОБНОМУ ПЕРІОДІ',
      exhausted: 'КВОТА ВИЧЕРПАНА',
      desc: 'Служба хостингу OpenAI, надана Dify, дозволяє використовувати такі моделі, як GPT-3.5. Перш ніж ваша пробна квота буде використана, вам потрібно налаштувати інші постачальники моделі.',
      callTimes: 'Кількість викликів',
      usedUp: 'Пробна квота використана. Додайте власного постачальника моделі.',
      useYourModel: 'Наразі використовується власний постачальник моделі.',
      close: 'Закрити',
    },
    anthropicHosted: {
      anthropicHosted: 'Anthropic Claude',
      onTrial: 'НА ПРОБНОМУ ПЕРІОДІ',
      exhausted: 'КВОТА ВИЧЕРПАНА',
      desc: 'Ця потужна модель чудово справляється з широким спектром завдань: від складних діалогів і створення креативного контенту до докладних інструкцій.',
      callTimes: 'Кількість викликів',
      usedUp: 'Пробна квота використана. Додайте власного постачальника моделі.',
      useYourModel: 'Наразі використовується власний постачальника моделі.',
      close: 'Закрити',
      trialQuotaTip: 'Ваша квота на антропічні пробні випробування закінчується 11.03.2025 і після цього більше не буде доступна. Будь ласка, скористайтеся ним вчасно.',
    },
    anthropic: {
      using: 'Функція вбудовування використовує',
      enableTip: 'Щоб активувати модель Anthropic, спочатку потрібно прив’язатись до OpenAI або Azure OpenAI Service.',
      notEnabled: 'Не активовано',
      keyFrom: 'Отримайте ключ API від Anthropic',
    },
    encrypted: {
      front: 'Ваш API-ключ буде зашифрований та збережений за допомогою',
      back: ' технології.',
    },
  },
  modelProvider: {
    notConfigured: 'Системну модель ще не повністю налаштовано, і деякі функції можуть бути недоступні.',
    systemModelSettings: 'Налаштування системної моделі',
    systemModelSettingsLink: 'Чому необхідно налаштовувати системну модель?',
    selectModel: 'Виберіть свою модель',
    setupModelFirst: 'Будь ласка, спочатку налаштуйте свою модель',
    systemReasoningModel: {
      key: 'Системна модель міркування',
      tip: 'Встановіть модель висновку за замовчуванням, яка буде використовуватися для створення програм, а також для таких функцій, як генерація імені діалогу та пропозиція наступного питання також використовуватимуть модель висновку за замовчуванням.',
    },
    embeddingModel: {
      key: 'Модель вбудовування',
      tip: 'Встановіть модель за замовчуванням для обробки вбудовування документа у Знання, як пошук, так і імпорт Знань використовують цю модель вбудовування для векторизації. Перемикання призведе до невідповідності розмірності вектора між імпортованими Знаннями та запитанням, що призведе до збою пошуку. Щоб уникнути збоїв пошуку, не перемикайте цю модель без підстав.',
      required: 'Модель вбудовування обов’язкова',
    },
    speechToTextModel: {
      key: 'Модель перетворення мовлення в текст',
      tip: 'Встановіть модель за замовчуванням для введення мовлення в текст під час розмови.',
    },
    ttsModel: {
      key: 'Модель перетворення тексту в мовлення',
      tip: 'Встановіть модель за замовчуванням для введення тексту в мовлення в розмові.',
    },
    rerankModel: {
      key: 'Модель повторного ранжування',
      tip: 'Модель повторного ранжування змінить порядок списку документів-кандидатів на основі семантичної відповідності запиту користувача, покращуючи результати семантичного ранжування.',
    },
    quota: 'Квота',
    searchModel: 'Пошукова модель',
    noModelFound: 'Модель для {{model}} не знайдено',
    models: 'Моделі',
    showMoreModelProvider: 'Показати більше постачальників моделей',
    selector: {
      tip: 'Цю модель було видалено. Будь ласка, додайте модель або виберіть іншу.',
      emptyTip: 'Доступні моделі відсутні',
      emptySetting: 'Перейдіть до налаштувань, щоб налаштувати',
      rerankTip: 'Будь ласка, налаштуйте модель повторного ранжування',
    },
    card: {
      quota: 'КВОТА',
      onTrial: 'У пробному періоді',
      paid: 'Оплачено',
      quotaExhausted: 'Квоту вичерпано',
      callTimes: 'Кількість викликів',
      tokens: 'Токени',
      buyQuota: 'Придбати квоту',
      priorityUse: 'Пріоритетне використання',
      removeKey: 'Видалити ключ API',
      tip: 'Пріоритет буде надано оплаченій квоті. Пробна квота буде використовуватися після вичерпання платної квоти.',
    },
    item: {
      deleteDesc: '{{modelName}} використовуються як системні моделі міркування. Деякі функції будуть недоступні після видалення. Будь ласка, підтвердьте.',
      freeQuota: 'БЕЗКОШТОВНА КВОТА',
    },
    addApiKey: 'Додайте свій ключ API',
    invalidApiKey: 'Недійсний ключ API',
    encrypted: {
      front: 'Ваш ключ API буде зашифрований та збережений за допомогою',
      back: ' технології.',
    },
    freeQuota: {
      howToEarn: 'Як заробити',
    },
    addMoreModelProvider: 'ДОДАТИ БІЛЬШЕ ПОСТАЧАЛЬНИКІВ МОДЕЛЕЙ',
    addModel: 'Додати модель',
    modelsNum: '{{num}} моделей',
    showModels: 'Показати моделі',
    showModelsNum: 'Показати {{num}} моделей',
    collapse: 'Згорнути',
    config: 'Налаштування',
    modelAndParameters: 'Модель та параметри',
    model: 'Модель',
    featureSupported: '{{feature}} підтримується',
    callTimes: 'Кількість викликів',
    credits: 'Кредити повідомлень',
    buyQuota: 'Придбати квоту',
    getFreeTokens: 'Отримати безкоштовні токени',
    priorityUsing: 'Пріоритезувати використання',
    deprecated: 'Застарілий',
    confirmDelete: 'підтвердити видалення?',
    quotaTip: 'Залишилося доступних безкоштовних токенів',
    // If need adjustment, provide more context on 'Load Presets' function
    loadPresets: 'Завантажити',
    parameters: 'ПАРАМЕТРИ',
    apiKeyStatusNormal: 'Статус APIKey нормальний',
    loadBalancing: 'Балансування навантаження',
    editConfig: 'Редагувати конфігурацію',
    loadBalancingHeadline: 'Балансування навантаження',
    apiKey: 'API-КЛЮЧ',
    defaultConfig: 'Конфігурація за замовчуванням',
    providerManaged: 'Під управлінням провайдера',
    loadBalancingDescription: 'Зменшіть тиск за допомогою кількох наборів облікових даних.',
    modelHasBeenDeprecated: 'Ця модель вважається застарілою',
    addConfig: 'Додати конфігурацію',
    configLoadBalancing: 'Балансування навантаження конфігурації',
    upgradeForLoadBalancing: 'Оновіть свій план, щоб увімкнути балансування навантаження.',
    apiKeyRateLimit: 'Було досягнуто ліміту швидкості, доступного після {{seconds}}',
    providerManagedDescription: 'Використовуйте єдиний набір облікових даних, наданий постачальником моделі.',
    loadBalancingLeastKeyWarning: 'Щоб увімкнути балансування навантаження, має бути ввімкнено щонайменше 2 клавіші.',
    loadBalancingInfo: 'За замовчуванням для балансування навантаження використовується стратегія кругової системи. Якщо спрацьовує обмеження швидкості, буде застосовано період перезарядки тривалістю 1 хвилина.',
    emptyProviderTip: 'Спочатку встановіть постачальника моделі.',
    installProvider: 'Встановлення постачальників моделей',
    toBeConfigured: 'Підлягає налаштуванню',
    emptyProviderTitle: 'Постачальника моделі не налаштовано',
    configureTip: 'Налаштуйте api-ключ або додайте модель для використання',
    discoverMore: 'Відкрийте для себе більше в',
  },
  dataSource: {
    add: 'Додати джерело даних',
    connect: 'Підключити',
    notion: {
      title: 'Notion',
      description: 'Використання Notion як джерела даних для Знань.',
      connectedWorkspace: 'Підключений робочий простір',
      addWorkspace: 'Додати робочий простір',
      connected: 'Підключено',
      disconnected: 'Відключено',
      changeAuthorizedPages: 'Змінити авторизовані сторінки',
      pagesAuthorized: 'Авторизовані сторінки',
      sync: 'Синхронізувати',
      remove: 'Видалити',
      selector: {
        pageSelected: 'Сторінки вибрано',
        searchPages: 'Пошук сторінок ...',
        noSearchResult: 'Результатів пошуку немає',
        addPages: 'Додати сторінки',
        preview: 'ПЕРЕДПЕРЕГЛЯД',
      },
      integratedAlert: 'Notion інтегрований через внутрішні облікові дані, немає потреби в повторній авторизації.',
    },
    website: {
      with: 'З',
      active: 'Активний',
      inactive: 'Неактивні',
      configuredCrawlers: 'Налаштовані обхідні роботи',
      title: 'Веб-сторінка',
      description: 'Імпортуйте вміст із веб-сайтів за допомогою веб-сканера.',
    },
    configure: 'Настроїти',
  },
  plugin: {
    serpapi: {
      apiKey: 'Ключ API',
      apiKeyPlaceholder: 'Введіть свій ключ API',
      keyFrom: 'Отримайте свій ключ SerpAPI зі сторінки облікового запису SerpAPI',
    },
  },
  apiBasedExtension: {
    title: 'API-розширення забезпечують централізоване керування API, спрощуючи конфігурацію для зручного використання в різних програмах Dify.',
    link: 'Дізнайтеся, як розробити власне розширення API.',
    add: 'Додати розширення API',
    selector: {
      title: 'Розширення API',
      placeholder: 'Виберіть API розширення',
      manage: 'Керувати розширеннями API',
    },
    modal: {
      title: 'Додати розширення API',
      editTitle: 'Редагувати розширення API',
      name: {
        title: 'Ім\'я',
        placeholder: 'Введіть ім\'я',
      },
      apiEndpoint: {
        title: 'Кінцева точка API',
        placeholder: 'Будь ласка, введіть кінцеву точку API',
      },
      apiKey: {
        title: 'Ключ API',
        placeholder: 'Будь ласка, введіть ключ API',
        lengthError: 'Довжина API-ключа не може бути меньше 5 символів',
      },
    },
    type: 'Тип',
  },
  about: {
    changeLog: 'Журнал змін',
    updateNow: 'Оновити зараз',
    nowAvailable: 'Dify {{version}} тепер доступна.',
    latestAvailable: 'Dify {{version}} – це найновіша доступна версія.',
  },
  appMenus: {
    overview: 'Моніторинг',
    promptEng: 'Налаштування',
    apiAccess: 'Доступ до API',
    logAndAnn: 'Журнали та Повідомлення.',
    logs: 'Журнали',
  },
  environment: {
    testing: 'ТЕСТУВАННЯ',
    development: 'РОЗРОБКА',
  },
  appModes: {
    completionApp: 'Генератор тексту',
    chatApp: 'Чат-додаток',
  },
  datasetMenus: {
    documents: 'Документи',
    hitTesting: 'Тестування пошуку',
    settings: 'Налаштування',
    emptyTip: 'Знання не пов’язані, будь ласка, перейдіть до програми або плагіна, щоб завершити зв’язок.',
    viewDoc: 'Переглянути документацію',
    relatedApp: 'пов\'язані програми',
    noRelatedApp: 'Немає пов\'язаних додатків',
  },
  voiceInput: {
    speaking: 'Говоріть зараз...',
    converting: 'Перетворення на текст...',
    notAllow: 'мікрофон не авторизований',
  },
  modelName: {
    'gpt-3.5-turbo': 'GPT-3.5-Turbo',
    'gpt-3.5-turbo-16k': 'GPT-3.5-Turbo-16K',
    'gpt-4': 'GPT-4',
    'gpt-4-32k': 'GPT-4-32K',
    'text-davinci-003': 'Text-Davinci-003',
    'text-embedding-ada-002': 'Text-Embedding-Ada-002',
    'whisper-1': 'Whisper-1',
    'claude-instant-1': 'Claude-Instant',
    'claude-2': 'Claude-2',
  },
  chat: {
    renameConversation: 'Перейменувати розмову',
    conversationName: 'Назва розмови',
    conversationNamePlaceholder: 'Будь ласка, введіть назву розмови',
    conversationNameCanNotEmpty: 'Потрібна назва розмови',
    citation: {
      title: 'ЦИТАТИ',
      linkToDataset: 'Посилання на Знання',
      characters: 'Символів:',
      hitCount: 'Кількість звернень:',
      vectorHash: 'Хеш вектора:',
      hitScore: 'Оцінка звернення:',
    },
    inputPlaceholder: 'Поговоріть з ботом',
    thought: 'Думка',
    thinking: 'Мислення...',
    resend: 'Відправити знову',
  },
  promptEditor: {
    placeholder: 'Пишіть свої підказки тут, вводьте \'{\', щоб вставити змінну чи \'/\', щоб вставити блок-підказку',
    context: {
      item: {
        title: 'Контекст',
        desc: 'Вставити шаблон контексту',
      },
      modal: {
        title: '{{num}} Знань у контексті',
        add: 'Додати контекст',
        footer: 'Ви можете керувати контекстами в розділі "Контекст" нижче.',
      },
    },
    history: {
      item: {
        title: 'Історія розмов',
        desc: 'Вставити шаблон історичного повідомлення',
      },
      modal: {
        title: 'ПРИКЛАД',
        user: 'Привіт',
        assistant: 'Привіт! Чим я можу допомогти вам сьогодні?',
        edit: 'Редагувати імена у ролі розмови',
      },
    },
    variable: {
      item: {
        title: 'Змінні та зовнішні інструменти',
        desc: 'Вставити змінні та зовнішні інструменти',
      },
      outputToolDisabledItem: {
        title: 'Змінні',
        desc: 'Вставити змінні',
      },
      modal: {
        add: 'Нова змінна',
        addTool: 'Новий інструмент',
      },
    },
    query: {
      item: {
        title: 'Запит',
        desc: 'Вставити шаблон запиту користувача',
      },
    },
    existed: 'Вже існує в підказці',
  },
  imageUploader: {
    uploadFromComputer: 'Завантажити з комп\'ютера',
    uploadFromComputerReadError: 'Помилка зчитування зображення, повторіть спробу.',
    uploadFromComputerUploadError: 'Помилка завантаження зображення, спробуйте знову.',
    uploadFromComputerLimit: 'Розмір зображення не може перевищувати {{size}} МБ',
    pasteImageLink: 'Вставити посилання на зображення',
    pasteImageLinkInputPlaceholder: 'Вставте посилання на зображення тут',
    pasteImageLinkInvalid: 'Недійсне посилання на зображення',
    imageUpload: 'Завантаження зображення',
  },
  tag: {
    placeholder: 'Усі теги',
    addNew: 'Додати новий тег',
    noTag: 'Без тегів',
    noTagYet: 'Ще немає тегів',
    addTag: 'додати тег',
    editTag: 'Редагувати теги',
    manageTags: 'Керувати тегами',
    selectorPlaceholder: 'Введіть для пошуку або створення',
    create: 'Створити',
    delete: 'Видалити тег',
    deleteTip: 'Тег використовується, видалити його?',
    created: 'Тег створено успішно',
    failed: 'Не вдалося створити тег',
  },
  errorMsg: {
    fieldRequired: '{{field}} є обов\'язковим',
    urlError: 'URL-адреса повинна починатися з http:// або https://',
  },
  fileUploader: {
    pasteFileLink: 'Вставити посилання на файл',
    pasteFileLinkInvalid: 'Неприпустиме посилання на файл',
    uploadFromComputer: 'Локальне завантаження',
    uploadFromComputerLimit: 'Файл завантаження не може перевищувати {{size}}',
    pasteFileLinkInputPlaceholder: 'Введіть URL-адресу...',
    fileExtensionNotSupport: 'Розширення файлу не підтримується',
    uploadFromComputerReadError: 'Не вдалося прочитати файл, будь ласка, спробуйте ще раз.',
    uploadFromComputerUploadError: 'Не вдалося завантажити файл, будь ласка, завантажте ще раз.',
  },
  license: {
    expiring: 'Термін дії закінчується за один день',
    expiring_plural: 'Термін дії закінчується за {{count}} днів',
    unlimited: 'Безмежний',
  },
  pagination: {
    perPage: 'Елементів на сторінці',
  },
  theme: {
    auto: 'система',
    dark: 'темний',
    light: 'світло',
    theme: 'Тема',
  },
  compliance: {
    professionalUpgradeTooltip: 'Доступно лише з командним планом або вище.',
    soc2Type2: 'Звіт SOC 2 Тип II',
    iso27001: 'Сертифікація ISO 27001:2022',
    soc2Type1: 'Звіт SOC 2 Тип I',
    sandboxUpgradeTooltip: 'Доступно лише з професійним або командним планом.',
    gdpr: 'GDPR DPA',
  },
  imageInput: {
    browse: 'перегляд',
    supportedFormats: 'Підтримує PNG, JPG, JPEG, WEBP і GIF',
    dropImageHere: 'Перетягніть зображення сюди або',
  },
  you: 'Ти',
}

export default translation
