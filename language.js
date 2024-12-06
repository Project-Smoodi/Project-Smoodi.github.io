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
    if (!SUPPORT_LANGUAGES.includes(getUserLanguage())) {
        setLanguage(DEFAULT_LANGUAGE);
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

    console.log("Language config applied: " + getUserLanguage());
}

export function changeLanguage() {
    if (getUserLanguage() === "ko") {
        setLanguage("en");
    } else {
        setLanguage("ko")
    }
}

export function setLanguage(language) {
    const url = new URL(location.href);
    url.searchParams.set(LANGUAGE_CONFIG_PARAM_NAME, language);
    location.href = url.toString();
}