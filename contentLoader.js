import {applyLanguageConfig} from "./language.js";

let main;

export async function loadContents() {
    main = document.querySelector("main");
    const dataFilePath = location.pathname + "content.html";

    await getData(dataFilePath).then((value) => {
        if (value === undefined) {
            notfound();
        } else if (value == null) {
            languageUnsupported();
        }

        main.innerHTML = value;

        applyLanguageConfig();
    })
}

async function notfound() {
    await setHTMLContent("/error/notfound.html", "main", "tag");
}

export async function languageUnsupported() {
    await setHTMLContent("/error/languageUnsupported.html", "main", "tag");
}

export async function loadCustomTag(tagName, locationTargetKey, keyType, postFunc) {
    await getData("/tag/" + tagName + "/content.html")
        .then((value) => {
            appendContent(value, locationTargetKey, keyType);
            postFunc();
        })
}

export async function setHTMLContent(fileName, locationTargetKey, keyType) {
    await getData(fileName)
        .then((value) => {
            setContent(value, locationTargetKey, keyType);
        })
}

export function appendContent(content, locationTargetKey, keyType) {
    if (keyType === "id") {
        const element = document.getElementById(locationTargetKey);
        element.innerHTML = element.innerHTML + content;
    } else if (keyType === "tag") {
        const element = document.querySelector(locationTargetKey);
        element.innerHTML = element.innerHTML + content;
    }
    applyLanguageConfig();
}

export function setContent(content, locationTargetKey, keyType) {
    if (keyType === "id") {
        document.getElementById(locationTargetKey).innerHTML = content;
    } else if (keyType === "tag") {
        document.querySelector(locationTargetKey).innerHTML = content;
    }
}

async function getData(dataFilePath) {
    let data = "";

    await fetch(dataFilePath)
        .then((response) => response.text()
            .then((value) => {
                data = value;
            })
            .catch((error) => {
                data = undefined;
            })
        )
        .catch((error) => {
            data = undefined;
        })

    return data;
}