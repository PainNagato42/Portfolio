const choixTable = document.querySelector("#choix_table");
const btnTables = document.querySelectorAll(".btn_table");
const table = document.querySelector(".table");
const btnChoixTables = document.querySelector("#btn_choix_tables");
const containPlayer = document.querySelector("#player");
const containCardBank = document.querySelector("#contain-card-bank");
const containCardPlayer = document.querySelector("#contain-card-player");
const containCardSplit = document.querySelector("#contain-card-split");
const containMise = document.querySelector("#mises");
const containChoix = document.querySelector(".contain-choix");
const containAction = document.querySelector("#actions");
const money = document.querySelector(".money");
const mise = document.querySelector("#miseOk");
const miseSplit = document.querySelector("#miseOkSplit");
const btnMises = document.querySelectorAll(".mise");
const actions = document.querySelectorAll(".action");
const sommePlayer = document.querySelector("#sommePlayer");
const sommePlayerSplit = document.querySelector("#sommePlayerSplit");
const sommeBank = document.querySelector("#sommeBank");


let tabMise0 = [];
let tabMise1 = [];
let tabMise2 = [];
let tabMise3 = [];
let tableBgC = [];
let tableBoxS = [];
let player;
let count = 0;
let checkAS = false;
let checkASSplit2 = false;
let checkAsBank = false;
let BJ = false;
let split = false;
let numSplit = 0;

const tabCard = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const tabSymb = ["♥", "♦", "♣", "♠"];


/**************************************************************/
/*************** CHOIX DE LA TABLE ****************************/
/*************************************************************/

for (let i = 0; i <= 3; i++) {
    btnTables[i].addEventListener("click", () => {
        tabMise0 = ["50", "100", "500", "1000"];
        tabMise1 = ["1500", "2500", "5000", "7500"];
        tabMise2 = ["10000", "15000", "30000", "50000"];
        tabMise3 = ["100000", "250000", "500000", "1000000"];
        tableBgC = ["#1f5b1f", "royalblue", "#6a139b", "goldenrod"];
        tableBoxS = ["inset 0px 9px 5px #5cbb5c", "inset 0px 9px 5px #60b5ff", "inset 0px 9px 5px #a449d9", "inset 0px 9px 5px rgb(245, 192, 59)"];
        choixTable.classList.add("none");
        let j = 0
        btnMises.forEach(btnMise => {
            btnMise.style.backgroundColor = tableBgC[i];
            btnMise.style.boxShadow = tableBoxS[i];
            if (i !== 3) {
                btnMise.style.color = "#f1f1f1";
            } else {
                btnMise.style.color = "darkblue";
            }
            if (i === 0) {
                btnMise.textContent = tabMise0[j];
            } else if (i === 1) {
                btnMise.textContent = tabMise1[j];
            } else if (i === 2) {
                btnMise.textContent = tabMise2[j];
            } else if (i === 3) {
                btnMise.textContent = tabMise3[j];
            }
            j++;
        })
        actions.forEach(action => {
            action.style.backgroundColor = tableBgC[i];
            action.style.boxShadow = tableBoxS[i];
            if (i !== 3) {
                action.style.color = "#f1f1f1";
            } else {
                action.style.color = "darkblue";
            }
        })
        btnChoixTables.style.backgroundColor = tableBgC[i];
        btnChoixTables.style.boxShadow = tableBoxS[i];
        if (i !== 3) {
            btnChoixTables.style.color = "#f1f1f1";
        } else {
            btnChoixTables.style.color = "darkblue";
        }
        table.style.backgroundColor = tableBgC[i];
    })
}

btnChoixTables.addEventListener("click", () => {
    choixTable.classList.remove("none");
})

/**************************************************************/
/****************   MISES   ***********************************/
/**************************************************************/
btnMises.forEach(btnMise => {
    btnMise.addEventListener("click", (e) => {
        if (parseInt(money.textContent) >= parseInt(btnMise.textContent)) {
            setTimeout(() => {
                if (parseInt(money.textContent) < parseInt(mise.textContent)) {
                    for (let i = 2; i <= 3; i++) {
                        actions[i].classList.add("btn_stop")
                    }
                } else {
                    for (let i = 2; i <= 3; i++) {
                        actions[i].classList.remove("btn_stop")
                    }
                }
            }, 50)
            miser(e);
        }
    })
})

/**************************************************************/
/******************   ACTION    *******************************/
/**************************************************************/

actions[0].addEventListener("click", () => {
    tirePlayer();
})

