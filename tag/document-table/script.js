export function loadFolderNames() {
    const folders = document.querySelectorAll("document-table-folder");

    folders.forEach(element => {
        element.innerHTML = toFolderName(element.getAttribute("name")) + element.innerHTML;
    })

    const folderContentsElements = document.querySelectorAll("document-table-folder-contents");

    folderContentsElements.forEach(element => {
        element.childNodes.forEach((child) => {
            child.innerHTML = itemImg() + child.innerHTML;
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