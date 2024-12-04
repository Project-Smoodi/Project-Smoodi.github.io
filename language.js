export const SUPPORT_LANGUAGES = ["ko", "en"];
export const DEFAULT_LANGUAGE = "ko"
export const LANGUAGE_CONFIG_PARAM_NAME = "lang"

export function redirectIfUnsupportedLanguage(language) {
    if (!SUPPORT_LANGUAGES.includes(language)) {
        const url = new URL(location.href);
        url.searchParams.set(LANGUAGE_CONFIG_PARAM_NAME, DEFAULT_LANGUAGE);
        console.log(location.href, url.toString());
    }
}

export function applyLanguageConfig(language) {
    const otherLanguages = SUPPORT_LANGUAGES.filter(lang => lang !== language);

    otherLanguages.forEach(lang => {
        document.querySelector(lang).remove();
    })
}