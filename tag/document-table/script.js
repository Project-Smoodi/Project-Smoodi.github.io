export function loadFolderNames() {
    const folders = document.querySelectorAll("document-table-folder");
    const path = getPath();

    console.log(path);

    if (path.length > 1) {
        const forDelete = [];
        folders.forEach((folder, key) => {
            let name;
            if (!folder.getAttribute("fullname")) {
                name = folder.getAttribute("name");
            } else {
                name = folder.getAttribute("fullname");
            }
            if (!name.startsWith(path)) {
                forDelete.push(key);
            }
        })
        forDelete.reverse().forEach(it => {
            folders[it].remove();
        })
    }

    folders.forEach(element => {
        element.prepend(toFolderName(element.getAttribute("name")));
    })

    const folderContentsElements = document.querySelectorAll("document-table-folder-contents");

    folderContentsElements.forEach(folderContents => {

        for (let i = 0; i < folderContents.children.length; i++) {
            const anchor = folderContents.children[i];
            if (anchor.nodeName === "A") {
                anchor.prepend(itemImg());
                anchor.addEventListener("click", event => {
                    event.stopPropagation();
                    event.preventDefault();

                    location.pathname = new URL(anchor.href).pathname + "/";
                });
            }
        }
    })

    function toFolderName(name) {
        const folderName = document.createElement("document-table-folder-name");
        folderName.innerHTML = `<img src="/public/folder.svg" alt="folder" width="30px"><p>${name}</p>`
        return folderName;
    }

    function itemImg() {
        const img = document.createElement("img");
        img.src = "/public/document.svg";
        img.alt = "document"
        img.width = 30;

        return img;
    }

    function getPath() {
        let raw;
        if (location.pathname.startsWith("/Project-Smoodi-Docs")) {
            raw = location.pathname.split("/Project-Smoodi-Docs")[1];
        } else {
            raw = location.pathname;
        }


        if (raw.endsWith("/")) {
            return raw.slice(0, -1);
        } else {
            return raw
        }
    }
}