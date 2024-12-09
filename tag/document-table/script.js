export function loadFolderNames() {
    const folders = document.querySelectorAll("document-table-folder");

    folders.forEach(element => {
        element.innerHTML = toFolderName(element.getAttribute("name")) + element.innerHTML;
    })

    const folderContentsElements = document.querySelectorAll("document-table-folder-contents");

    folderContentsElements.forEach(folderContents => {
        folderContents.childNodes.forEach(anchor => {
            anchor.innerHTML = itemImg() + anchor.innerHTML;
            anchor.addEventListener("click", event => {
                event.stopPropagation();
                event.preventDefault();

                location.pathname = new URL(anchor.href).pathname + "/";
            });
        })
    })

    function toFolderName(name) {
        return `<document-table-folder-name>
                    <img src="/public/folder.svg" alt="folder" width="30px">
                    <p>${name}</p>
                </document-table-folder-name>`;
    }

    function itemImg() {
        return `<img src="/public/document.svg" alt="document" width="30px">`;
    }
}