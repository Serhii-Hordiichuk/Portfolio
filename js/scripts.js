const projectsData = [
  {
  title: {
    en: "Awesome Hacker Search Engines",
    uk: "Awesome Hacker Search Engines",
    fr: "Awesome Hacker Search Engines",
    de: "Awesome Hacker Search Engines",
    es: "Awesome Hacker Search Engines",
    ru: "Awesome Hacker Search Engines",
    ar: "Awesome Hacker Search Engines",
    hi: "Awesome Hacker Search Engines",
    zh: "Awesome Hacker Search Engines",
    no: "Awesome Hacker Search Engines",
    sv: "Awesome Hacker Search Engines",
    da: "Awesome Hacker Search Engines",
    is: "Awesome Hacker Search Engines",
    fo: "Awesome Hacker Search Engines",
    ko: "Awesome Hacker Search Engines",
    ja: "Awesome Hacker Search Engines"
  },
  desc: {
    en: "Adaptive, multilingual web app for OSINT and cybersecurity. 20+ categories, 250+ resources, instant search, dark/light theme, EN/UA, responsive, no dependencies.",
    uk: "Адаптивний багатомовний вебдодаток для OSINT і кібербезпеки. 20+ категорій, 250+ інструментів, швидкий пошук, світла/темна тема, EN/UA, адаптивний, без залежностей.",
    fr: "Application web adaptative et multilingue pour OSINT et cybersécurité. Plus de 20 catégories, 250+ ressources, recherche instantanée, thème sombre/clair, EN/UA, responsive, sans dépendances.",
    de: "Adaptive, mehrsprachige Web-App für OSINT und Cybersicherheit. Über 20 Kategorien, 250+ Ressourcen, Sofortsuche, Dunkel-/Hellmodus, EN/UA, responsiv, ohne Abhängigkeiten.",
    es: "Aplicación web adaptativa y multilingüe para OSINT y ciberseguridad. Más de 20 categorías, 250+ recursos, búsqueda instantánea, tema oscuro/claro, EN/UA, adaptable, sin dependencias.",
    ru: "Адаптивный многоязычный веб-приложение для OSINT и кибербезопасности. 20+ категорий, 250+ инструментов, мгновенный поиск, светлая/тёмная тема, EN/UA, адаптивный, без зависимостей.",
    ar: "تطبيق ويب متكيف ومتعدد اللغات لـ OSINT والأمن السيبراني. أكثر من 20 فئة، 250+ أداة، بحث فوري، وضع مظلم/فاتح، EN/UA، متجاوب، بدون تبعيات.",
    hi: "OSINT और साइबर सुरक्षा के लिए अनुकूल, बहुभाषी वेब ऐप। 20+ श्रेणियाँ, 250+ संसाधन, त्वरित खोज, डार्क/लाइट थीम, EN/UA, उत्तरदायी, कोई निर्भरता नहीं।",
    zh: "适用于 OSINT 和网络安全的自适应多语言 Web 应用。20+ 分类，250+ 资源，极速搜索，暗/亮主题，EN/UA，自适应，无依赖。",
    no: "Adaptiv, flerspråklig webapp for OSINT og kybersikkerhet. 20+ kategorier, 250+ ressurser, øyeblikkelig søk, mørk/lys-modus, EN/UA, responsiv, ingen avhengigheter.",
    sv: "Adaptiv, flerspråkig webbapp för OSINT och cybersäkerhet. 20+ kategorier, 250+ resurser, direkt sökning, mörkt/ljust tema, EN/UA, responsiv, inga beroenden.",
    da: "Adaptiv, flersproget webapp til OSINT og cybersikkerhed. 20+ kategorier, 250+ ressourcer, øjeblikkelig søgning, mørkt/lyst tema, EN/UA, responsiv, ingen afhængigheder.",
    is: "Aðlögunarhæf, fjöltyngd vefapp fyrir OSINT og öryggi. 20+ flokkar, 250+ úrræði, tafarlaus leit, dökk/létt þema, EN/UA, aðlögunarhæft, engar utanaðkomandi kröfur.",
    fo: "Adaptivur, fleiri mál webapp til OSINT og kibersikkerhet. 20+ bólkar, 250+ amboð, skjót leiting, myrkt/ljóst tema, EN/UA, responsivt, ongar treytir.",
    ko: "OSINT 및 사이버보안을 위한 적응형 다국어 웹앱. 20+ 카테고리, 250+ 리소스, 즉시 검색, 다크/라이트 테마, EN/UA, 반응형, 종속성 없음.",
    ja: "OSINTとサイバーセキュリティ向けの適応型多言語Webアプリ。20以上のカテゴリ、250以上のリソース、即時検索、ダーク/ライトテーマ、EN/UA、レスポンシブ、依存なし。"
  },
  file: "projects/awesome-hacker-search.html",
  btn: {
    en: "View project",
    uk: "Переглянути",
    fr: "Voir",
    de: "Ansehen",
    es: "Ver",
    ru: "Смотреть",
    ar: "عرض",
    hi: "देखें",
    zh: "查看",
    no: "Vis",
    sv: "Visa",
    da: "Se",
    is: "Skoða",
    fo: "Síggja",
    ko: "보기",
    ja: "見る"
  }
},

  {
    title: {
      en: "World Encyclopedia", uk: "Світова енциклопедія", fr: "Encyclopédie mondiale", de: "Welt-Enzyklopädie", es: "Enciclopedia mundial", ru: "Мировая энциклопедия", ar: "الموسوعة العالمية", hi: "विश्वकोश", zh: "世界百科全书", no: "Verdensleksikon", sv: "Världsencyklopedi", da: "Verdensencyklopædi", is: "Heimsalfræðiorðabók", fo: "Heimsalfrøði", ko: "세계 백과사전", ja: "世界百科事典"
    },
    desc: {
      en: "Everything about the world in brief. Facts, science, history, technology, culture. <b>Demo version.</b>",
      uk: "Про все на світі коротко. Факти, наука, історія, технології, культура. <b>Демо версія.</b>",
      fr: "Tout sur le monde en bref. Faits, science, histoire, technologie, culture. <b>Version démo.</b>",
      de: "Alles über die Welt in Kürze. Fakten, Wissenschaft, Geschichte, Technik, Kultur. <b>Demo-Version.</b>",
      es: "Todo sobre el mundo en breve. Hechos, ciencia, historia, tecnología, cultura. <b>Versión demo.</b>",
      ru: "Всё о мире кратко. Факты, наука, история, технологии, культура. <b>Демо версия.</b>",
      ar: "كل شيء عن العالم باختصار. حقائق، علم، تاريخ، تكنولوجيا، ثقافة. <b>نسخة تجريبية.</b>",
      hi: "दुनिया के बारे में संक्षेप में सबकुछ। तथ्य, विज्ञान, इतिहास, तकनीक, संस्कृति। <b>डेमो संस्करण।</b>",
      zh: "简明世界知识。事实、科学、历史、技术、文化。<b>演示版本。</b>",
      no: "Alt om verden kort fortalt. Fakta, vitenskap, historie, teknologi, kultur. <b>Demoversjon.</b>",
      sv: "Allt om världen i korthet. Fakta, vetenskap, historia, teknik, kultur. <b>Demoversion.</b>",
      da: "Alt om verden kort fortalt. Fakta, videnskab, historie, teknologi, kultur. <b>Demoversion.</b>",
      is: "Allt um heiminn í stuttu máli. Staðreyndir, vísindi, saga, tækni, menning. <b>Prufuútgáfa.</b>",
      fo: "Alt um heim í stuttum drøgum. Faktir, vísindi, søga, tøkni, mentan. <b>Demo útgáva.</b>",
      ko: "세상 모든 것의 요약. 사실, 과학, 역사, 기술, 문화. <b>데모 버전.</b>",
      ja: "世界のすべてを簡潔に。事実、科学、歴史、技術、文化。<b>デモ版。</b>"
    },
    file: "projects/encyclopedia.html",
    btn: {
      en: "View project", uk: "Переглянути", fr: "Voir", de: "Ansehen", es: "Ver", ru: "Смотреть", ar: "عرض", hi: "देखें", zh: "查看", no: "Vis", sv: "Visa", da: "Se", is: "Skoða", fo: "Síggja", ko: "보기", ja: "見る"
    }
  },
  {
    title: {
      en: "World Radio", uk: "Світове радіо", fr: "Radio mondiale", de: "Weltradio", es: "Radio mundial", ru: "Мировое радио", ar: "راديو عالمي", hi: "विश्व रेडियो", zh: "世界广播", no: "Verdensradio", sv: "Världsradio", da: "Verdensradio", is: "Heimsútvarp", fo: "Heimsútvarp", ko: "세계 라디오", ja: "세계 라디오"
    },
    desc: {
      en: "The global radio industry in one place. Live stations, history, technologies. <b>Demo version.</b>",
      uk: "Вся світова радіоіндустрія в одному місці. Станції онлайн, історія, технології. <b>Демо версія.</b>",
      fr: "Toute l’industrie radio mondiale en un seul endroit. Stations en direct, histoire, technologies. <b>Version démo.</b>",
      de: "Die weltweite Radioindustrie an einem Ort. Live-Sender, Geschichte, Technik. <b>Demo-Version.</b>",
      es: "Toda la industria mundial de la radio en un solo lugar. Emisoras en vivo, historia, tecnología. <b>Versión demo.</b>",
      ru: "Вся мировая радиоиндустрия в одном месте. Онлайн-станции, история, технологии. <b>Демо версия.</b>",
      ar: "كل صناعة الراديو العالمية في مكان واحد. محطات مباشرة، تاريخ، تقنيات. <b>نسخة تجريبية.</b>",
      hi: "पूरी विश्व रेडियो इंडस्ट्री एक जगह। लाइव स्टेशन, इतिहास, तकनीक। <b>डेमो संस्करण।</b>",
      zh: "全球广播行业一站式。直播电台、历史、技术。<b>演示版本。</b>",
      no: "Hele verdens radioindustri på ett sted. Live-stasjoner, historie, teknologi. <b>Demoversjon.</b>",
      sv: "Hela världens radioindustri på ett ställe. Livesändningar, historia, teknik. <b>Demoversion.</b>",
      da: "Hele verdens radioindustri samlet. Live-stationer, historie, teknologi. <b>Demoversion.</b>",
      is: "Allt heimsins útvarp á einum stað. Beinar stöðvar, saga, tækni. <b>Prufuútgáfa.</b>",
      fo: "Heimsins útvarpsídnaður savnaður. Beinleiðis støðir, søga, tøkni. <b>Demo útgáva.</b>",
      ko: "전 세계 라디오 산업 한 곳에. 실시간 방송국, 역사, 기술. <b>데모 버전.</b>",
      ja: "세계의 라디오 산업이 한 곳에. 라이브 방송국, 역사, 기술. <b>데모 버전.</b>"
    },
    file: "projects/radio.html",
    btn: {
      en: "View project", uk: "Переглянути", fr: "Voir", de: "Ansehen", es: "Ver", ru: "Смотреть", ar: "عرض", hi: "देखें", zh: "查看", no: "Vis", sv: "Visa", da: "Se", is: "Skoða", fo: "Síggja", ko: "보기", ja: "見る"
    }
  },
  {
    title: {
      en: "World TV", uk: "Світове ТБ", fr: "TV mondiale", de: "Weltfernsehen", es: "TV mundial", ru: "Мировое ТВ", ar: "تلفزيون عالمي", hi: "विश्व टीवी", zh: "世界电视", no: "Verdens-TV", sv: "Världs-TV", da: "Verdens-TV", is: "Heimssjónvarp", fo: "Heimssjónvarp", ko: "세계 TV", ja: "세계 텔레비전"
    },
    desc: {
      en: "All world television history and present. Channels, standards, stories. <b>Demo version.</b>",
      uk: "Вся світова телевізійна історія та сучасність. Канали, стандарти, події. <b>Демо версія.</b>",
      fr: "Toute l’histoire et l’actualité de la télévision mondiale. Chaînes, normes, histoires. <b>Version démo.</b>",
      de: "Alle weltweiten TV-Geschichte und Gegenwart. Sender, Standards, Geschichten. <b>Demo-Version.</b>",
      es: "Toda la historia y actualidad de la TV mundial. Canales, estándares, historias. <b>Versión demo.</b>",
      ru: "Вся мировая история и современность телевидения. Каналы, стандарти, события. <b>Демо версия.</b>",
      ar: "كل تاريخ وتطور التلفزيون العالمي. قنوات، معايير، قصص. <b>نسخة تجريبية.</b>",
      hi: "पूरी विश्व टीवी इतिहास और वर्तमान। चैनल, मानक, कहानियाँ। <b>डेमो संस्करण।</b>",
      zh: "全球电视历史与现状。频道、标准、故事。<b>演示版本。</b>",
      no: "All verdens TV-historie og nåtid. Kanaler, standarder, historier. <b>Demoversjon.</b>",
      sv: "All världens TV-historia och nutid. Kanaler, standarder, berättelser. <b>Demoversion.</b>",
      da: "Al verdens TV-historie og nutid. Kanaler, standarder, historier. <b>Demoversion.</b>",
      is: "Allt um sjónvarpssögu heimsins og nútímann. Rásir, staðlar, sögur. <b>Prufuútgáfa.</b>",
      fo: "All heimsins sjónvarpssøga og nútíð. Rásir, standardar, søgur. <b>Demo útgáva.</b>",
      ko: "세계 텔레비전의 역사와 현재. 채널, 표준, 이야기. <b>데모 버전.</b>",
      ja: "세계의 텔레비전 역사와 현재. 채널, 표준, 이야기. <b>데모 버전.</b>"
    },
    file: "projects/tv.html",
    btn: {
      en: "View project", uk: "Переглянути", fr: "Voir", de: "Ansehen", es: "Ver", ru: "Смотреть", ar: "عرض", hi: "देखें", zh: "查看", no: "Vis", sv: "Visa", da: "Se", is: "Skoða", fo: "Síggja", ko: "보기", ja: "見る"
    }
  },
  {
    title: {
      en: "Seraphim (AI Demo)", uk: "Seraphim (AI Демо)", fr: "Seraphim (Démo IA)", de: "Seraphim (KI-Demo)", es: "Seraphim (Demo IA)", ru: "Seraphim (AI Демо)", ar: "سيرافيم (عرض الذكاء الاصطناعي)", hi: "Seraphim (एआई डेमो)", zh: "Seraphim（AI演示）", no: "Seraphim (AI-demo)", sv: "Seraphim (AI-demo)", da: "Seraphim (AI-demo)", is: "Seraphim (AI-prufa)", fo: "Seraphim (AI-demo)", ko: "Seraphim (AI 데모)", ja: "Seraphim（AIデモ）"
    },
    desc: {
      en: "Free artificial intelligence for everyone. Create, learn, experiment and solve daily tasks with AI. <b>Demo version.</b>",
      uk: "Безкоштовний штучний інтелект для людей. Створюй, навчайся, експериментуй і вирішуй щоденні задачі з AI. <b>Демо версія.</b>",
      fr: "Intelligence artificielle gratuite pour tous. Créez, apprenez, expérimentez et résolvez vos tâches quotidiennes avec l’IA. <b>Version démo.</b>",
      de: "Kostenlose künstliche Intelligenz für alle. Erstellen, lernen, experimentieren und tägliche Aufgaben mit KI lösen. <b>Demo-Version.</b>",
      es: "Inteligencia artificial gratuita para todos. Crea, aprende, experimenta y resuelve tareas diarias con IA. <b>Versión demo.</b>",
      ru: "Бесплатный искусственный интеллект для всех. Создавайте, учитесь, экспериментируйте и решайте повседневные задачи с ИИ. <b>Демо версия.</b>",
      ar: "ذكاء اصطناعي مجاني للجميع. أنشئ وتعلم وجرب وحل المهام اليومية مع الذكاء الاصطناعي. <b>نسخة تجريبية.</b>",
      hi: "हर किसी के लिए मुफ्त आर्टिफिशियल इंटेलिजेंस। बनाएँ, सीखें, प्रयोग करें और रोज़मर्रा के कार्य AI से हल करें। <b>डेमो संस्करण।</b>",
      zh: "为所有人提供的免费人工智能。用AI创造、学习、实验、解决日常任务。<b>演示版本。</b>",
      no: "Gratis kunstig intelligens for alle. Lag, lær, eksperimenter og løs daglige oppgaver med AI. <b>Demoversjon.</b>",
      sv: "Gratis artificiell intelligens för alla. Skapa, lär dig, experimentera och lös vardagliga uppgifter med AI. <b>Demoversion.</b>",
      da: "Gratis kunstig intelligens for alle. Skab, lær, eksperimentér og løs daglige opgaver med AI. <b>Demoversion.</b>",
      is: "Ókeypis gervigreind fyrir alla. Búðu til, lærðu, prófaðu og leystu dagleg verkefni með gervigreind. <b>Prufuútgáfa.</b>",
      fo: "Ókeypis listgreind til øll. Skapa, lær, royn og loysn dagligar uppgávur við AI. <b>Demo útgáva.</b>",
      ko: "모두를 위한 무료 인공지능. 만들고, 배우고, 실험하고, 일상 업무를 AI로 해결하세요. <b>데모 버전.</b>",
      ja: "誰でも使える無料AI。作る、学ぶ、試す、日常の課題をAIで解決。<b>デ모版。</b>"
    },
    file: "projects/seraphim.html",
    btn: {
      en: "View project", uk: "Переглянути", fr: "Voir", de: "Ansehen", es: "Ver", ru: "Смотреть", ar: "عرض", hi: "देखें", zh: "查看", no: "Vis", sv: "Visa", da: "Se", is: "Skoða", fo: "Síggja", ko: "보기", ja: "見る"
    }
  }
];

