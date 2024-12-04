import {firstOrSecondIfNull} from "/utility.js";

export const SUPPORT_LANGUAGES = ["ko", "en"];
export const DEFAULT_LANGUAGE = "ko"
export const LANGUAGE_CONFIG_PARAM_NAME = "lang"

let lang = undefined;

export function getUserLanguage() {
    if (lang === undefined) {
        lang = firstOrSecondIfNull(
            new URL(location.href).searchParams.get(LANGUAGE_CONFIG_PARAM_NAME),
            DEFAULT_LANGUAGE
        );

        redirectIfUnsupportedLanguage();
    }

    return lang;
}

function redirectIfUnsupportedLanguage() {
    if (!SUPPORT_LANGUAGES.includes(lang)) {
        const url = new URL(location.href);
        url.searchParams.set(LANGUAGE_CONFIG_PARAM_NAME, DEFAULT_LANGUAGE);
        location.href = url.toString();
    }
}

export function applyLanguageConfig() {

    if (document.querySelector(lang) == null) {
        throw new DOMException("Selected language is not supported on this document.");
    }

    const otherLanguages = SUPPORT_LANGUAGES.filter(item => item !== lang);

    otherLanguages.forEach(item => {
        const it = document.querySelector(item);
        if (it != null) {
            it.remove();
        }
    })

    console.log("Language config applied.");
}
