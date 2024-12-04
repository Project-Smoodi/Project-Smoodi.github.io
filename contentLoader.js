import {applyLanguageConfig, getUserLanguage} from "./language.js";

let main;

export function loadContents() {
    main = document.getElementById("main");
    const dataFilePath = location.pathname + "contents.html";
    let data = getData(dataFilePath);

    console.log(dataFilePath, getUserLanguage());

    data.then((value) => {
        if (value === undefined) {
            notfound();
        } else if (value == null) {
            languageUnsupported();
        }

        main.innerHTML = value;

        try {
            applyLanguageConfig();
        } catch (error) {
            languageUnsupported();
        }
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
    getData("/error/notfound.html")
        .then((value) => {
            main.innerHTML = value;
            applyLanguageConfig();
        })
}

function languageUnsupported() {
}

function error(title, subtitle) {
    return "<div style=\"width: 100%; height: 100%; display: flex; flex-direction: column; gap: 30px; justify-content: center; align-items: center;\">" +
        `<p style=\"font-size: 32px;\">${title}</p>` +
        `<p style=\"font-size: 18px;\">${subtitle}</p>` +
        "</div>"
}