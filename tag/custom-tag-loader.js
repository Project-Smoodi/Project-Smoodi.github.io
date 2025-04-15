import {rand, setHTMLContent} from "/contentLoader.js";
import {loadHeader} from "/tag/header/script.js";
import {applyLanguageConfig} from "/language.js";
import {loadCodeBlock} from "/tag/code/script.js";
import {loadInfo} from "/tag/info/script.js";
import {loadFolderNames} from "/tag/document-table/script.js";
import {loadSidebarContents} from "/tag/content-table/script.js";
import {settingBackgroundImage} from "/tag/background-image/script.js";

export async function loadCustomTags() {

    document.querySelectorAll("unsupported").forEach(await async function () {
        await setHTMLContent(`/error/unsupported-language.html?v=${rand}`, "main");
    });

    if (document.querySelector("info")) {
        await setHTMLContent(`/tag/info/content.html?v=${rand}`, "info");
        loadInfo();
    }

    if (document.querySelector("document-table")) {
        await setHTMLContent(`/tag/document-table/content.html?v=${rand}`, "document-table");
        loadFolderNames();
    }

    document.querySelectorAll("content-table").forEach(await async function () {
        await setHTMLContent(`/tag/content-table/content.html?v=${rand}`, "content-table");
        loadSidebarContents();
    });

    if (document.querySelector("header") != null) {
        await setHTMLContent(`/tag/header/content.html?v=${rand}`, "header");
        loadHeader();
    }

    if (document.querySelector("background-image") != null) {
        settingBackgroundImage();
    }

    hljs.highlightAll();
    await loadCodeBlock();

    applyLanguageConfig();
}