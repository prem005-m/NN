document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-card");
    
    images.forEach((image) => {
        image.addEventListener("mouseover", () => {
            image.style.transition = "transform 0.3s ease-in-out";
        });

        image.addEventListener("mouseleave", () => {
            image.style.transition = "transform 0.3s ease-in-out";
        });
    });
});