actions[1].addEventListener("click", () => {
    if (split === false) {
        if (!actions[3].classList.contains("none")) {
            containAction.classList.add("none");
        } else {
            actions[0].classList.add("none");
            actions[1].classList.add("none");
            actions[2].classList.add("none");
        }
        if (checkAS === false) {
            bank();
        } else {
            if (sommePlayer.textContent.length === 4) {
                sommePlayer.textContent = sommePlayer.textContent[2] + sommePlayer.textContent[3];
            } else {
                sommePlayer.textContent = sommePlayer.textContent[3] + sommePlayer.textContent[4];
            }
            bank();
        }

    } else { // split true
        if (numSplit === 1) {
            containAction.classList.add("none");
            if (checkAS === false) {
                if (parseInt(sommePlayerSplit.textContent) === 21) {
                    containCardPlayer.classList.remove("border-split");
                    bank();
                } else {
                    numSplit = 2;
                    containAction.classList.remove("none");
                    containCardPlayer.classList.remove("border-split");
                    containCardSplit.classList.add("border-split");
                }

            } else { // checkAS true
                if (sommePlayer.textContent.length === 4) {
                    sommePlayer.textContent = sommePlayer.textContent[2] + sommePlayer.textContent[3];
                } else {
                    sommePlayer.textContent = sommePlayer.textContent[3] + sommePlayer.textContent[4];
                }
                if (parseInt(sommePlayerSplit.textContent) < 21) {
                    numSplit = 2;
                    containAction.classList.remove("none");
                    containCardPlayer.classList.remove("border-split");
                    containCardSplit.classList.add("border-split");
                } else if (parseInt(sommePlayerSplit.textContent) === 21) {
                    containCardPlayer.classList.remove("border-split");
                    containCardSplit.classList.remove("border-split");
                    bank();
                } else {
                    containCardPlayer.classList.remove("border-split");
                    bank();
                }
            }

        } else { // numSplit !== 1
            if (checkASSplit2 === false) {
                containAction.classList.add("none");
                containCardSplit.classList.remove("border-split");
                bank();
            } else { // checkASSplit2 true
                if (sommePlayerSplit.textContent.length === 4) {
                    sommePlayerSplit.textContent = sommePlayerSplit.textContent[2] + sommePlayerSplit.textContent[3];
                } else {
                    sommePlayerSplit.textContent = sommePlayerSplit.textContent[3] + sommePlayerSplit.textContent[4];
                }
                containAction.classList.add("none");
                containCardSplit.classList.remove("border-split");
                bank();
            }
        }

    }
})

actions[2].addEventListener("click", () => {
    if (parseInt(money.textContent) >= parseInt(mise.textContent)) {
        if (split === false) {
            money.textContent -= mise.textContent;
            mise.textContent *= 2;
            containAction.classList.add("none");
            if (checkAS === true) {

                setTimeout(card, 300);
                setTimeout(() => {
                    if (sommePlayer.textContent.length === 4) {
                        if (sommePlayer.textContent[2] + sommePlayer.textContent[3] <= 21) {
                            sommePlayer.textContent = sommePlayer.textContent[2] + sommePlayer.textContent[3];
                        }
                    } else {
                        if (sommePlayer.textContent[3] + sommePlayer.textContent[4] <= 21) {
                            sommePlayer.textContent = sommePlayer.textContent[3] + sommePlayer.textContent[4];
                        } else {
                            sommePlayer.textContent = sommePlayer.textContent[0] + sommePlayer.textContent[1];
                        }

                    }
                    bank();
                }, 350)

            } else { // checkAS false
                setTimeout(card, 300);
                setTimeout(() => {
                    if (sommePlayer.textContent <= 21) {
                        setTimeout(bank, 300);
                    } else {
                        BgColor(1);
                        setTimeout(reset, 1700);
                    }
                }, 500)
            }
        } else { // split true
            if (numSplit === 1) {
                money.textContent -= mise.textContent;
                mise.textContent *= 2;
                if (checkAS === true) {
                    setTimeout(card, 300);
                    setTimeout(() => {
                        if (sommePlayer.textContent.length === 4) {
                            if (sommePlayer.textContent[2] + sommePlayer.textContent[3] <= 21) {
                                sommePlayer.textContent = sommePlayer.textContent[2] + sommePlayer.textContent[3];
                            }
                        } else {
                            if (sommePlayer.textContent[3] + sommePlayer.textContent[4] <= 21) {
                                sommePlayer.textContent = sommePlayer.textContent[3] + sommePlayer.textContent[4];
                            } else {
                                sommePlayer.textContent = sommePlayer.textContent[0] + sommePlayer.textContent[1];
                            }

                        }
                        if (parseInt(sommePlayerSplit.textContent) === 21) {
                            containCardPlayer.classList.remove("border-split");
                            bank();
                        } else {
                            numSplit = 2;
                            containCardPlayer.classList.remove("border-split");
                            containCardSplit.classList.add("border-split");
                        }

                    }, 350)
                } else { // checkAS false
                    setTimeout(card, 300);
                    setTimeout(() => {
                        if (sommePlayer.textContent <= 21) {
                            numSplit = 2;
                            containCardPlayer.classList.remove("border-split");
                            containCardSplit.classList.add("border-split");
                        } else {
                            BgColor(1);
                            numSplit = 2;
                            containCardPlayer.classList.remove("border-split");
                            containCardSplit.classList.add("border-split");
                        }
                    }, 500)
                }
            } else { // numSplit !== 1
                containAction.classList.add("none");
                money.textContent -= mise.textContent;
                miseSplit.textContent *= 2;
                if (checkASSplit2 === true) {
                    setTimeout(card, 300);
                    setTimeout(() => {
                        if (sommePlayerSplit.textContent.length === 4) {
                            if (sommePlayerSplit.textContent[2] + sommePlayerSplit.textContent[3] <= 21) {
                                sommePlayerSplit.textContent = sommePlayerSplit.textContent[2] + sommePlayerSplit.textContent[3];
                            }
                        } else {
                            if (sommePlayerSplit.textContent[3] + sommePlayerSplit.textContent[4] <= 21) {
                                sommePlayerSplit.textContent = sommePlayerSplit.textContent[3] + sommePlayerSplit.textContent[4];
                            } else {
                                sommePlayerSplit.textContent = sommePlayerSplit.textContent[0] + sommePlayerSplit.textContent[1];
                            }

                        }
                        containCardSplit.classList.remove("border-split");
                        bank();
                    }, 350)
                } else {
                    setTimeout(card, 300);
                    setTimeout(() => {
                        if (sommePlayerSplit.textContent <= 21) {
                            containCardSplit.classList.remove("border-split");
                            setTimeout(bank, 300);
                        } else {
                            BgColor(1);
                            containCardSplit.classList.remove("border-split");
                            setTimeout(reset, 1700);
                        }
                    }, 500)
                }

            }
        }
    }
})

