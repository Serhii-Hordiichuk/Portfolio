// script.js
const languageToggle = document.getElementById('language-toggle');
const themeToggle = document.getElementById('theme-toggle');
const year = document.getElementById('year');
const body = document.body;

// Функція для зміни мови
function toggleLanguage() {
    const currentLanguage = languageToggle.dataset.lang;
    let newLanguage = 'EN';
    if (currentLanguage === 'EN') {
        newLanguage = 'UA';
    } else if (currentLanguage === 'UA') {
        newLanguage = 'NO';
    } else if (currentLanguage === 'NO') {
        newLanguage = 'EN';
    }
    languageToggle.dataset.lang = newLanguage;
    languageToggle.textContent = newLanguage;
    updateTranslations(newLanguage);
    localStorage.setItem('language', newLanguage);
}

// Функція для зміни теми
function toggleTheme() {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    updateThemeButton();
}

// Функція для оновлення кнопки теми
function updateThemeButton() {
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun" style="color: black;"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon" style="color: black;"></i>';
    }
}

// Функція для оновлення перекладів
function updateTranslations(language) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.dataset.key;
        element.textContent = translations[language][key];
    });
}

// Додавання обробників подій
languageToggle.addEventListener('click', toggleLanguage);
themeToggle.addEventListener('click', toggleTheme);

// Ініціалізація
year.textContent = new Date().getFullYear();

// Перевірка та встановлення мови з localStorage
const savedLanguage = localStorage.getItem('language');
const initialLanguage = savedLanguage || 'EN';
languageToggle.dataset.lang = initialLanguage;
languageToggle.textContent = initialLanguage;
updateTranslations(initialLanguage);

// Перевірка та встановлення теми з localStorage або налаштувань пристрою
const savedTheme = localStorage.getItem('theme');
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (savedTheme === null && prefersDarkMode)) {
    body.classList.add('dark-mode');
}
updateThemeButton();
