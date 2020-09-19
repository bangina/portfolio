//about page
const link1 = document.querySelector("#about_1");
const link2 = document.querySelector("#about_2");
const link3 = document.querySelector("#about_3");
const link4 = document.querySelector("#about_4");

function imgPop(event) {
    const imgNumber = event.target.id;
    console.log(imgNumber);
    mouseCursor.style.backgroundImage = `url("./img/${imgNumber}.jpg")`;
    mouseCursor.classList.add("cursor-grow");

}

function imgVanish() {
    mouseCursor.style.backgroundImage = `none`;
    mouseCursor.classList.remove("cursor-grow");
}


link1.addEventListener("mouseover", imgPop);
link1.addEventListener("mouseout", imgVanish);

link2.addEventListener("mouseover", imgPop);
link2.addEventListener("mouseout", imgVanish);

link3.addEventListener("mouseover", imgPop);
link3.addEventListener("mouseout", imgVanish);

link4.addEventListener("mouseover", imgPop);
link4.addEventListener("mouseout", imgVanish);