actions[3].addEventListener("click", () => {
    if (parseInt(money.textContent) >= parseInt(mise.textContent)) {
        let cards = document.querySelectorAll(".card-player");
        let numCard = document.querySelectorAll(".card-player div.left");
        if (numCard[1].textContent !== "A" && numCard[0].textContent !== "A") {
            sommePlayer.textContent -= valueCard(numCard[1].textContent);
            sommePlayerSplit.textContent += valueCard(numCard[1].textContent);
        } else {
            sommePlayer.textContent = "1/11";
            sommePlayerSplit.textContent = "1/11";
        }
        if (numCard[1].textContent === "A") {
            checkASSplit2 = true;
        }
        if (window.screen.width < 768) {
            document.querySelector("#split_1").classList.add("split_1");
            document.querySelector("#split_2").classList.add("split_2");
        }
        cards[1].classList.remove("card-player");
        cards[1].classList.add("card-split");
        containCardSplit.append(cards[1]);
        actions[3].classList.add("none");
        containPlayer.classList.add("justify_around");
        containPlayer.classList.add("large_90");
        mise.classList.add("left_28"); 
        if(window.screen.width <= 768) {
          mise.classList.add("left_26");  
        }
        miseSplit.textContent = parseInt(mise.textContent);
        money.textContent -= miseSplit.textContent
        miseSplit.classList.remove("none");
        split = true;
        setTimeout(() => {
            if (parseInt(money.textContent) < parseInt(mise.textContent)) {
                for (let i = 2; i <= 3; i++) {
                    actions[i].classList.add("btn_stop")
                }
            } else {
                for (let i = 2; i <= 3; i++) {
                    actions[i].classList.remove("btn_stop")
                }
            }
        }, 50)
        setTimeout(() => {
            containCardPlayer.classList.add("border-split");
        }, 1600);
        tireSplit();
    }
})

/**************************************************************/
/****************   FUNCTION    *******************************/
/**************************************************************/

function miser(e) {
    money.textContent -= e.target.textContent;
    mise.textContent = e.target.textContent;
    containMise.classList.add("none");
    btnChoixTables.classList.add("none");
    setTimeout(afficheCard, 500);
    setTimeout(() => {
        let cardFlip = document.querySelector(".card-flip");
        let valueCardFlip = valueCard(document.querySelector(".card-flip div.left").textContent);
        if (valueCardFlip === 1) {
            checkAsBank = true;
        }
        containAction.classList.remove("none");
        if (sommePlayer.textContent == 21) {
            blackJackPlayer();
            containAction.classList.add("none");
            BJ = true;
            win();
        }
        if (sommeBank.textContent === "1/11" && valueCardFlip === 10 || sommeBank.textContent === "10" && valueCardFlip === 1) {
            blackJackBank();
            cardFlip.style.transform = "rotateY(0deg)";
            containAction.classList.add("none");
            setTimeout(reset, 1700);
        }
        if (parseInt(sommePlayer.textContent) === 21 && sommeBank.textContent === "1/11" && valueCardFlip === 10 || sommeBank.textContent === "10" && valueCardFlip === 1) {
            blackJackPlayer();
            blackJackBank();
            containAction.classList.add("none");
            setTimeout(() => {
                money.textContent = parseInt(money.textContent) + parseInt(mise.textContent);
                reset();
            }, 1700)
        }
        mise.classList.remove("none");
    }, 2500);
}

