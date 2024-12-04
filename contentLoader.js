import {applyLanguageConfig, getUserLanguage} from "./language.js";

export function loadContents() {
    const dataFilePath = location.pathname + "contents.html";
    let data = getData(dataFilePath);

    console.log(dataFilePath, getUserLanguage());

    data.then((value) => {
        if (value === undefined) {
            notfound();
        } else if (value == null) {
            languageUnsupported();
        }

        const main = document.querySelector("main");

        console.log(value)

        main.innerHTML = value;

        applyLanguageConfig();
    })
}


async function getData(dataFilePath) {
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
}

function languageUnsupported() {
}

function error(title, subtitle) {
    return "<div style=\"width: 100%; height: 100%; display: flex; flex-direction: column; gap: 30px; justify-content: center; align-items: center;\">" +
        `<p style=\"font-size: 32px;\">${title}</p>` +
        `<p style=\"font-size: 18px;\">${subtitle}</p>` +
        "</div>"
}