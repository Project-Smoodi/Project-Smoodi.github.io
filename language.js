export const SUPPORT_LANGUAGES = ["ko", "en"];
export const DEFAULT_LANGUAGE = "ko"
export const LANGUAGE_CONFIG_KEY = "lang"

export function getUserLanguage() {

    loadParamLanguageIfGot()

    if (getLanguage() == null) {
        setLanguage(DEFAULT_LANGUAGE)
    }

    return getLanguage();
}

function loadParamLanguageIfGot() {
    let langParam = new URL(location.href).searchParams.get(LANGUAGE_CONFIG_KEY);
    if (langParam != null) {
        setLanguage(langParam)
        setToDefaultIfUnsupportedLanguage();
    }

    function setToDefaultIfUnsupportedLanguage() {
        if (!SUPPORT_LANGUAGES.includes(getLanguage())) {
            setLanguage(DEFAULT_LANGUAGE);
        }
    }
}

export function applyLanguageConfig() {
    const otherLanguages = SUPPORT_LANGUAGES.filter(item => item !== getUserLanguage());

    otherLanguages.forEach(item => {
        const it = document.querySelectorAll(item);
        it.forEach((value) => {
            value.remove();
        })
    })
}

export function changeLanguage() {
    if (getUserLanguage() === "ko") {
        setLanguage("en");
    } else {
        setLanguage("ko");
    }

    const url = new URL(location.href);
    url.searchParams.set(LANGUAGE_CONFIG_KEY, getLanguage());
    location.href = url.toString();
}

function setLanguage(language) {
    localStorage.setItem(LANGUAGE_CONFIG_KEY, language);
}

function getLanguage() {
    return localStorage.getItem(LANGUAGE_CONFIG_KEY);
}

function reloadLanguageConfig() {

}