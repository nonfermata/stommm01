

const openListBtn = document.querySelectorAll(".openList");
const accordionList = document.querySelectorAll(".accordion__list");
const showStatus = [];
for (let i = 0; i < openListBtn.length; i++) {
    showStatus[i] = false;
}
for (let i = 0; i < openListBtn.length; i++) {
    openListBtn[i].addEventListener("click", () => {
        if (!showStatus[i]) {
            accordionList[i].classList.add("accordion__list-show");
            openListBtn[i].classList.add("rotateBtn");
            showStatus[i] = !showStatus[i];
        } else {
            accordionList[i].classList.remove("accordion__list-show");
            openListBtn[i].classList.remove("rotateBtn");
            showStatus[i] = !showStatus[i];
        }
    });
}