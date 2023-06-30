const divOnglets = document.querySelectorAll(".onglet");
const containChoix = document.querySelectorAll(".contain_choix");
const divsHeader = document.querySelectorAll(".div_header");
const accueils = document.querySelectorAll(".accueil");
const containAnimation = document.querySelector(".contain_animation");
const containAnimationAccueil = document.querySelector(".contain_animation_accueil");
const divOpacityDescription = document.querySelector("#opacity_description");
const divOpacityAccueil = document.querySelector("#opacity_accueil");

let count = 0;
let animActive = false;
let animAccueil = false;

divsHeader.forEach(divheader => {
    divheader.addEventListener("click", () => {
        if (animActive === false) {
            if (!divheader.classList.contains("active_header")) {
                divheader.classList.add("active_header")
            } else {
                return;
            }
            animationAccueil();
            let index = divheader.getAttribute("data-header");
            for (let i = 0; i < divsHeader.length; i++) {
                if (divsHeader[i].getAttribute("data-header") !== index) {
                    divsHeader[i].classList.remove("active_header")
                }

            }
            accueils.forEach(accueil => {
                divOpacityAccueil.classList.add("anim_opacity");
                setTimeout(() => {
                    if (divheader.getAttribute("data-header") === accueil.getAttribute("data-home")) {
                        accueil.classList.remove("none");
                    } else {
                        accueil.classList.add("none");
                    }
                }, 500)
            });
        }
    })
})

divOnglets.forEach(onglet => {
    onglet.addEventListener("click", () => {
        if (animActive === false) {
            if (!onglet.classList.contains("active")) {
                onglet.classList.add("active")
            } else {
                return;
            }
            animation(count);
            let index = onglet.getAttribute("data-id");
            for (let i = 0; i < divOnglets.length; i++) {
                if (divOnglets[i].getAttribute("data-id") !== index) {
                    divOnglets[i].classList.remove("active")
                }
            }
            containChoix.forEach(contChoix => {
                divOpacityDescription.classList.add("anim_opacity");
                setTimeout(() => {
                    if (onglet.getAttribute("data-id") === contChoix.getAttribute("data-id")) {
                        contChoix.classList.remove("none");
                    } else {
                        contChoix.classList.add("none");
                    }
                }, 500)
            });
        }
    })
});

function createColAnim(containAnim) {
    for (let i = 0; i < 20; i++) {
        let div = document.createElement("div");
        if (animAccueil === false) {
            div.classList.add("col_anim");
        } else {
            div.classList.add("col_anim_accueil");
        }
        if(window.screen.width < 900) {
            if(animAccueil === false) {
                div.classList.add("large_5"); 
             } else {
                 div.classList.add("small_10");
             } 
        } else {
            if(animAccueil === false) {
               div.classList.add("large_5"); 
            } else {
                div.classList.add("large_8");
            }   
        }
        div.classList.add("flex");
        div.classList.add("flex_column");
        containAnim.append(div);
    }

}

function createDivAnim(col) {
    let randNumber = Math.floor(Math.random() * 2);
    let div = document.createElement("div");
    div.textContent = randNumber;
    col.append(div)
}

function addAndDelDiv(index) {
    let animLength;
    let columns;
    if (animAccueil === false) {
        animLength = 5;
        columns = document.querySelectorAll(".col_anim");
    } else {
        animLength = 7;
        columns = document.querySelectorAll(".col_anim_accueil");
    }
    if (columns[index].children.length <= animLength) {
        createDivAnim(columns[index]);
        if (columns[index].children.length === animLength - 1) {
            columns[index].classList.remove("flex_column");
            columns[index].classList.add("flex_column_reverse");
        }
    } else {
        columns[index].removeChild(columns[index].children[0]);
    }
}

function deleteDiv(index) {
    let columns
    if (animAccueil === false) {
        columns = document.querySelectorAll(".col_anim");
    } else {
        columns = document.querySelectorAll(".col_anim_accueil");
    }
    if (columns[index].children.length !== 0) {
        columns[index].removeChild(columns[index].children[0]);
    } else {
        columns[index].innerHTML = "";
    }
}

function animation(count) {
    animActive = true;
    if (count === 0) {
        if (animAccueil === false) {
            createColAnim(containAnimation);
        } else {
            createColAnim(containAnimationAccueil)
        }
    }
    if (count <= 19) {
        let timeAdd;
        let timeDel;
        if (animAccueil === false) {
            timeAdd = 55; // 55
            timeDel = 80; // 80
        } else {
            timeAdd = 55; // 55
            timeDel = 155; // 155
        }
        window["int" + (count)] = setInterval(addAndDelDiv, timeAdd, count);
        window["intDel" + (count)] = setInterval(deleteDiv, timeDel, count);
        count++
        setTimeout(animation, 15, count); // 15
    }
    let clearAdd;
    let clearDel;
    if (animAccueil === false) {
        clearAdd = 700; // 700
        clearDel = 1150; // 1150
    } else {
        clearAdd = 500; // 500
        clearDel = 1600; // 1600
    }
    setTimeout(() => {
        clearInterval(window["int" + (count - 1)]);
    }, clearAdd)
    setTimeout(() => {
        clearInterval(window["intDel" + (count - 1)])
        if (count === 20) {
            divOpacityAccueil.classList.remove("anim_opacity");
            divOpacityDescription.classList.remove("anim_opacity");
            containAnimation.innerHTML = "";
            animActive = false;
            animAccueil = false;
            count = 0;
        }
    }, clearDel)
}

function animationAccueil() {
    animAccueil = true;
    animation(count);
}


