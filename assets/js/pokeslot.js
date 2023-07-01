// const containSlot = document.querySelector(".contain-slot");
const columns = document.querySelectorAll(".colonne");
const lines = document.querySelectorAll(".line");
const url = "https://painnagato42.github.io/Portfolio/assets/img/img_pokeslot";
const tabSymbole = [url + "/pok_10.png", url + "/pok_j.png", url + "/pok_q.png", url + "/pok_k.png", url + "/pok_a.png", url + "/pok_joelle.png", url + "/pok_pikachu.png", url + "/pok_rocket.png", url + "/pok_sacha.png"];
const spin = document.querySelector("#spin");
let spinActive = false;
let stopActive = false;
const btnMoins = document.querySelector("#moins");
const btnPlus = document.querySelector("#plus");
const balance = document.querySelector("#total_balance");
const priceBet = document.querySelector("#price_bet");
const btnInfo = document.querySelector(".btn_info");
const popupInfo = document.querySelector(".popup_info");
const popupCross = document.querySelector(".cross");
const popupRejouer = document.querySelector(".popup_rejouer");
const mask = document.querySelector(".mask");
let currentBet = 2;
const tabBet = ["1", "5", "10", "25", "50", "75", "100", "200", "500", "750", "1000", "1500"]
const tabMulti = {
    "x2": [5, 10],
    "x3": [5, 5, 30, 40, 100],
    "x4": [25, 40, 100, 400, 1000],
    "x5": [100, 150, 750, 2000, 5000]
}
let win = document.querySelector(".win p:nth-child(2)");
let tabWin = [];

// charger les colonnes lors du chargement de la page
window.addEventListener("load", () => {
    createColumnOnLoad();
    if (window.screen.width <= 1180 && window.screen.width >= 769) {
        document.querySelector(".balance").style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 50 + "px";
        document.querySelector(".win").style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 50 + "px";
        document.querySelector(".bet").style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 28 + "px";
        btnMoins.style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 125 + "px";
        btnPlus.style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 125 + "px";
        spin.style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 115 + "px";
        document.querySelector(".btn_info").style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 58 + "px";
    } else if (window.screen.width <= 768) {
        if ((window.screen.width >= 350 && window.screen.width <= 375) && (window.screen.height >= 650 && window.screen.height <= 700)) {
            btnMoins.style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 70 + "px";
            btnPlus.style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 70 + "px";
            spin.style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 80 + "px";
        } else {
            btnMoins.style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 100 + "px";
            btnPlus.style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 100 + "px";
            spin.style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 120 + "px";
        }
        document.querySelector(".balance").style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 30 + "px";
        document.querySelector(".win").style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 30 + "px";
        document.querySelector(".bet").style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 18 + "px";
        document.querySelector(".btn_info").style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 42 + "px";
    } else {
        document.querySelector(".balance").style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 75 + "px";
        document.querySelector(".win").style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 75 + "px";
        document.querySelector(".bet").style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 40 + "px";
        btnMoins.style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 165 + "px";
        btnPlus.style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 165 + "px";
        spin.style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 175 + "px";
        document.querySelector(".btn_info").style.top = document.querySelector(".contain-slot").getBoundingClientRect().height - 58 + "px";
    }

})

// faire l'evenement du spin
spin.addEventListener("click", () => {
    if (parseInt(balance.textContent) >= parseInt(priceBet.textContent)) {
        document.querySelector(".win").classList.add("none")
        lines.forEach(line => {
            if (!line.classList.contains("none")) {
                line.classList.add("none");
            }
        });
        if (spinActive === false) {
            spinActive = true;
            balance.textContent = parseFloat(balance.textContent) - parseFloat(priceBet.textContent);
            spinColumn();
            checkWinLine();
        }
    }
    if (parseInt(balance.textContent) === 0) {
        mask.style.display = "block";
        popupRejouer.style.display = "block";
    }
})

// faire les boutons des mises
btnMoins.addEventListener("click", () => {
    if (priceBet.textContent > 1) {
        priceBet.textContent = tabBet[currentBet - 1];
        currentBet--;
    }
})

