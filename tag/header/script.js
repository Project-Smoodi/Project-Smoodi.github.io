import {changeLanguage, getUserLanguage} from "/language.js";

export function script() {
    document.querySelector("#change-language").addEventListener("click", event => {
        changeLanguage()
    })

    if (location.pathname.includes("docs")) {
        document.getElementsByClassName("header-logo-text")[0].textContent = "Project Smoodi Docs";
    } else if (location.pathname.includes("tech")) {
        document.getElementsByClassName("header-logo-text")[0].textContent = "Project Smoodi Tech Blog";
    } else {
        document.getElementsByClassName("header-logo-text")[0].textContent = "Project Smoodi";
    }

    if (getUserLanguage() === "ko") {
        document.getElementById("current-language").textContent = "한국어";
    } else if (getUserLanguage() === "en") {
        document.getElementById("current-language").textContent = "English";
    }
}