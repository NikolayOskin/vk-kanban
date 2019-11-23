
let draggableCard = null;

function onDragStart(e) {
    e.target.style.opacity = .5;
    draggableCard = e.target;
    e.dataTransfer.setData('text/plain', null);
}

function onDragEnd(e) {
    e.target.style.opacity = "";
}

function onDragEnter(e) {
    if (e.target.classList.contains("card")) {
        e.target.style.opacity = .5;
    }
}

function onDragLeave(e) {
    if (e.target.classList.contains("card")) {
        e.target.style.opacity = "";
    }
}

function onDrop(e) {
    e.preventDefault();
    if (e.target.classList.contains("card") && e.target !== draggableCard) {
        draggableCard.parentNode.removeChild(draggableCard);
        e.target.style.opacity = "";
        appendAfter(e.target, draggableCard);
    }
}

function appendAfter(element, newElement) {
    element.parentNode.insertBefore(newElement, element.nextSibling);
}

const initDND = () => {
    document.addEventListener("dragstart", onDragStart, false);
    document.addEventListener("dragend", onDragEnd, false);
    document.addEventListener("dragenter", onDragEnter, false);
    document.addEventListener("dragleave", onDragLeave, false);
    document.addEventListener("dragover", function (e) {e.preventDefault()}, false);
    document.addEventListener("drop", onDrop, false);
}

export { initDND }