const langMap = {
  en: { label: "English", icon: "🇬🇧" },
  uk: { label: "Українська", icon: "🇺🇦" },
  fr: { label: "Français", icon: "🇫🇷" },
  de: { label: "Deutsch", icon: "🇩🇪" },
  es: { label: "Español", icon: "🇪🇸" },
  ru: { label: "Русский", icon: "🇷🇺" },
  ar: { label: "العربية", icon: "🇸🇦" },
  hi: { label: "हिन्दी", icon: "🇮🇳" },
  zh: { label: "中文", icon: "🇨🇳" },
  no: { label: "Norsk", icon: "🇳🇴" },
  sv: { label: "Svenska", icon: "🇸🇪" },
  da: { label: "Dansk", icon: "🇩🇰" },
  is: { label: "Íslenska", icon: "🇮🇸" },
  fo: { label: "Føroyskt", icon: "🇫🇴" },
  ko: { label: "한국어", icon: "🇰🇷" },
  ja: { label: "日本語", icon: "🇯🇵" }
};

function renderLangList() {
  const langList = document.getElementById('langList');
  langList.innerHTML = Object.keys(langMap).map(langKey =>
    `<li class="nav-item mb-2">
      <a class="nav-link lang-switch" href="#" data-lang="${langKey}">
        <span style="font-size:1.3rem;">${langMap[langKey].icon}</span> ${langMap[langKey].label}
      </a>
    </li>`
  ).join('');
}