btnPlus.addEventListener("click", () => {
    if (priceBet.textContent < 1500) {
        priceBet.textContent = tabBet[currentBet + 1];
        currentBet++;
    }
})

// bouton info
btnInfo.addEventListener("click", () => {
    popupInfo.style.display = "block";
    mask.style.display = "block";
})
popupCross.addEventListener("click", () => {
    popupInfo.style.display = "none";
    mask.style.display = "none";
})
/**********************************************/
/* FONCTION */

function createColumnOnLoad() {
    columns.forEach(column => {
        for (let i = 1; i <= 3; i++) {
            createSymbole(column);
        }
    });

}

function createSymbole(col) {
    let randNumber = Math.floor(Math.random() * 100) + 1;
    let div = document.createElement("div");
    let valueSymbole = tabSymbole[symboleProbability(randNumber)];
    div.classList.add("width_100");
    div.classList.add("margin_bottom_top-2");
    div.innerHTML = "<img class='width_100' src=" + valueSymbole + ">";
    for (let i = 0; i <= 8; i++) {
        switch (tabSymbole.indexOf(valueSymbole)) {
            case i:
                div.setAttribute("data-symb", i);
                break;

        }
    }
    col.append(div);
}

function symboleProbability(randNumber) {

    if (randNumber >= 1 && randNumber <= 40) {
        return Math.floor(Math.random() * 3);
    } else if (randNumber >= 41 && randNumber <= 70) {
        return Math.floor(Math.random() * 2) + 3;
    } else if (randNumber >= 71 && randNumber <= 85) {
        return Math.floor(Math.random() * 2) + 5;
    } else if (randNumber >= 86 && randNumber <= 94) {
        return 7;
    } else if (randNumber >= 95 && randNumber <= 100) {
        return 8;
    }

}

function spinColumn() {
    win.textContent = "";
    for (let i = 0; i < 5; i++) {
        window["int" + (i + 1)] = setInterval(addAndDelSymbole, 60, i);
        let time;
        switch (i + 1) {
            case 1:
                time = 1300;
                break;
            case 2:
                time = 1600;
                break;
            case 3:
                time = 1900;
                break;
            case 4:
                time = 2200;
                break;
            case 5:
                time = 2500;
                break;
        }
        setTimeout(animSpin, time, i);

    }

}

function addAndDelSymbole(index) {
    if (columns[index].children.length <= 5) {
        createSymbole(columns[index]);
        columns[index].removeChild(columns[index].children[0]);
    }
}

function animSpin(index) {
    clearInterval(window["int" + (index + 1)]);
    columns[index].classList.add("anim_spin");
    setTimeout(() => {
        columns[index].classList.remove("anim_spin");
    }, 100)
}


