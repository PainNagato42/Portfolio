var random = Math.floor(Math.random() * 100) + 1;

const numbers = document.querySelectorAll(".btn");
const choix = document.querySelector("#number");
const responce = document.querySelector("#responce");
const info = document.querySelector(".info");
const cross = document.querySelector("#cross");
const valider = document.querySelector(".valider");
const retour = document.querySelector(".retour");
const suppr = document.querySelector(".suppr");
const btnCoeur = document.querySelector(".coeur");
const popupInfo = document.querySelector(".popup_info")
const victoire = document.querySelector(".victoire");
const defaite = document.querySelector(".defaite");
const mask = document.querySelector(".mask");
const resultV = document.querySelector("#resultV");
const resultD = document.querySelector("#resultD");
const containVie = document.querySelector(".vies");
var vies = document.querySelectorAll(".vie");
var pdv = 6;
const oneVie = document.querySelector(".vie");
var zoneHist = document.querySelector(".historique");

/******************************************/
/*             BTN NUMBER                */
/****************************************/
numbers.forEach(number => {
    number.addEventListener("click", () => {
        let chiffre = number.getAttribute("data-number");
        choix.textContent += chiffre
        switch (parseInt(choix.textContent)) {
            case 111:
                choix.textContent = "11"
                break;
            case 222:
                choix.textContent = "22"
                break;
            case 333:
                choix.textContent = "33"
                break;
            case 444:
                choix.textContent = "44"
                break;
            case 555:
                choix.textContent = "55"
                break;
            case 666:
                choix.textContent = "66"
                break;
            case 777:
                choix.textContent = "77"
                break;
            case 888:
                choix.textContent = "88"
                break;
            case 999:
                choix.textContent = "99"
                break;
            case 1000:
                choix.textContent = "100"
                break;
        
        }
        if (parseInt(choix.textContent) >= 1001) {
            choix.textContent = "100"
        }
        switch (parseInt(choix.textContent)) {
            case 0o1:
            choix.textContent = 1;
            break;
            case 0o2:
            choix.textContent = 2;
            break;
            case 0o3:
            choix.textContent = 3;
            break;
            case 0o4:
            choix.textContent = 4;
            break;
            case 0o5:
            choix.textContent = 5;
            break;
            case 0o6:
            choix.textContent = 6;
            break;
            case 0o7:
            choix.textContent = 7;
            break;
            case 8:
            choix.textContent = 8;
            break;
            case 9:
            choix.textContent = 9;
            break;
        }
    })
})

/******************************************/
/*             BTN VALIDER               */
/****************************************/
valider.addEventListener("click", () => {
    if (random < parseInt(choix.textContent)) {
        responce.classList.remove("plus");
        responce.classList.add("moins");
        containVie.removeChild(containVie.lastChild)
        containVie.removeChild(containVie.lastChild)
        pdv -= 1
        let divHist = document.createElement("div")
        divHist.classList.add("flex");
        divHist.classList.add("small_10");
        let hist = document.createElement("p");
        hist.textContent = choix.textContent;
        if(hist.textContent.length < 2) {
            hist.style.marginLeft = 4 + "px";
        }
        let div = document.createElement("div");
        div.classList.add("mini_moins");
        zoneHist.appendChild(divHist);
        divHist.appendChild(hist);
        divHist.appendChild(div);
    } else if (random > parseInt(choix.textContent)) {
        responce.classList.remove("moins");
        responce.classList.add("plus");
        containVie.removeChild(containVie.lastChild);
        containVie.removeChild(containVie.lastChild);
        pdv -= 1
        let divHist = document.createElement("div")
        divHist.classList.add("flex");
        divHist.classList.add("small_10");
        let hist = document.createElement("p");
        hist.textContent = choix.textContent;
        if(hist.textContent.length < 2) {
            hist.style.marginLeft = 4 + "px";
        }
        let div = document.createElement("div");
        div.classList.add("mini_plus");
        zoneHist.appendChild(divHist)
        divHist.appendChild(hist);
        divHist.appendChild(div);
    } else if (random == parseInt(choix.textContent)) {
        victoire.style.display = "block";
        mask.style.display = "block";
        responce.classList.add("bravo");
        resultV.textContent = random;
    }
    choix.textContent = "";
    if (pdv == 3) {
        btnCoeur.classList.remove("none");
    } else if (pdv == 1) {
        oneVie.classList.add("anim_vie");
    } else if (pdv == 0) {
        defaite.style.display = "block";
        mask.style.display = "block";
        resultD.textContent = random;
    }
})


/******************************************/
/*             BTN INFO                */
/****************************************/
info.addEventListener("click", () => {
    mask.style.display = "block";
    popupInfo.style.display = "block";
})
cross.addEventListener("click", () => {
    mask.style.display = "none";
    popupInfo.style.display = "none";
})
/******************************************/
/*             BTN RETOUR                */
/****************************************/
retour.addEventListener("click", () => {
    let choixRetour = choix.textContent.slice(0, -1);
    choix.textContent = choixRetour
})

/******************************************/
/*             BTN SUPPR                 */
/****************************************/
suppr.addEventListener("click", () => {
    choix.textContent = "";
})

/******************************************/
/*             BTN COEUR                 */
/****************************************/
btnCoeur.addEventListener("click", () => {
    var randomCoeur = Math.floor(Math.random() * 5) + 1;
    if(randomCoeur == 5) {
        var coeurPlus = document.createElement("div");
        coeurPlus.classList.add("vie");
        containVie.appendChild(coeurPlus);
        pdv += 1;
        btnCoeur.remove();
        if(pdv === 2) {
            oneVie.classList.remove("anim_vie");
        }
    } else {
        containVie.removeChild(containVie.lastChild);
        containVie.removeChild(containVie.lastChild);
        pdv -= 1;
        btnCoeur.remove();
        if (pdv === 0) {
            defaite.style.display = "block";
            mask.style.display = "block";
            resultD.textContent = random;
        }
    }
})
