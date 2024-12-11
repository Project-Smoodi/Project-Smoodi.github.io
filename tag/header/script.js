import {changeLanguage} from "/language.js";

export function loadHeader() {
    document.querySelector("#change-language").addEventListener("click", () => {
        changeLanguage()
    })

    if (location.pathname.includes("docs/")) {
        document.getElementsByClassName("header-logo-text")[0].innerHTML = "Project Smoodi <b>Docs</b>";
    } else if (location.pathname.includes("blog/")) {
        document.getElementsByClassName("header-logo-text")[0].innerHTML = "Project Smoodi <b>Tech<b/> Blog";
    } else {
        document.getElementsByClassName("header-logo-text")[0].textContent = "Project Smoodi";
    }

    document.querySelector(".header-logo").addEventListener("click", goToHome);
    document.querySelector("#home").addEventListener("click", goToHome);

    function goToHome(event) {
        event.stopPropagation();
        event.preventDefault();
        location.pathname = "/"
    }
}