function renderProjectsCards(lang) {
  const cardsContainer = document.getElementById('projectsCards');
  if (!cardsContainer) return;
  cardsContainer.innerHTML = projectsData.map((project, idx) => `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card h-100 shadow-sm border-0">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${project.title[lang] || project.title.en}</h5>
          <p class="card-text flex-grow-1">${project.desc[lang] || project.desc.en}</p>
          <a href="${project.file}" target="_blank" rel="noopener" class="btn btn-primary mt-2">${project.btn[lang] || project.btn.en}</a>
        </div>
      </div>
    </div>
  `).join('');
}

function renderSkills(lang) {
  const skillsList = document.getElementById('skillsList');
  if (!skillsList) return;
  const list = texts[lang] && texts[lang].skillsList ? texts[lang].skillsList : texts.en.skillsList;
  skillsList.innerHTML = list.map(skill =>
    `<li class="list-group-item">${skill}</li>`
  ).join('');
}

function detectTheme() {
  if (localStorage.getItem('theme')) return localStorage.getItem('theme');
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setThemeHandlers() {
  let dark = detectTheme() === 'dark';
  document.body.setAttribute('data-bs-theme', dark ? 'dark' : 'light');
  document.getElementById('themeIcon').className = dark ? 'bi bi-sun' : 'bi bi-moon';
  document.getElementById('themeToggle').onclick = function() {
    dark = !dark;
    document.body.setAttribute('data-bs-theme', dark ? 'dark' : 'light');
    document.getElementById('themeIcon').className = dark ? 'bi bi-sun' : 'bi bi-moon';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  };
}

function detectLang() {
  if (localStorage.getItem('lang')) return localStorage.getItem('lang');
  const navLang = navigator.language || navigator.userLanguage || 'en';
  if (texts[navLang]) return navLang;
  for (const code of Object.keys(langMap)) {
    if (navLang.startsWith(code)) return code;
  }
  return 'en';
}

const pages = ['home', 'about', 'skills', 'projects', 'contacts'];

function showPage(page) {
  pages.forEach(p => {
    const el = document.getElementById('page-' + p);
    if (el) el.classList.remove('active');
  });
  const showEl = document.getElementById('page-' + page);
  if (showEl) showEl.classList.add('active');
  if (window.bootstrap) {
    const mainMenu = document.getElementById('mainMenu');
    if (mainMenu && mainMenu.classList.contains('show')) {
      bootstrap.Offcanvas.getOrCreateInstance(mainMenu).hide();
    }
  }
}

function setMenuHandlers() {
  document.querySelectorAll('.menu-link').forEach(link => {
    link.onclick = function(e) {
      e.preventDefault();
      showPage(this.getAttribute('data-page'));
    };
  });
  const siteTitleLink = document.getElementById('siteTitleLink');
  if (siteTitleLink) {
    siteTitleLink.onclick = function(e) {
      e.preventDefault();
      showPage('home');
    };
  }
}

function setLangMenuHandlers() {
  document.querySelectorAll('.lang-switch').forEach(link => {
    link.onclick = function(e) {
      e.preventDefault();
      setLang(this.getAttribute('data-lang'));
      const langMenu = document.getElementById('langMenu');
      if (langMenu) bootstrap.Offcanvas.getOrCreateInstance(langMenu).hide();
    };
  });
}

function setLang(l) {
  lang = l;
  localStorage.setItem('lang', lang);
  renderLangList();
  const t = texts[lang] || texts.en;
  document.getElementById('siteTitle').innerHTML = `<a href="#" id="siteTitleLink">${t.siteTitle || texts.en.siteTitle}</a>`;
  document.title = t.siteTitle || texts.en.siteTitle;
  document.getElementById('mainMenuLabel').textContent = t.menu || texts.en.menu;
  document.getElementById('menuHome').textContent = t.menuHome || texts.en.menuHome;
  document.getElementById('menuAbout').textContent = t.menuAbout || texts.en.menuAbout;
  document.getElementById('menuSkills').textContent = t.menuSkills || texts.en.menuSkills;
  document.getElementById('menuProjects').textContent = t.menuProjects || texts.en.menuProjects;
  document.getElementById('menuContacts').textContent = t.menuContacts || texts.en.menuContacts;
  document.getElementById('langMenuLabel').textContent = t.langMenu || texts.en.langMenu;
  document.getElementById('mainTitle').textContent = t.mainTitle || texts.en.mainTitle;
  document.getElementById('mainText').textContent = t.mainText || texts.en.mainText;
  document.getElementById('aboutTitle').textContent = t.aboutTitle || texts.en.aboutTitle;
  document.getElementById('aboutText').textContent = t.aboutText || texts.en.aboutText;
  document.getElementById('skillsTitle').textContent = t.skillsTitle || texts.en.skillsTitle;
  renderSkills(lang);
  document.getElementById('projectsTitle').textContent = t.projectsTitle || texts.en.projectsTitle;
  renderProjectsCards(lang);
  document.getElementById('contactsTitle').textContent = t.contactsTitle || texts.en.contactsTitle;
  const year = new Date().getFullYear();
  document.getElementById('footer').innerHTML = `&copy;&nbsp; ${year} &nbsp;Serhii Hordiichuk`;
  setMenuHandlers();
  setLangMenuHandlers();
}

let lang = detectLang();
setThemeHandlers();
setLang(lang);

let touchStartX = 0, touchEndX = 0;
const mainContent = document.getElementById('mainContent');
if (mainContent) {
  mainContent.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  });
  mainContent.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
}
function handleSwipe() {
  const activeIdx = pages.findIndex(p => {
    const el = document.getElementById('page-' + p);
    return el && el.classList.contains('active');
  });
  if (touchEndX < touchStartX - 50 && activeIdx < pages.length - 1) {
    showPage(pages[activeIdx + 1]);
  }
  if (touchEndX > touchStartX + 50 && activeIdx > 0) {
    showPage(pages[activeIdx - 1]);
  }
}
