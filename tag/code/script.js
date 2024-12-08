export async function loadCodeBlock() {
    document.querySelectorAll("code-block").forEach((codeBlock, key) => {

        // init codeBlock
        codeBlock.key = "code-block-" + key;
        const codes = codeBlock.children;
        codeBlock.current = codes[0].firstElementChild.lang;
        const languages = [];
        for (let i = 0; i < codes.length; i++) {
            languages.push(codes[i].firstElementChild.lang);
            codes[i].firstElementChild.key = codeBlock.key;
        }

        // init language buttons
        codeBlock.innerHTML = codeBlockLanguageWrap() + codeBlock.innerHTML;
        const wrap = codeBlock.firstElementChild
        languages.forEach(lang => {
            wrap.innerHTML = wrap.innerHTML + codeBlockLanguageElement(codeBlock.key, lang);
        })

        // init language button eventlistener and select information display
        wrap.childNodes.forEach((button, key) => {
            button.addEventListener("click", changeCodeLanguage);
            button.lang = button.textContent;
            if (button.lang === codeBlock.current) {
                button.style.backgroundColor = "#444444";
            } else {
                codeBlock.getElementsByTagName("pre").item(key).firstElementChild.style.display = "none";
            }
        })
    })

    function codeBlockLanguageWrap() {
        return "<div class='code-block-button-wrap'></div>"
    }

    function codeBlockLanguageElement(key, lang) {
        return `<div class="clickable code-block-button" key="${key}">${lang}</div>`
    }
}

export function changeCodeLanguage(event) {
    event.preventDefault();
    event.stopPropagation();
    const key = event.target.getAttribute("key");
    const lang = event.target.innerHTML;

    document.querySelectorAll("code-block").forEach(codeBlock => {
        if (codeBlock.key === key) {
            codeBlock.current = lang;
            const elements = codeBlock.getElementsByTagName("pre");
            const buttons = codeBlock.firstElementChild.getElementsByClassName("code-block-button");

            for (let i = 0; i < elements.length; i++) {
                const code = elements[i].firstElementChild;
                if (code.lang === lang) {
                    code.style.display = "block"
                    buttons[i].style.backgroundColor = "#444444";
                } else {
                    code.style.display = "none"
                    buttons[i].style.backgroundColor = "";
                }
            }
        }
    })
}