function winLine1() {
    for (let i = 0; i < 5; i++) {
        window["check" + i] = columns[i].children[1].getAttribute("data-symb");
    }
    for (let i = 0; i <= 8; i++) {
        switch (true) {
            case (check0 == i && check1 == i && check2 == i && check3 != i && check4 != i):
                forWin1(3)
                switchWin("x3", 1);
                lines[0].classList.remove("none");
                break;
            case (check0 == i && check1 == i && check2 == i && check3 == i && check4 != i):
                forWin1(4)
                switchWin("x4", 1);
                lines[0].classList.remove("none");
                break;
            case (check0 == i && check1 == i && check2 == i && check3 == i && check4 == i):
                forWin1(5)
                switchWin("x5", 1);
                lines[0].classList.remove("none");
                break;

        }
        if (i > 4) {
            switch (true) {
                case (check0 == i && check1 == i && check2 != i && check3 != i && check4 != i):
                    forWin1(2)
                    switchWin("x2", 1);
                    lines[0].classList.remove("none");
                    break;
            }
        }
    }
}
function winLine2() {
    for (let i = 0; i < 5; i++) {
        window["check" + i] = columns[i].children[2].getAttribute("data-symb");
    }
    for (let i = 0; i <= 8; i++) {
        switch (true) {
            case (check0 == i && check1 == i && check2 == i && check3 != i && check4 != i):
                forWin2(3)
                switchWin("x3", 2);
                lines[1].classList.remove("none");
                break;
            case (check0 == i && check1 == i && check2 == i && check3 == i && check4 != i):
                forWin2(4)
                switchWin("x4", 2);
                lines[1].classList.remove("none");
                break;
            case (check0 == i && check1 == i && check2 == i && check3 == i && check4 == i):
                forWin2(5)
                switchWin("x5", 2);
                lines[1].classList.remove("none");
                break;

        }
        if (i > 4) {
            switch (true) {
                case (check0 == i && check1 == i && check2 != i && check3 != i && check4 != i):
                    forWin2(2)
                    switchWin("x2", 2);
                    lines[1].classList.remove("none");
                    break;
            }
        }
    }
}
function winLine3() {
    for (let i = 0; i < 5; i++) {
        window["check" + i] = columns[i].children[0].getAttribute("data-symb");
    }
    for (let i = 0; i <= 8; i++) {
        switch (true) {
            case (check0 == i && check1 == i && check2 == i && check3 != i && check4 != i):
                forWin3(3)
                switchWin("x3", 3);
                lines[2].classList.remove("none");
                break;
            case (check0 == i && check1 == i && check2 == i && check3 == i && check4 != i):
                forWin3(4)
                switchWin("x4", 3);
                lines[2].classList.remove("none");
                break;
            case (check0 == i && check1 == i && check2 == i && check3 == i && check4 == i):
                forWin3(5)
                switchWin("x5", 3);
                lines[2].classList.remove("none");
                break;

        }
        if (i > 4) {
            switch (true) {
                case (check0 == i && check1 == i && check2 != i && check3 != i && check4 != i):
                    forWin3(2)
                    lines[2].classList.remove("none");
                    switchWin("x2", 3);
                    break;
            }
        }
    }
}
function winLine4() {
    let check0 = columns[0].children[2].getAttribute("data-symb");
    let check1 = columns[1].children[1].getAttribute("data-symb");
    let check2 = columns[2].children[0].getAttribute("data-symb");
    let check3 = columns[3].children[1].getAttribute("data-symb");
    let check4 = columns[4].children[2].getAttribute("data-symb");
    for (let i = 0; i <= 8; i++) {
        switch (true) {
            case (check0 == i && check1 == i && check2 == i && check3 != i && check4 != i):
                forWin4(3)
                switchWin("x3", 4);
                lines[3].classList.remove("none");
                break;
            case (check0 == i && check1 == i && check2 == i && check3 == i && check4 != i):
                forWin4(4)
                switchWin("x4", 4);
                lines[3].classList.remove("none");
                break;
            case (check0 == i && check1 == i && check2 == i && check3 == i && check4 == i):
                forWin4(5)
                switchWin("x5", 4);
                lines[3].classList.remove("none");
                break;

        }
        if (i > 4) {
            switch (true) {
                case (check0 == i && check1 == i && check2 != i && check3 != i && check4 != i):
                    forWin4(2)
                    switchWin("x2", 4);
                    lines[3].classList.remove("none");
                    break;
            }
        }
    }
}
function winLine5() {
    let check0 = columns[0].children[0].getAttribute("data-symb");
    let check1 = columns[1].children[1].getAttribute("data-symb");
    let check2 = columns[2].children[2].getAttribute("data-symb");
    let check3 = columns[3].children[1].getAttribute("data-symb");
    let check4 = columns[4].children[0].getAttribute("data-symb");
    for (let i = 0; i <= 8; i++) {
        switch (true) {
            case (check0 == i && check1 == i && check2 == i && check3 != i && check4 != i):
                forWin5(3)
                switchWin("x3", 5);
                lines[4].classList.remove("none");
                break;
            case (check0 == i && check1 == i && check2 == i && check3 == i && check4 != i):
                forWin5(4)
                switchWin("x4", 5);
                lines[4].classList.remove("none");
                break;
            case (check0 == i && check1 == i && check2 == i && check3 == i && check4 == i):
                forWin5(5)
                switchWin("x5", 5);
                lines[4].classList.remove("none");
                break;

        }
        if (i > 4) {
            switch (true) {
                case (check0 == i && check1 == i && check2 != i && check3 != i && check4 != i):
                    forWin5(2)
                    switchWin("x2", 5);
                    lines[4].classList.remove("none");
                    break;
            }
        }
    }
}
function winLine6() {
    let check0 = columns[0].children[1].getAttribute("data-symb");
    let check1 = columns[1].children[2].getAttribute("data-symb");
    let check2 = columns[2].children[2].getAttribute("data-symb");
    let check3 = columns[3].children[2].getAttribute("data-symb");
    let check4 = columns[4].children[1].getAttribute("data-symb");
    for (let i = 0; i <= 8; i++) {
        switch (true) {
            case (check0 == i && check1 == i && check2 == i && check3 != i && check4 != i):
                forWin6(3)
                switchWin("x3", 6);
                lines[5].classList.remove("none");
                break;
            case (check0 == i && check1 == i && check2 == i && check3 == i && check4 != i):
                forWin6(4)
                switchWin("x4", 6);
                lines[5].classList.remove("none");
                break;
            case (check0 == i && check1 == i && check2 == i && check3 == i && check4 == i):
                forWin6(5)
                switchWin("x5", 6);
                lines[5].classList.remove("none");
                break;

        }
        if (i > 4) {
            switch (true) {
                case (check0 == i && check1 == i && check2 != i && check3 != i && check4 != i):
                    forWin6(2)
                    switchWin("x2", 6);
                    lines[5].classList.remove("none");
                    break;
            }
        }
    }
}
function winLine7() {
    let check0 = columns[0].children[1].getAttribute("data-symb");
    let check1 = columns[1].children[0].getAttribute("data-symb");
    let check2 = columns[2].children[0].getAttribute("data-symb");
    let check3 = columns[3].children[0].getAttribute("data-symb");
    let check4 = columns[4].children[1].getAttribute("data-symb");
    for (let i = 0; i <= 8; i++) {
        switch (true) {
            case (check0 == i && check1 == i && check2 == i && check3 != i && check4 != i):
                forWin7(3)
                switchWin("x3", 7);
                lines[6].classList.remove("none");
                break;
            case (check0 == i && check1 == i && check2 == i && check3 == i && check4 != i):
                forWin7(4)
                switchWin("x4", 7);
                lines[6].classList.remove("none");
                break;
            case (check0 == i && check1 == i && check2 == i && check3 == i && check4 == i):
                forWin7(5)
                switchWin("x5", 7);
                lines[6].classList.remove("none");
                break;

        }
        if (i > 4) {
            switch (true) {
                case (check0 == i && check1 == i && check2 != i && check3 != i && check4 != i):
                    forWin7(2)
                    switchWin("x2", 7);
                    lines[6].classList.remove("none");
                    break;
            }
        }
    }
}
function winLine8() {
    let check0 = columns[0].children[2].getAttribute("data-symb");
    let check1 = columns[1].children[2].getAttribute("data-symb");
    let check2 = columns[2].children[1].getAttribute("data-symb");
    let check3 = columns[3].children[0].getAttribute("data-symb");
    let check4 = columns[4].children[0].getAttribute("data-symb");
    for (let i = 0; i <= 8; i++) {
        switch (true) {
            case (check0 == i && check1 == i && check2 == i && check3 != i && check4 != i):
                forWin8(3)
                switchWin("x3", 8);
                lines[7].classList.remove("none");
                break;
            case (check0 == i && check1 == i && check2 == i && check3 == i && check4 != i):
                forWin8(4)
                switchWin("x4", 8);
                lines[7].classList.remove("none");
                break;
            case (check0 == i && check1 == i && check2 == i && check3 == i && check4 == i):
                forWin8(5)
                switchWin("x5", 8);
                lines[7].classList.remove("none");
                break;

        }
        if (i > 4) {
            switch (true) {
                case (check0 == i && check1 == i && check2 != i && check3 != i && check4 != i):
                    forWin8(2)
                    switchWin("x2", 8);
                    lines[7].classList.remove("none");
                    break;
            }
        }
    }
}
function winLine9() {
    let check0 = columns[0].children[0].getAttribute("data-symb");
    let check1 = columns[1].children[0].getAttribute("data-symb");
    let check2 = columns[2].children[1].getAttribute("data-symb");
    let check3 = columns[3].children[2].getAttribute("data-symb");
    let check4 = columns[4].children[2].getAttribute("data-symb");
    for (let i = 0; i <= 8; i++) {
        switch (true) {
            case (check0 == i && check1 == i && check2 == i && check3 != i && check4 != i):
                forWin9(3)
                switchWin("x3", 9);
                lines[8].classList.remove("none");
                break;
            case (check0 == i && check1 == i && check2 == i && check3 == i && check4 != i):
                forWin9(4)
                switchWin("x4", 9);
                lines[8].classList.remove("none");
                break;
            case (check0 == i && check1 == i && check2 == i && check3 == i && check4 == i):
                forWin9(5)
                switchWin("x5", 9);
                lines[8].classList.remove("none");
                break;

        }
        if (i > 4) {
            switch (true) {
                case (check0 == i && check1 == i && check2 != i && check3 != i && check4 != i):
                    forWin9(2)
                    switchWin("x2", 9);
                    lines[8].classList.remove("none");
                    break;
            }
        }
    }
}
function winLine10() {
    let check0 = columns[0].children[1].getAttribute("data-symb");
    let check1 = columns[1].children[0].getAttribute("data-symb");
    let check2 = columns[2].children[1].getAttribute("data-symb");
    let check3 = columns[3].children[2].getAttribute("data-symb");
    let check4 = columns[4].children[1].getAttribute("data-symb");
    for (let i = 0; i <= 8; i++) {
        switch (true) {
            case (check0 == i && check1 == i && check2 == i && check3 != i && check4 != i):
                forWin10(3)
                switchWin("x3", 10);
                lines[9].classList.remove("none");
                break;
            case (check0 == i && check1 == i && check2 == i && check3 == i && check4 != i):
                forWin10(4)
                switchWin("x4", 10);
                lines[9].classList.remove("none");
                break;
            case (check0 == i && check1 == i && check2 == i && check3 == i && check4 == i):
                forWin10(5)
                switchWin("x5", 10);
                lines[9].classList.remove("none");
                break;

        }
        if (i > 4) {
            switch (true) {
                case (check0 == i && check1 == i && check2 != i && check3 != i && check4 != i):
                    forWin10(2)
                    switchWin("x2", 10);
                    lines[9].classList.remove("none");
                    break;
            }
        }
    }
}

