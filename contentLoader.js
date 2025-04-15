import {applyLanguageConfig} from "/language.js";
import {loadCustomTags} from "/tag/custom-tag-loader.js";
import {upgradeInnerAnchorScroll} from "/document-utility.js";

let main;

let errored = false;

export async function loadContents() {
    main = document.querySelector("main");
    const rand = Math.floor(Math.random() * 100000);
    const dataFilePath = location.pathname + "content.html?v=" + rand;

    await getData(dataFilePath).then(await async function (value) {
        if (value === undefined) {
            await notfound();
            errored = true;
        } else {
            main.innerHTML = value;
        }

        applyLanguageConfig();

        if (document.querySelector("info")) {
            document.title = document.querySelector("info").title;
        }
    })

    await loadCustomTags()
    upgradeInnerAnchorScroll();
}

async function notfound() {
    await setHTMLContent("/error/notfound.html", "main");
}

export async function setHTMLContent(fileName, selectors) {
    await getData(fileName)
        .then((value) => {
            setContent(value, selectors);
        })
}

export function setContent(content, selectors) {
    document.querySelector(selectors).innerHTML = content;
    applyLanguageConfig();
}

export async function appendHTMLContent(fileName, selectors) {
    await getData(fileName)
        .then((value) => {
            appendContent(value, selectors);
        })
}

export function appendContent(content, selectors) {
    const element = document.querySelector(selectors);
    element.innerHTML = element.innerHTML + content;
    applyLanguageConfig();
}

export async function insertHTMLContentFront(fileName, selectors) {
    await getData(fileName)
        .then((value) => {
            insertContentFront(value, selectors);
        })
}

export function insertContentFront(content, selectors) {
    const element = document.querySelector(selectors);
    element.innerHTML = content + element.innerHTML;
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