/****************   CARD  *******************************/

function afficheCard() {
    if (count < 4) {
        if (count === 0 || count === 2) {
            player = 1
        } else {
            player = 2
        }
        count++;
        card();
        setTimeout(afficheCard, 500);
    } else {
        let cardPlayer = document.querySelectorAll(".card-player div.left");
        let val1 = valueCard(cardPlayer[0].textContent[0]);
        let val2 = valueCard(cardPlayer[1].textContent[0]);
        if (val1 === 1) {
            val1 = 10;
        }
        if (val2 === 1) {
            val2 = 10;
        }
        if (val1 === val2) {
            actions[3].classList.remove("none");
        }
        count = 0;
        player = 1;

    }
}

function card() {
    let randomCard = Math.floor(Math.random() * tabCard.length);
    let randomSymb = Math.floor(Math.random() * tabSymb.length);
    let card = document.createElement("div");
    let cardFlip = document.createElement("label");
    let color;
    if (randomSymb === 0 || randomSymb === 1) {
        color = "red";
    } else {
        color = "black";
    }
    let redCard;
    if(table.style.backgroundColor === "royalblue") {
        redCard = " red_card";
    } else {
        redCard = "";
    }
    card.classList.add("card");
    card.innerHTML = "<div class='" + color + "'><div class='left'>" + tabCard[randomCard] + "</div><div class='middle center'>" + tabSymb[randomSymb] + "</div><div class='right'>" + tabCard[randomCard] + "</div></div>";
    cardFlip.innerHTML = "<input class='check_none' type='checkbox' checked><div class='card-flip'><div class='front " + color + "'><div><div class='left'>" + tabCard[randomCard] + "</div><div class='middle center'>" + tabSymb[randomSymb] + "</div><div class='right'>" + tabCard[randomCard] + "</div></div></div><div class='back"+redCard+"'></div></div>";
    if (player === 1 && count < 4) {
        if (split === false || split === true && numSplit === 1) {
            card.classList.add("card-player");
            if (split === true && window.screen.width < 768) {
                card.style.marginLeft = -64 + "px";
            }
            containCardPlayer.append(card);
            if (count === 1) {
                if (document.querySelector(".card-player div.left").textContent === "A") {
                    checkAS = true;
                }
            }
            if (count === 3 || split === true && numSplit === 1) {
                card.classList.add("card-player");
                containCardPlayer.append(card);
                if (document.querySelectorAll(".card-player div.left")[1].textContent === "A") {
                    checkAS = true;
                }
            }
            if (checkAS === false) {
                additionCard(valueCard(tabCard[randomCard]));
            } else {
                AS();
            }
        } else {
            card.classList.add("card-split");
            if (window.screen.width < 768) {
                card.style.marginLeft = -64 + "px";
            }
            containCardSplit.append(card);
            if (document.querySelectorAll(".card-split div.left")[1].textContent === "A") {
                checkASSplit2 = true
            }
            if (checkASSplit2 === false) {
                additionCard(valueCard(tabCard[randomCard]));
            } else {
                AS();
            }

        }
    } else if (player === 2 && count > 1 && player === 2 && count < 4) {
        containCardBank.append(card);
        card.classList.add("card-bank");
        if (tabCard[randomCard] !== "A") {
            sommeBank.textContent = valueCard(tabCard[randomCard]);
        } else {
            checkAsBank = true
            sommeBank.textContent = "1/11";
        }

    } else if (player === 2 && count === 0) {
        card.classList.add("card-bank");
        containCardBank.append(card);
        if (checkAsBank === false) {
            additionCard(valueCard(tabCard[randomCard]));
        } else {
            AS();
        }
        tireBank(parseInt(sommeBank.textContent));
    } else {
        count++
        containCardBank.append(cardFlip);
    }
}

function valueCard(card) {
    if (card === "J" || card === "Q" || card === "K") {
        somme = 10;
    } else if (card === "A") {
        somme = 1;
    } else {
        somme = parseInt(card);
    }
    return somme;
}

function additionCard(valeur) {
    if (player === 1) {
        if (split === false || split === true && numSplit === 1) {
            if (sommePlayer.textContent === "") {
                return sommePlayer.textContent = valeur;
            }
            return sommePlayer.textContent = parseInt(sommePlayer.textContent) + valeur;
        } else {
            return sommePlayerSplit.textContent = parseInt(sommePlayerSplit.textContent) + valeur;
        }
    } else {
        if (sommeBank.textContent === "") {
            return sommeBank.textContent = valeur;
        }
        return sommeBank.textContent = parseInt(sommeBank.textContent) + valeur
    }

}

