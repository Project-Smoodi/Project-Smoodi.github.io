import {applyLanguageConfig} from "./language.js";

let main;

let errored = false;

export async function loadContents() {
    main = document.querySelector("main");
    const dataFilePath = location.pathname + "content.html";

    await getData(dataFilePath).then(await async function (value) {
        if (value === undefined) {
            await notfound();
            errored = true;
        }

        main.innerHTML = value;

        applyLanguageConfig();

        if (document.querySelector("unsupported") != null) {
            await languageUnsupported();
        }

        if (document.querySelector("sidebar") != null) {
            await setHTMLContent("/tag/sidebar/content.html", "sidebar", "tag")
        }
    })
}

async function notfound() {
    await setHTMLContent("/error/notfound.html", "main", "tag");
}

export async function languageUnsupported() {
    await setHTMLContent("/error/unsupported-language.html", "main", "tag");
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
    applyLanguageConfig();
}

async function getData(dataFilePath) {
    let data = "";

    await fetch(dataFilePath)
        .then(await async function (response) {
            if (response.status === 404) {
                data = undefined;
            } else {
                await response.text().then((value) => {
                    if (response.status === 404) {
                        data = undefined;
                    } else {
                        data = value;
                    }
                })
            }
        });

    return data;
}