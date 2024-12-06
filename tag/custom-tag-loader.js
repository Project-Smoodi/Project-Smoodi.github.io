import {insertHTMLContentFront, setHTMLContent} from "/contentLoader.js";
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

    hljs.highlightAll();
    document.querySelectorAll("code").forEach(await async function (value) {
        const lang = value.className.split("language-")[1];
        value.id = "code-language-insert";
        await insertHTMLContentFront("/tag/code/content.html", "code-language-insert", "id");
        value.firstElementChild.innerHTML = lang[0].toUpperCase() + lang.slice(1);
        value.id = "";
    })

    applyLanguageConfig();
}