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

function changeHeader() {
//Role : le header change au bout de 300px de scroll
//parametres : néant

//recupere la position du header
    let positionHeader = $("header").offset().top;
//ajoute la class qui change le header si on scroll plus de 300px
    if (positionHeader > 300) {
        $("header").addClass("header-active");
    } else {
        //sinon on enleve la class
        $("header").removeClass("header-active");
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

function changeHeader2() {
//Role : le header change au bout de 25px de scroll
//parametres : néant

//recupere la position du header
    let positionHeader = $("header").offset().top;
//ajoute la class qui change le header si on scroll plus de 25px
    if (positionHeader > 25) {
        $("header").addClass("header-active");
        $("header").removeClass("bg-color-firstColor");
    } else {
        //sinon on enleve la class
        $("header").removeClass("header-active");
        $("header").addClass("bg-color-firstColor");
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

function afficheMeteo() {
    // rôle : affiche la div météo
    // parametres : neant
    
    // recuperer la div météo et l'afficher
    $(".meteo").css("display", "block");
}

function cacheMeteo() {
    // rôle : cache la div météo
    // parametres : neant
    
    // recuperer la div météo et la faire cacher
    $(".meteo").css("display", "none");
}

function affichePopup() {
    //Rôle : afficher la popup après 5 secondes
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
    // recuperer la div du popup et faire la disparaître 
    $(".popup").css("display", "none");
}

function afficheNatGeo() {
    // Rôle : afficher la div nat-geo
    // paramètres : néant
    
    // recuper la div nat-geo et la faire apparaitre
    $(".nat-geo").css("display", "block");
}

function fermeNatGeo() {
    // Rôle : fermer la div nat-geo
    // parametres : néant
    
    // recuperer la div nat-geo et la faire disparaître 
    $(".nat-geo").css("display", "none");
}
function afficheFFP() {
    // Rôle : afficher la div ffp
    // paramètres : néant
    
    // recuper la div ffp et la faire apparaitre
    $(".ffp").css("display", "block");
}

function fermeFFP() {
    // Rôle : fermer la div ffp
    // parametres : néant
    
    // recuperer la div ffp et la faire disparaître 
    $(".ffp").css("display", "none");
}

function afficheFFVL() {
    // Rôle : afficher la div ffvl
    // paramètres : néant
    
    // recuper la div ffvl et la faire apparaitre
    $(".ffvl").css("display", "block");
}

function fermeFFVL() {
    // Rôle : fermer la div ffvl
    // parametres : néant
    
    // recuperer la div ffvl et la faire disparaître 
    $(".ffvl").css("display", "none");
}

function afficheGuinness() {
    // Rôle : afficher la div guinness
    // paramètres : néant
    
    // recuper la div guinness et la faire apparaitre
    $(".guinness").css("display", "block");
}

function fermeGuinness() {
    // Rôle : fermer la div guinness
    // parametres : néant
    
    // recuperer la div guinness et la faire disparaître 
    $(".guinness").css("display", "none");
}
