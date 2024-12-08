import {changeLanguage} from "/language.js";

export function loadHeader() {
    document.querySelector("#change-language").addEventListener("click", event => {
        changeLanguage()
    })

    if (location.pathname.includes("docs/")) {
        document.getElementsByClassName("header-logo-text")[0].innerHTML = "Project Smoodi <b>Docs</b>";
    } else if (location.pathname.includes("tech/")) {
        document.getElementsByClassName("header-logo-text")[0].innerHTML = "Project Smoodi <b>Tech<b/> Blog";
    } else {
        document.getElementsByClassName("header-logo-text")[0].textContent = "Project Smoodi";
    }
}