function AS() {

    let calc1;
    let calc2;
    if (document.querySelectorAll(".card-player").length === 1 && split === false) {
        if (document.querySelector(".card-player div.left").textContent === "A") {
            sommePlayer.textContent = "1/11";
        } else {
            sommePlayer.textContent = valueCard(document.querySelector(".card-player div.left").textContent);
        }

    } else if (document.querySelectorAll(".card-player").length === 2 && player === 1 && split === false) {
        if (document.querySelectorAll(".card-player div.left")[0].textContent === "A") {
            calc1 = valueCard(document.querySelectorAll(".card-player div.left")[1].textContent) + 1;
            calc2 = valueCard(document.querySelectorAll(".card-player div.left")[1].textContent) + 11;
            sommePlayer.textContent = calc1 + "/" + calc2;
        } else {
            calc1 = valueCard(document.querySelectorAll(".card-player div.left")[1].textContent) + parseInt(sommePlayer.textContent);
            calc2 = valueCard(document.querySelectorAll(".card-player div.left")[1].textContent) + parseInt(sommePlayer.textContent) + 10;
            sommePlayer.textContent = calc1 + "/" + calc2;
        }
        if (sommePlayer.textContent === "11/21") {
            sommePlayer.textContent = 21;
        }
    } else {
        if (player === 1 && numSplit === 0 || player === 1 && numSplit === 1) {
            let len = document.querySelectorAll(".card-player").length
            calc1 = valueCard(document.querySelectorAll(".card-player div.left")[len - 1].textContent) + parseInt(sommePlayer.textContent);
            calc2 = valueCard(document.querySelectorAll(".card-player div.left")[len - 1].textContent) + parseInt(sommePlayer.textContent) + 10;
            sommePlayer.textContent = calc1 + "/" + calc2;
        }
        if (player === 2) {
            let len = document.querySelectorAll(".card-bank").length
            calc1 = valueCard(document.querySelectorAll(".card-bank div.left")[len - 1].textContent) + parseInt(sommeBank.textContent);
            calc2 = valueCard(document.querySelectorAll(".card-bank div.left")[len - 1].textContent) + parseInt(sommeBank.textContent) + 10;
            sommeBank.textContent = calc1 + "/" + calc2;
        }
        if (player === 1 && numSplit === 2) {
            let len = document.querySelectorAll(".card-split").length
            calc1 = valueCard(document.querySelectorAll(".card-split div.left")[len - 1].textContent) + parseInt(sommePlayerSplit.textContent);
            calc2 = valueCard(document.querySelectorAll(".card-split div.left")[len - 1].textContent) + parseInt(sommePlayerSplit.textContent) + 10;
            sommePlayerSplit.textContent = calc1 + "/" + calc2;
        }
        if (sommePlayer.textContent === "11/21") {
            sommePlayer.textContent = 21;
        }
        if (sommePlayerSplit.textContent === "11/21") {
            sommePlayerSplit.textContent = 21;
        }

    }
}

/****************   PLAYER ET BANK   *******************************/

function bank() {
    let cardFlip = document.querySelector(".card-flip");
    let valueCardFlip = valueCard(document.querySelector(".card-flip div.left").textContent);
    player = 2;
    setTimeout(() => {
        cardFlip.style.transform = "rotateY(0deg)";
        if (sommeBank.textContent !== "1/11" && valueCardFlip !== 1) {
            additionCard(valueCardFlip);
        } else if (valueCardFlip === 1) {
            sommeBank.textContent = parseInt(sommeBank.textContent) + valueCardFlip + "/" + (parseInt(sommeBank.textContent) + 11);
        } else {
            sommeBank.textContent = parseInt(sommeBank.textContent) + valueCardFlip + "/" + (valueCardFlip + 11);
        }
        tireBank(parseInt(sommeBank.textContent));
    }, 300);

}

