const openBtn = document.getElementById("openGallery");
const modal = document.getElementById("galleryModal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    modal.style.opacity = "1";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modal.style.opacity = "0";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
    modal.style.display = "none";
    modal.style.opacity = "0";
    }
});