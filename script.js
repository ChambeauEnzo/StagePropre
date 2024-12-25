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
    const body = document.body; // Référence au body du document

    // Ouvre la galerie modale
    trigger.addEventListener("click", () => {
        modal.style.display = "flex"; // Affiche la modale
        body.style.overflow = "hidden"; // Empêche le défilement de la page principale
    });

    // Ferme la galerie modale lorsque la croix est cliquée
    closeModal.addEventListener("click", () => {
        modal.style.display = "none"; // Cache la modale
        body.style.overflow = "auto"; // Réactive le défilement de la page principale
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const today = new Date(); // Récupère la date actuelle
    const jours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    const jourActuel = jours[today.getDay()]; // Récupère le jour de la semaine actuel

    // Trouve tous les jours dans les horaires et applique une classe "highlight" au jour actuel
    const joursElements = document.querySelectorAll('.jour');
    
    joursElements.forEach(function(jourElement) {
        const jour = jourElement.getAttribute('data-jour');
        if (jour === jourActuel) {
            jourElement.classList.add('highlight'); // Ajoute une classe pour le jour actuel
        } else {
            jourElement.classList.remove('highlight'); // Retire la classe des autres jours
        }
    });
});