function tirePlayer() {
    if (!actions[2].classList.contains("none")) {
        actions[2].classList.add("none");
    }
    if (window.screen.width < 768) {
        if (!actions[0].classList.contains("none") && !actions[1].classList.contains("none") && actions[2].classList.contains("none") && actions[3].classList.contains("none")) {
            containChoix.style.bottom = -18 + "%";
        }
    }
    containAction.classList.add("none");
    setTimeout(card, 300);
    setTimeout(() => {
        if (checkAS === true) {
            if (parseInt(sommePlayer.textContent[0] + sommePlayer.textContent[1]) > 11) {
                sommePlayer.textContent = parseInt(sommePlayer.textContent[0] + sommePlayer.textContent[1]);
                checkAS = false;
            }
            if (parseInt(sommePlayer.textContent[3] + sommePlayer.textContent[4]) === 21) {
                sommePlayer.textContent = 21;
                checkAS = false;
            }
        }
        if (checkASSplit2 === true && split === true && numSplit === 2) {
            if (parseInt(sommePlayerSplit.textContent[0] + sommePlayerSplit.textContent[1]) > 11) {
                sommePlayerSplit.textContent = parseInt(sommePlayerSplit.textContent[0] + sommePlayerSplit.textContent[1]);
                checkASSplit2 = false;
            }
            if (parseInt(sommePlayerSplit.textContent[3] + sommePlayerSplit.textContent[4]) === 21) {
                sommePlayerSplit.textContent = 21;
                checkASSplit2 = false;
            }
        }
        if (split === false) {
            if (parseInt(sommePlayer.textContent) < 21) {
                setTimeout(() => {
                    containAction.classList.remove("none");
                }, 500)
            } else if (parseInt(sommePlayer.textContent) > 21) {
                BgColor(1);
                containAction.classList.add("none");
                setTimeout(reset, 1700);
            } else {
                containAction.classList.add("none");
                setTimeout(bank, 500);
            }
        } else { // split true
            if (parseInt(sommePlayer.textContent) <= 21 && parseInt(sommePlayerSplit.textContent) < 21 || parseInt(sommePlayer.textContent) > 21 && parseInt(sommePlayerSplit.textContent) < 21) {
                setTimeout(() => {
                    containAction.classList.remove("none");
                }, 600)
            }
            if (numSplit === 1) {
                if (parseInt(sommePlayer.textContent) > 21) {
                    if (parseInt(sommePlayerSplit.textContent) === 21) {
                        BgColor(1);
                        containAction.classList.add("none");
                        containCardPlayer.classList.remove("border-split");
                        bank();
                    } else {
                        setTimeout(() => {
                            numSplit = 2;
                        }, 50);
                        BgColor(1);
                        mise.classList.add("none");
                        containCardPlayer.classList.remove("border-split");
                        containCardSplit.classList.add("border-split");
                    }
                }
                if (parseInt(sommePlayer.textContent) === 21) {
                    numSplit = 2
                    containCardPlayer.classList.remove("border-split");
                    containCardSplit.classList.add("border-split");
                }
                if (parseInt(sommePlayer.textContent) === 21 && parseInt(sommePlayerSplit.textContent) === 21) {
                    containAction.classList.add("none");
                    containCardPlayer.classList.remove("border-split");
                    containCardSplit.classList.remove("border-split");
                    bank();
                }
            } else { // numSplit !== 1
                if (parseInt(sommePlayerSplit.textContent) > 21 && parseInt(sommePlayer.textContent) <= 21) {
                    BgColor(1);
                    miseSplit.classList.add("none");
                    containCardSplit.classList.remove("border-split");
                    containAction.classList.add("none");
                    bank();
                }
                if (parseInt(sommePlayerSplit.textContent) === 21) {
                    containAction.classList.add("none");
                    containCardSplit.classList.remove("border-split");
                    bank();
                }
                if (parseInt(sommePlayer.textContent) > 21 && parseInt(sommePlayerSplit.textContent) > 21) {
                    BgColor(1);
                    containAction.classList.add("none");
                    mise.classList.add("none");
                    miseSplit.classList.add("none");
                    containCardSplit.classList.remove("border-split");
                    setTimeout(reset, 1700);
                }
            }
        }
    }, 350)
}

function tireSplit() {
    if (numSplit === 0) {
        containAction.classList.add("none");
        numSplit = 1
        setTimeout(card, 700);
        setTimeout(tireSplit, 700);
    } else if (numSplit === 1) {
        numSplit = 2
        setTimeout(card, 700);
        setTimeout(tireSplit, 900);
    } else {
        containAction.classList.remove("none");
        numSplit = 1
        if (parseInt(sommePlayer.textContent) === 21 && parseInt(sommePlayerSplit.textContent) < 21) {
            numSplit = 2
            containCardPlayer.classList.remove("border-split");
            containCardSplit.classList.add("border-split");
        }
        if (parseInt(sommePlayer.textContent) === 21 && parseInt(sommePlayerSplit.textContent) === 21) {
            containAction.classList.add("none");
            containCardPlayer.classList.remove("border-split");
            bank();
        }
    }
}

