// Elements
const modal = document.getElementById("donateModal");
const btnTop = document.getElementById("donateBtnTop");
const btnHero = document.getElementById("donateBtnHero");
const closeBtn = document.querySelector(".close-btn");

// Open Modal Function
function openModal() {
    modal.style.display = "flex";
}

// Close Modal Function
function closeModal() {
    modal.style.display = "none";
}

// Event Listeners
btnTop.addEventListener("click", openModal);
btnHero.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

// Close Modal if user clicks outside the box
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});
