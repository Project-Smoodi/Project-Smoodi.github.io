import {applyLanguageConfig} from "/language.js";
import {loadCustomTags} from "/tag/custom-tag-loader.js";

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

    })

    await loadCustomTags()
}

async function notfound() {
    await setHTMLContent("/error/notfound.html", "main", "tag");
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