function tireBank(sBank) {
    // sBank = parseInt(sommeBank.textContent)
    if (checkAsBank === true) {
        if (parseInt(sommeBank.textContent[0] + sommeBank.textContent[1]) > 10) {
            sommeBank.textContent = parseInt(sommeBank.textContent[0] + sommeBank.textContent[1]);
            checkAsBank = false;
        }
    }
    if (sBank < 17) {
        setTimeout(card, 900);
    } else if (sBank > 21 && split === false) {
        BgColor(0);
        setTimeout(() => {
            win();
        }, 1700)
    } else {
        if (split === false) {
            if (parseInt(sommePlayer.textContent) > sBank) {
                BgColor(0);
                setTimeout(() => {
                    win();
                }, 1700)
            } else if (parseInt(sommePlayer.textContent) < sBank) {
                BgColor(1);
                setTimeout(() => {
                    reset();
                }, 1700)

            } else {
                BgColor(2);
                setTimeout(() => {
                    money.textContent = parseInt(money.textContent) + parseInt(mise.textContent);
                    reset();
                }, 1700)
            }
        } else { // split true
            containAction.classList.add("none");
            containCardSplit.classList.remove("border-split");
            if (parseInt(sommePlayer.textContent) > sBank && parseInt(sommePlayer.textContent) <= 21 && parseInt(sommePlayerSplit.textContent) > 21 || parseInt(sommePlayer.textContent) > sBank && parseInt(sommePlayer.textContent) <= 21 && parseInt(sommePlayerSplit.textContent) < sBank || parseInt(sommePlayer.textContent) < sBank && sBank > 21 && parseInt(sommePlayerSplit.textContent) > 21) {
                numSplit = 1;
                BgColor(0);
                setTimeout(() => {
                    win();
                }, 1700)
            } else if (parseInt(sommePlayerSplit.textContent) > sBank && parseInt(sommePlayerSplit.textContent) <= 21 && parseInt(sommePlayer.textContent) > 21 || parseInt(sommePlayerSplit.textContent) > sBank && parseInt(sommePlayerSplit.textContent) <= 21 && parseInt(sommePlayer.textContent) < sBank || parseInt(sommePlayerSplit.textContent) < sBank && sBank > 21 && parseInt(sommePlayer.textContent) > 21) {
                numSplit = 2;
                BgColor(0);
                setTimeout(() => {
                    win();
                }, 1700)
            } else if (parseInt(sommePlayer.textContent) > sBank && parseInt(sommePlayerSplit.textContent) > sBank || parseInt(sommePlayer.textContent) < sBank && parseInt(sommePlayerSplit.textContent) < sBank && sBank > 21) {
                numSplit = 0;
                BgColor(0);
                setTimeout(() => {
                    win();
                }, 1700)
            }
            if (parseInt(sommePlayer.textContent) < sBank && sBank <= 21) {
                numSplit = 1;
                BgColor(1);
            }
            if (parseInt(sommePlayerSplit.textContent) < sBank && sBank <= 21) {
                numSplit = 2;
                BgColor(1);
            }
            if (parseInt(sommePlayer.textContent) < sBank && parseInt(sommePlayerSplit.textContent) < sBank && sBank <= 21 || parseInt(sommePlayer.textContent) < sBank && parseInt(sommePlayerSplit.textContent) > 21 && sBank <= 21 || parseInt(sommePlayerSplit.textContent) < sBank && parseInt(sommePlayer.textContent) > 21 && sBank <= 21) {
                numSplit = 0;
                BgColor(1);
                setTimeout(() => {
                    reset();
                }, 1700)
            }
            if (parseInt(sommePlayer.textContent) === sBank && parseInt(sommePlayer.textContent) <= 21) {
                numSplit = 1;
                BgColor(2);
            }
            if (parseInt(sommePlayer.textContent) === sBank && (parseInt(sommePlayerSplit.textContent) < sBank || parseInt(sommePlayerSplit.textContent) > sBank && parseInt(sommePlayerSplit.textContent) > 21)) {
                setTimeout(() => {
                    money.textContent = parseInt(money.textContent) + parseInt(mise.textContent);
                    reset();
                }, 1700)
            }
            if (parseInt(sommePlayer.textContent) === sBank && parseInt(sommePlayerSplit.textContent) > sBank && parseInt(sommePlayerSplit.textContent) <= 21) {
                numSplit = 2;
                BgColor(0);
                setTimeout(() => {
                    win();
                }, 1700)
            }
            if (parseInt(sommePlayerSplit.textContent) === sBank && parseInt(sommePlayerSplit.textContent) <= 21) {
                numSplit = 2;
                BgColor(2);
            }
            if (parseInt(sommePlayerSplit.textContent) === sBank && (parseInt(sommePlayer.textContent) < sBank || parseInt(sommePlayer.textContent) > sBank && parseInt(sommePlayer.textContent) > 21)) {
                setTimeout(() => {
                    money.textContent = parseInt(money.textContent) + parseInt(miseSplit.textContent);
                    reset();
                }, 1700)
            }
            if (parseInt(sommePlayerSplit.textContent) === sBank && parseInt(sommePlayer.textContent) > sBank && parseInt(sommePlayer.textContent) <= 21) {
                numSplit = 1;
                BgColor(0);
                setTimeout(() => {
                    win();
                }, 1700)
            }
            if ((parseInt(sommePlayer.textContent) === sBank && parseInt(sommePlayerSplit.textContent) === sBank) && (parseInt(sommePlayer.textContent) <= 21 && parseInt(sommePlayerSplit.textContent) <= 21)) {
                numSplit = 0;
                BgColor(2);
                setTimeout(() => {
                    money.textContent = parseInt(money.textContent) + parseInt(mise.textContent) + parseInt(miseSplit.textContent);
                    reset();
                }, 1700)
            }
        }

    }
}

/****************   WIN / LOSE / EGAL    *******************************/

