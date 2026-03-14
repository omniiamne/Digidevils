// ===============================
//  TRANSLATIONS
// ===============================

const translations = {
  en: {
    "nav-staff": "Staff",
   "nav-news": "News" },
  ru: {
    "nav-staff": "Команда",
   "nav-news": "Новости" }
};


// ===============================
//  APPLY LANGUAGE
// ===============================

function applyLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const value = translations[lang]?.[key];
    if (value) el.textContent = value;
  });
}

function applyLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const text = el.getAttribute(`data-i18n-${lang}`);
    if (text) el.textContent = text;
  });
}


function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  applyLanguage(lang);
}

function initLanguage() {
  const saved = localStorage.getItem("lang") || "en";
  applyLanguage(saved);

  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });
}

// ждём, пока header загрузится через loadIncludes.js
function waitForHeader() {
  if (!document.querySelector("[data-i18n]")) {
    setTimeout(waitForHeader, 100);
    return;
  }
  initLanguage();
}

document.addEventListener("includesLoaded", () => {
  initLanguage();
});

