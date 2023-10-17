document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery-image");

    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            // Retirer la classe "zoomed" de toutes les images au départ
            galleryImages.forEach(function (img) {
                img.classList.remove("zoomed");
            });

            // Ajouter ou supprimer la classe "zoomed" au clic sur l'image
            image.classList.toggle("zoomed");
        });
    });

    // Ajouter un gestionnaire d'événements au document pour désactiver le zoom en cliquant en dehors de l'image
    document.addEventListener('click', (event) => {
        galleryImages.forEach(function (img) {
            if (!img.contains(event.target)) {
                img.classList.remove('zoomed');
            }
        });
    });
});
