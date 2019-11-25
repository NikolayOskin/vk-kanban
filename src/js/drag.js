
let draggableCard = null;

function onDragStart(e) {
    e.target.style.opacity = .5;
    draggableCard = e.target;
    e.dataTransfer.setData('text/plain', null);
}

function onDragEnd(e) {
    e.target.style.opacity = "";
    e.target.style.background = "#fff";
}

function onDragEnter(e) {
    if (e.target.classList.contains("card")) {
        e.target.style.background = "#ababab";
    }
}

function onDragLeave(e) {
    if (e.target.classList.contains("card")) {
        e.target.style.background = "#fff";
    }
}

function onDrop(e) {
    e.preventDefault();
    if (e.target.classList.contains("card") && e.target !== draggableCard) {
        e.target.style.opacity = "";
        e.target.style.background = "#fff";        
        appendAfter(e.target, draggableCard);

    }
}

function appendAfter(element, newElement) {
    if (draggableCard.previousSibling === element) {
        element.parentNode.insertBefore(newElement, element);
        return;
    }
    element.parentNode.insertBefore(newElement, element.nextSibling);
}

const initDND = () => {
    document.addEventListener("dragstart", onDragStart, false);
    document.addEventListener("dragend", onDragEnd, false);
    document.addEventListener("dragenter", onDragEnter, false);
    document.addEventListener("dragleave", onDragLeave, false);
    document.addEventListener("dragover", function (e) { e.preventDefault() }, false);
    document.addEventListener("drop", onDrop, false);
}

export { initDND }