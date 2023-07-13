
function backToTop() {
    // Role : afficher le bouton back to top si on a scrollé 1000px
    // Paramètres : néant

    // recuperer la position du scroll
    let positionY = window.scrollY;

    // recuperer le backToTop
    let b2t = $(".back-top");
    // let b2t = document.getElementById("backtotop");
    // si la position est superieur à 1/2 fenetre on affiche
    if (positionY > 1000) {
        b2t.css("display", "flex");
    } else {
        b2t.css("display", "none");
    }
}

function menu() {
    // Role : afficher le menu cacher en cliquant sur l'hamburger
    // parmètres : néant

    // recuperer le menu cacher
    let menu = document.querySelector(".nav-cache");
    // recuperer la div hamburger
    let hamb = document.querySelector(".hamb");
    // ajouter la class pour l'afficher au menu cacher
    menu.classList.toggle("nav-affiche");
    // ajouter la class pour animer l'hamburger
    hamb.classList.toggle("croix");
}

function changeHeader() {
//Role : le header change au bout de 390px de scroll
//parametres : néant

//recupere la position du header
    let positionHeader = $("header").offset().top;
//ajoute la class qui change le header si on scroll plus de 390px
    if (positionHeader > 390) {
        $("header").addClass("header-active");
    } else {
        //sinon on enleve la class
        $("header").removeClass("header-active");
    }
}

function affichePopup() {
    //Rôle : afficher la popup pendant 5 secondes
    // Paramètres : néant
    // 
    // recuperer la div du popup et faire apparaitre la popup
    $(".popup").css("display", "block");
}
setTimeout(affichePopup, 5000);

function fermePopup() {
    //Rôle : fermer la popup
    // Paramètres : néant
    // 
    // recuperer la div du popup et faire disparaître la popup
    $(".popup").css("display", "none");
}

function verifie() {
    // Role : vérifier que tous les champs sont corrects (sinon bloquer l'envoi)
    // paramètres : néant
    // Retour : true si ok, false sinon


    // vérifie email
    let okEmail = verifieEmail();

    if (okEmail) {
        // si le champs est bon
        return true;
    } else {
        // sinon
        return false;
    }


}
function verifieEmail() {
    // Rôle : vérifier que l'email est la bonne façon de l'ecrire
    // parametres : neant
    // retour : neant

    // recuperer l'email saisi
    let email = $("input#email");

    //vérifier la bonne écriture du mail
    let model = /^[a-z0-9_.-]+@[a-z0-9_.-]+[.][a-z0-9]{2,}$/;
    if (model.test(email.val())) {
    } else {
        // On affiche le message d'erreur et return false
        $(".erreur").text("L'adresse mail n'est pas écrite de la bonne façon").show();
        return false;
    }
    // Si on arrive là : on efface le message d'erreur et on retourne true
    $(".erreur").hidden();
    return true;
}

function afficheCategorie() {
    // rôle : afficher le menu categorie
    // parametres : neant

    // ajoute la class pour afficher le menu
    document.querySelector(".menu-categorie").classList.toggle("menu-categorie-active");
    document.querySelector(".menu-small").classList.toggle("menu-small-active");
}

function plus() {
    // rôle : ajoute 1 à la quantité
    // parametres : neant
    
    // recuperer la div quantité
    let nombre = document.querySelector(".quantite-number");
    nombre.textContent++;
}
function moins() {
    // rôle : diminue 1 à la quantité mais pas en dessous de 1
    
    // recuperer la div quantité
    let nombre = document.querySelector(".quantite-number");

    if (nombre.textContent === "1") {
        nombre.textContent = 1;
    } else {
        nombre.textContent--;
    }
}