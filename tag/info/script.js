import {applyLanguageConfig} from "/language.js";

export function loadInfo() {
    const info = document.querySelector("info");
    console.log(info);

    const title = info.getElementsByClassName("info-title")[0];
    const description = info.getElementsByClassName("info-description")[0];
    const other = info.getElementsByClassName("info-other")[0];
    const date = other.getElementsByClassName("info-date")[0];
    const version = other.getElementsByClassName("info-version")[0];

    title.innerHTML = info.title;

    if (info.description) {
        description.textContent = info.description;
    }

    date.textContent = new Date(Date.UTC(Number(info.getAttribute("year")), Number(info.getAttribute("month")) - 1, Number(info.getAttribute("day")), Number(info.getAttribute("hour")))).toLocaleDateString();

    console.log(info.getAttribute("version"));

    if (!info.getAttribute("version")) {
        version.removeChild(version.lastElementChild);
    } else {
        version.removeChild(version.firstElementChild);
        const versionInputs = version.firstElementChild.getElementsByTagName("version");
        for (let i = 0; i < versionInputs.length; i++) {
            versionInputs[i].textContent = info.getAttribute("version");
        }
    }

    applyLanguageConfig();
}