function win() {
    if (BJ === true) {
        setTimeout(() => {
            money.textContent = parseInt(money.textContent) + parseInt(mise.textContent) * 2.5;
            reset();
        }, 1700);

    } else if (split === false || split === true && numSplit === 1) {
        money.textContent = parseInt(money.textContent) + parseInt(mise.textContent) * 2;
        reset();
    } else if (split === true && numSplit === 2) {
        money.textContent = parseInt(money.textContent) + parseInt(miseSplit.textContent) * 2;
        reset();
    } else if (split === true && numSplit === 0) {
        money.textContent = parseInt(money.textContent) + parseInt(mise.textContent) * 2;
        money.textContent = parseInt(money.textContent) + parseInt(miseSplit.textContent) * 2;
        reset();
    }

}

function BgColor(i) {
    let tabResultat = ["bg_gagner", "bg_perdu", "bg_egal"];
    let cardPlayer = document.querySelectorAll("#contain-card-player .card");
    let cardPlayerSplit = document.querySelectorAll("#contain-card-split .card");
    if (split === false || split === true && numSplit === 1) {
        sommePlayer.classList.add(tabResultat[i]);
        cardPlayer.forEach(card => {
            card.classList.add(tabResultat[i]);
        })
    } else if (split === true && numSplit === 2) {
        sommePlayerSplit.classList.add(tabResultat[i]);
        cardPlayerSplit.forEach(card => {
            card.classList.add(tabResultat[i]);
        })
    } else if (split === true && numSplit === 0) {
        sommePlayer.classList.add(tabResultat[i]);
        cardPlayer.forEach(card => {
            card.classList.add(tabResultat[i]);
        })
        sommePlayerSplit.classList.add(tabResultat[i]);
        cardPlayerSplit.forEach(card => {
            card.classList.add(tabResultat[i]);
        })
    }
}

function blackJackPlayer() {
    let cardPlayer = document.querySelectorAll("#contain-card-player .card");
    sommePlayer.classList.add("bg_BJ");
    if (window.screen.width > 1180) {
        sommePlayer.textContent = 21 + " BLACKJACK";
    } else {
        sommePlayer.textContent = 21 + " BJ";
    }
    cardPlayer.forEach(card => {
        card.classList.add("bg_BJ");
    })
}
function blackJackBank() {
    let cardFlipFront = document.querySelector(".card-flip .front");
    let cardBank = document.querySelectorAll("#contain-card-bank .card");
    if (window.screen.width > 1180) {
        sommeBank.textContent = 21 + " BLACKJACK";
    } else {
        sommeBank.textContent = 21 + " BJ";
    }
    cardFlipFront.classList.add("bg_BJ");
    sommeBank.classList.add("bg_BJ");
    cardBank.forEach(card => {
        card.classList.add("bg_BJ");
    })
}

/****************   RESET   *******************************/

function reset() {
    // faire le reset pour la partie suivante
    BJ = false;
    checkAS = false;
    mise.textContent = "";
    mise.classList.add("none");
    containCardPlayer.innerHTML = "";
    containCardBank.innerHTML = "";
    sommePlayer.textContent = "";
    sommeBank.textContent = "";
    sommePlayer.classList.remove("bg_gagner");
    sommePlayer.classList.remove("bg_perdu");
    sommePlayer.classList.remove("bg_egal");
    sommePlayer.classList.remove("bg_BJ");
    sommeBank.classList.remove("bg_BJ");
    containMise.classList.remove("none");
    containAction.classList.add("none");
    btnChoixTables.classList.remove("none");
    if (window.screen.width < 768) {
        containChoix.style.bottom = -30 + "%";
    }
    for (let i = 0; i < 4; i++) {
        if (i < 3) {
            actions[i].classList.remove("none");
        } else {
            actions[i].classList.add("none");
        }
    }
    if (split === true) {
        split = false;
        checkASSplit2 = false;
        numSplit = 0;
        containCardSplit.classList.remove("border-split");
        containCardSplit.innerHTML = "";
        if (window.screen.width < 768) {
            document.querySelector("#split_1").classList.remove("split_1");
            document.querySelector("#split_2").classList.remove("split_2");
        }
        containPlayer.classList.remove("justify-around");
        containPlayer.classList.remove("large_90");
        sommePlayerSplit.classList.remove("bg_gagner");
        sommePlayerSplit.classList.remove("bg_perdu");
        sommePlayerSplit.classList.remove("bg_egal");
        sommePlayerSplit.textContent = "";
        miseSplit.textContent = "";
        miseSplit.classList.add("none");
        if(mise.classList.contains("left_28")) {
            mise.classList.remove("left_28");
        } else if (mise.classList.contains("left_26")) {
            mise.classList.remove("left_26");
        }
    }
    btnMises.forEach(btnMise => {
        if (parseInt(money.textContent) < parseInt(btnMise.textContent)) {
            btnMise.classList.add("btn_stop");
        } else {
            btnMise.classList.remove("btn_stop");
        }
    })
    if (parseInt(money.textContent) < 50) {
        document.querySelector(".mask").style.display = "block";
        document.querySelector(".popup_rejouer").style.display = "block";
    }
}