function switchWin(multi, line) {
    let check;
    switch (true) {
        case (line === 1 || line === 6 || line === 7 || line === 10):
            check = columns[0].children[1].getAttribute("data-symb")
            break;
        case (line === 2 || line === 4 || line === 8):
            check = columns[0].children[2].getAttribute("data-symb")
            break;
        case (line === 3 || line === 5 || line === 9):
            check = columns[0].children[0].getAttribute("data-symb")
            break;
    }
    if (multi != "x2") {
        switch (true) {
            case (check === "0" || check === "1" || check === "2"):
                tabWin.push(parseInt(priceBet.textContent) * tabMulti[multi][0]);
                break;

            case (check === "3" || check === "4"):
                tabWin.push(parseInt(priceBet.textContent) * tabMulti[multi][1]);
                break;

            case (check === "5" || check === "6"):
                tabWin.push(parseInt(priceBet.textContent) * tabMulti[multi][2]);
                break;

            case check === "7":
                tabWin.push(parseInt(priceBet.textContent) * tabMulti[multi][3]);
                break;

            case check === "8":
                tabWin.push(parseInt(priceBet.textContent) * tabMulti[multi][4]);
                break;
        }
    } else {
        switch (true) {
            case (check === "5" || check === "6" || check === "7"):
                tabWin.push(parseInt(priceBet.textContent) * tabMulti[multi][0]);
                break;
            case check === "8":
                tabWin.push(parseInt(priceBet.textContent) * tabMulti[multi][1]);
                break;
        }
    }

}

