export function loadSidebarContents() {
    const titles = document.querySelectorAll(".title");
    const sidebar = document.querySelector(".sidebar");

    titles.forEach((title, key) => {
        title.id = "title-" + key;

        const sidebarContent = document.createElement("p");
        sidebarContent.className += "sidebar-text";
        sidebarContent.innerHTML = title.innerHTML;
        sidebarContent.href = "#" + title.id;

        sidebarContent.addEventListener("click", scrollToTarget)

        sidebar.appendChild(sidebarContent)
    })
}

function scrollToTarget(event) {
    event.preventDefault();
    const targetElement = document.querySelector(event.target.href);
    targetElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}