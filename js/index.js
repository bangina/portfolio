//under construction modal
//close button
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".construction_modal");
const modalBg = document.querySelector(".modal-bg");

function closeModal() {
    modal.style.display = "none";
    modalBg.style.display = "none";
}
closeBtn.addEventListener("click", closeModal);