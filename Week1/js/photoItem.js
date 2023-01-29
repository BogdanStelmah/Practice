const sideImgs = document.querySelectorAll(".current__sideImg");
const mainImg = document.querySelector(".current__mainImg");

sideImgs.forEach(side => {
   side.addEventListener("click", PlaceNewMainImg);
});

function PlaceNewMainImg(e) {
    let sideBlock = e.currentTarget;

    let tmpSide = sideBlock.querySelector("img");
    let tmpMain = mainImg.querySelector("img");

    mainImg.replaceChild(tmpSide.cloneNode(true), tmpMain);

    tmpMain.addEventListener("click", PlaceNewMainImg);

    sideBlock.replaceChild(tmpMain, tmpSide);
}