import {setHTMLContent} from "/contentLoader.js";
import {loadHeader} from "/tag/header/script.js";
import {applyLanguageConfig} from "/language.js";

export async function loadCustomTags() {

    document.querySelectorAll("unsupported").forEach(await async function () {
        await setHTMLContent("/error/unsupported-language.html", "main", "tag");
    });

    document.querySelectorAll("sidebar").forEach(await async function () {
        await setHTMLContent("/tag/sidebar/content.html", "sidebar", "tag")
    });

    if (document.querySelector("header") != null) {
        await setHTMLContent("/tag/header/content.html", "header", "tag");
        loadHeader();
    }

    applyLanguageConfig();
}