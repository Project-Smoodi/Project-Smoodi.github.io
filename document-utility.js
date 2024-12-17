export function upgradeInnerAnchorScroll() {
    document.querySelectorAll("main a").forEach(el => {
        if (el.href.includes("#")) {
            el.addEventListener("click", scrollToTarget);
        }
    })
}

export function scrollToTarget(event) {
    event.preventDefault();
    event.stopPropagation();
    const targetElement = document.querySelector("#" + event.target.href.split("#")[1]);
    targetElement.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}