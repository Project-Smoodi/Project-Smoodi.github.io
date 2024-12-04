import {firstOrSecondIfNull} from "utility.js";
import {
    applyLanguageConfig,
    DEFAULT_LANGUAGE,
    LANGUAGE_CONFIG_PARAM_NAME,
    redirectIfUnsupportedLanguage
} from "./language";

export function loadContents() {
    console.log("function")
    const dataFilePath = location.pathname + "contents.html";
    let data = getData();
    const language = firstOrSecondIfNull(
        new URL(location.href).searchParams.get(LANGUAGE_CONFIG_PARAM_NAME),
        DEFAULT_LANGUAGE);

    redirectIfUnsupportedLanguage();
    applyLanguageConfig()

    console.log(dataFilePath, language);

    data.then((value) => {
        if (value === undefined) {
            notfound();
        } else if (value == null) {
            languageUnsupported();
        }

        const main = document.querySelector("main");

        main.textContent = value;
    })
}


async function getData() {
    let data = "";

    await fetch(dataFilePath)
        .then((response) => response.text()
            .then((value) => {
                data = value;
            }))
        .catch((error) => {
            data = undefined;
        })

    return data;
}

function notfound() {
    let main = document.querySelector("main");

    if (language === "ko") {
        main.textContent = error("nono", "nn");
    } else if (language === "en") {
    }
}

function languageUnsupported() {
}

function error(title, subtitle) {
    return "<div style=\"width: 100%; height: 100%; display: flex; flex-direction: column; gap: 30px; justify-content: center; align-items: center;\">" +
        `<p style=\"font-size: 32px;\">${title}</p>` +
        `<p style=\"font-size: 18px;\">${subtitle}</p>` +
        "</div>"
}