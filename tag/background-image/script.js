export let tags

export function settingBackgroundImage() {
    tags = document.getElementsByTagName("background-image");

    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        description(tag);
        inner(tag);
    }

    calculateDescriptionX();
    calculateDescriptionY();
    calculateOpacity();

    window.addEventListener("scroll", () => {
        calculateDescriptionY();
        calculateOpacity();
    });
}

function description(tag) {
    const description = document.createElement("background-image-description");
    description.className = tag.getAttribute("src");

    const imgIcon = document.createElement("img");
    imgIcon.src = "/public/tagged.svg";
    imgIcon.style.width = "22px";
    const text = tag.textContent;
    tag.textContent = ""
    description.appendChild(imgIcon);

    const p = document.createElement("p");
    p.innerHTML = "<ko>첨부 사진 - </ko><en>attached Image - </en>" + text;
    p.style.whiteSpace = "nowrap";
    description.appendChild(p);

    document.body.appendChild(description);
}

function inner(tag) {
    const inner = document.createElement("background-image-inner");
    inner.className = tag.getAttribute("src")
    document.body.appendChild(inner);

    inner.style.height = (window.innerHeight - 80) + "px";
    inner.style.background = `center center / cover no-repeat url(${location.pathname}${tag.getAttribute("src")}.png)`;
    inner.style.zIndex = "1";
}

function calculateDescriptionX() {
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        const description = document.querySelector(`background-image-description.${tag.getAttribute("src")}`);
        description.style.left = document.querySelector("main").getBoundingClientRect().left - description.clientWidth / 1.4 + "px";
    }
}

function calculateDescriptionY() {
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        const description = document.querySelector(`background-image-description.${tag.getAttribute("src")}`);

        description.style.top = tag.getBoundingClientRect().y - 50 + "px";
        console.log(description.top, tag.getBoundingClientRect().y);
    }
}

function calculateOpacity() {
    const yQuarters = window.innerHeight / 4;

    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        const children = document.getElementsByClassName(tag.getAttribute("src"));
        const tagY = tag.getBoundingClientRect().y;

        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if ((tagY > yQuarters) && (tagY < yQuarters * 3)) {
                child.style.opacity = "1";
            } else if (tagY > 0 && tagY < yQuarters * 4) {
                if (tagY > 0 && tagY < yQuarters * 2) {
                    child.style.opacity = tagY / yQuarters + "";
                } else if (tagY > yQuarters * 3 && tagY < yQuarters * 5) {
                    child.style.opacity = yQuarters / (tagY - yQuarters * 3) + "";
                }
            } else {
                child.style.opacity = "0";
            }
        }
    }
}