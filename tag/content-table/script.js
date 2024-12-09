export function loadSidebarContents() {
    const titles = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const table = document.querySelector("content-table");

    if (table == null) {
        return;
    }

    titles.forEach((title, key) => {
        title.id = "title-" + key;

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

function scrollToTarget(event) {
    event.preventDefault();
    const targetElement = document.querySelector(event.target.href);
    targetElement.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}