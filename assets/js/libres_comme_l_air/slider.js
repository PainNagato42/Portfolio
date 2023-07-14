var compteur = 0;
var timer = setInterval(slideSuivant, 5000);

function slideSuivant() {
    // rôle: afficher l'image suivant du slider
    // paramètres: néant

    // récuperer les images du slider
    let sliders = document.querySelectorAll(".image-slide");
    // récupérer le nombre d'image
    let nbSlide = sliders.length;
    // retirer la classe active du compteur actuel
    sliders[compteur].classList.remove("active");

    if (compteur < nbSlide - 1) {
        compteur++;
    } else {
        compteur = 0;
    }
    // Afficher la classe active du nouveau compteur
    sliders[compteur].classList.add("active");
    timer = clearInterval(timer);
    timer = setInterval(slideSuivant, 5000);
}

function slidePrecedent() {
    // rôle: afficher l'image precedent du slider
    // paramètres: néant

    // récuperer les images du slider
    let sliders = document.querySelectorAll(".image-slide");
    // récupérer le nombre d'image
    let nbSlide = sliders.length;
    // retirer la classe active du compteur actuel
    sliders[compteur].classList.remove("active");

    if (compteur > 0) {
        compteur--;
    } else {
        compteur = nbSlide - 1;
    }
    // Afficher la classe active du nouveau compteur
    sliders[compteur].classList.add("active");
    timer = clearInterval(timer);
    timer = setInterval(slideSuivant, 5000);
}