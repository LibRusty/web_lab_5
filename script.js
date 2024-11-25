const articleContent1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis!";
const articleContent2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.";

const articles = {
    "Новость A": `${articleContent1}<br/>${articleContent2}`,
    "Новость B": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, alias<br/>" + articleContent2,
    "Новость C": `${articleContent1}<br/>${articleContent2}`
};

function createDialog(className) {
    const dialog = document.createElement("div");
    dialog.className = className;
    return dialog;
}

function addDialogHeader(text) {
    const dialogHeader = document.createElement("h2");
    dialogHeader.style.marginBottom = "20px";
    dialogHeader.style.fontSize = "20px";
    dialogHeader.innerHTML = text;
    return dialogHeader;
}

function addDialogBody(text) {
    const dialogBody = document.createElement("div");
    dialogBody.innerHTML = text;
    return dialogBody;
}

function showDialog(headerText, bodyText) {
    const overlay = createDialog("overlayWrapper");
    const dialogBox = createDialog("overlayBox");

    const dialogHeader = addDialogHeader(headerText);
    const dialogBody = addDialogBody(`${headerText}: ${bodyText}`);

    dialogBox.appendChild(dialogHeader);
    dialogBox.appendChild(dialogBody);
    overlay.appendChild(dialogBox);
    document.body.appendChild(overlay);

    document.querySelector("main").style.opacity = 0.2;

    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            overlay.remove();
            document.querySelector("main").style.opacity = 1.0;
        }
    });
}

function extractArticleTitle(buttonElement) {
    const container = buttonElement.closest(".contentContainer");
    return container.querySelector(".contentHeader > h2");
}

function triggerPopup(button) {
    if (!document.querySelector(".overlayBox")) {
        const header = extractArticleTitle(button);
        showDialog(header.textContent, articles[header.textContent.trim()]);
    }
}
