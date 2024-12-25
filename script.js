// Scroll doux vers les sections //
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
        const modal = document.getElementById("photoModal");
        const trigger = document.querySelector(".photo-gallery-trigger img");
        const closeModal = document.getElementById("closeModal");

        // Ouvre la galerie modale
        trigger.addEventListener("click", () => {
            modal.style.display = "flex";
        });

        // Ferme la galerie modale
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // Ferme le modal en cliquant en dehors du contenu
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
         }
    })
 });


