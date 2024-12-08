import {setHTMLContent} from "/contentLoader.js";
import {loadHeader} from "/tag/header/script.js";
import {applyLanguageConfig} from "/language.js";
import {loadCodeBlock} from "/tag/code/script.js";

export async function loadCustomTags() {

    document.querySelectorAll("unsupported").forEach(await async function () {
        await setHTMLContent("/error/unsupported-language.html", "main");
    });

    document.querySelectorAll("sidebar").forEach(await async function () {
        await setHTMLContent("/tag/sidebar/content.html", "sidebar")
    });

    if (document.querySelector("header") != null) {
        await setHTMLContent("/tag/header/content.html", "header");
        loadHeader();
    }

    hljs.highlightAll();
    await loadCodeBlock();

    applyLanguageConfig();
}