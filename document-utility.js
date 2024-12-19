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

    let target = event.target;
    while (target.tagName.toLowerCase() !== "a" && target.role !== "button") {
        target = target.parentElement;
    }

    console.log(target.href.split("#"));
    target = document.querySelector("#" + target.href.split("#")[1]);
    target.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}