function forWin1(number) {
    for (let i = 0; i < number; i++) {
        columns[i].children[1].classList.add("anim_win");
    }
}
function forWin2(number) {
    for (let i = 0; i < number; i++) {
        columns[i].children[2].classList.add("anim_win");
    }
}
function forWin3(number) {
    for (let i = 0; i < number; i++) {
        columns[i].children[0].classList.add("anim_win");
    }
}
function forWin4(number) {
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            switch (true) {
                case (j === 0 && i === 0 || j === 4 && i === 4):
                    columns[i].children[2].classList.add("anim_win");
                    break;
                case (j === 1 && i === 1 || j === 3 && i === 3):
                    columns[i].children[1].classList.add("anim_win");
                    break;
                case (j === 2 && i === 2):
                    columns[i].children[0].classList.add("anim_win");
                    break;
            }

        }

    }
}
function forWin5(number) {
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            switch (true) {
                case (j === 0 && i === 0 || j === 4 && i === 4):
                    columns[i].children[0].classList.add("anim_win");
                    break;
                case (j === 1 && i === 1 || j === 3 && i === 3):
                    columns[i].children[1].classList.add("anim_win");
                    break;
                case (j === 2 && i === 2):
                    columns[i].children[2].classList.add("anim_win");
                    break;
            }

        }

    }
}
function forWin6(number) {
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            switch (true) {
                case (j === 0 && i === 0 || j === 4 && i === 4):
                    columns[i].children[1].classList.add("anim_win");
                    break;
                case (j === 1 && i === 1 || j === 2 && i === 2 || j === 3 && i === 3):
                    columns[i].children[2].classList.add("anim_win");
                    break;

            }

        }
    }
}
function forWin7(number) {
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            switch (true) {
                case (j === 0 && i === 0 || j === 4 && i === 4):
                    columns[i].children[1].classList.add("anim_win");
                    break;
                case (j === 1 && i === 1 || j === 2 && i === 2 || j === 3 && i === 3):
                    columns[i].children[0].classList.add("anim_win");
                    break;

            }

        }
    }
}
function forWin8(number) {
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            switch (true) {
                case (j === 0 && i === 0 || j === 1 && i === 1):
                    columns[i].children[2].classList.add("anim_win");
                    break;
                case (j === 2 && i === 2):
                    columns[i].children[1].classList.add("anim_win");
                    break;
                case (j === 3 && i === 3 || j === 4 && i === 4):
                    columns[i].children[0].classList.add("anim_win");
                    break;
            }

        }
    }
}
function forWin9(number) {
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            switch (true) {
                case (j === 0 && i === 0 || j === 1 && i === 1):
                    columns[i].children[0].classList.add("anim_win");
                    break;
                case (j === 2 && i === 2):
                    columns[i].children[1].classList.add("anim_win");
                    break;
                case (j === 3 && i === 3 || j === 4 && i === 4):
                    columns[i].children[2].classList.add("anim_win");
                    break;
            }

        }
    }
}
function forWin10(number) {
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            switch (true) {
                case (j === 0 && i === 0 || j === 2 && i === 2 || j === 4 && i === 4):
                    columns[i].children[1].classList.add("anim_win");
                    break;
                case (j === 1 && i === 1):
                    columns[i].children[0].classList.add("anim_win");
                    break;
                case (j === 3 && i === 3):
                    columns[i].children[2].classList.add("anim_win");
                    break;
            }

        }
    }
}

function checkWinLine() {
    tabWin = [];
    setTimeout(() => {
        setTimeout(() => {
            winLine1();
            winLine2();
            winLine3();
            winLine4();
            winLine5();
            winLine6();
            winLine7();
            winLine8();
            winLine9();
            winLine10();
            let winTotal = 0;
            if (tabWin.length > 1) {
                for (let i = 0; i < tabWin.length; i++) {
                    winTotal += parseInt(tabWin[i])
                }
                win.textContent = winTotal + "€"
                balance.textContent = parseFloat(balance.textContent) + winTotal;
            } else if (tabWin.length === 1) {
                win.textContent = tabWin[0] + "€"
                balance.textContent = parseFloat(balance.textContent) + tabWin[0];
            }
            if (win.textContent != "") {
                document.querySelector(".win").classList.remove("none")
            }
        }, 150)
        spinActive = false;
        //spin.classList.remove("none")
    }, 2550);
}
