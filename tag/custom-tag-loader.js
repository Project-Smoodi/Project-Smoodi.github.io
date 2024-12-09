import {setHTMLContent} from "/contentLoader.js";
import {loadHeader} from "/tag/header/script.js";
import {applyLanguageConfig} from "/language.js";
import {loadCodeBlock} from "/tag/code/script.js";
import {loadInfo} from "/tag/info/script.js";
import {loadFolderNames} from "/tag/document-table/script.js";

export async function loadCustomTags() {

    document.querySelectorAll("unsupported").forEach(await async function () {
        await setHTMLContent("/error/unsupported-language.html", "main");
    });

    if (document.querySelector("info")) {
        await setHTMLContent("/tag/info/content.html", "info");
        loadInfo();
    }

    if (document.querySelector("document-table")) {
        await setHTMLContent("/tag/document-table/content.html", "document-table");
        loadFolderNames();
    }

    document.querySelectorAll("content-table").forEach(await async function () {
        await setHTMLContent("/tag/content-table/content.html", "content-table");
    });

    if (document.querySelector("header") != null) {
        await setHTMLContent("/tag/header/content.html", "header");
        loadHeader();
    }

    hljs.highlightAll();
    await loadCodeBlock();

    applyLanguageConfig();
}