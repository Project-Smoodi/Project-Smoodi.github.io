import {scrollToTarget} from "/document-utility.js";

export function loadSidebarContents() {
    const titles = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const table = document.querySelector("content-table");

    if (table == null) {
        return;
    }

    if (titles.length === 0) {
        document.querySelector("content-table").remove();
    }

    titles.forEach((title, key) => {
        if (!title.id) {
            title.id = "title-" + key;
        }

        const tableContent = document.createElement("div");
        tableContent.role = "button"
        tableContent.className += "content-table-text";
        tableContent.innerHTML = title.innerHTML;
        tableContent.href = "#" + title.id;

        tableContent.style.marginLeft = (title.tagName.slice(1) - 1) * 10 + "px";

        tableContent.addEventListener("click", scrollToTarget)

        table.appendChild(tableContent)
    })
}