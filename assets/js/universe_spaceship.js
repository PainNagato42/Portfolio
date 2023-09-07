const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const loading = document.querySelector(".load");
const warning = document.querySelector(".warning");

/***************************************/
/* START  */
const divHome = document.querySelector(".home");
const btnStart = document.querySelector("#start");

/***************************************/
/* CHOIX DU MODE  */
const divChoiceMode = document.querySelector(".choice_mode");
const normalMode = document.querySelector("#normal");
const extremeMode = document.querySelector("#extreme");

/***************************************/
/* CHOIX VAISSEAU  */
const containChoicePlayer = document.querySelector(".contain_choice_player");
const choicesplayer = document.querySelectorAll(".choice_player");
const rows = document.querySelectorAll(".row");
const btnChoices = document.querySelectorAll(".btn_choice");

/***************************************/
/* STATS */
const divLevelEnd = document.querySelector(".level_end");
const levelNumber = document.querySelector("#level_number");
const alienDestroy = document.querySelector("#alien_destroy");
const allDamage = document.querySelector("#all_damage");
const numRestart = document.querySelector("#num_restart");
const allHit = document.querySelector("#all_hit");
const btnNextLevel = document.querySelector(".btn_next_level");

/***************************************/
/* VARIABLES STATS */

// Stats level
let totalAlienDestroy = 0;
let totalDamage = 0;
let totalRestart = 0;
let totalHit = 0;

// Stats all game
let totalAlienDestroyAll = 0;
let totalDamageAll = 0;
let totalRestartAll = 0;
let totalHitAll = 0;

/*************************************/
/* GAME */
const containGame = document.querySelector(".contain_game");
const containGameSpan = document.querySelector(".contain_game span");
const containHearts = document.querySelector(".contain_hearts");

/*************************************/
/* BTN RESTART */
const divPlayerDestroy = document.querySelector(".player_destroy");
const btnRestartLevel = document.querySelector("#btn_restart_level");
const btnRestartGame = document.querySelector("#btn_restart_game");

/***************************************/
/* VARIABLES GAME */
let extreme = false;

let idAlien = 0;
let level = 1;
let gameEnd = false;

let P;
let currentPower = 1;
let powerUpCheck = false;
let playerRestart;
let gameTime;
let invincibility = false;

let shootsPlayer = [];
let hit = false;
let shootsAlien = [];
let Aliens = [];
let blasts = [];
let timeBlast = 0;

let powerUp = [];

let timeBoss = 0;
let bossMove = false;
let targets = [];
let elecShoots = [];

const music = new Audio("https://PainNagato42.github.io/Portfolio/assets/song/song_universe_spaceship/8-bit-air-fight.mp3");
let musicPause = false;

/**********************************/
/*   BTN START GAME EVENEMENT   */
/**********************************/

btnStart.addEventListener("click", () => {
    divHome.classList.add("none");
    divChoiceMode.classList.remove("none");
})

/**********************************/
/*   BTN MODE EVENEMENT   */
/**********************************/
normalMode.addEventListener("click", () => {
    divChoiceMode.classList.add("none");
    containChoicePlayer.classList.remove("none");
    if(window.screen.width < 1180) {
        containChoicePlayer.querySelectorAll(".info_action")[0].classList.add("none");
        containChoicePlayer.querySelectorAll(".info_action")[1].classList.remove("none");
    }
})

extremeMode.addEventListener("click", () => {
    divChoiceMode.classList.add("none");
    containChoicePlayer.classList.remove("none");
    choicesplayer.forEach(choice => {
        choice.querySelector("p").style.textDecoration = "line-through";
    })
    if(window.screen.width < 1180) {
        containChoicePlayer.querySelectorAll(".info_action")[0].classList.add("none");
        containChoicePlayer.querySelectorAll(".info_action")[1].classList.remove("none");
    }
    extreme = true;
})

/**********************************/
/*  CHOIX DU VAISSEAU EVENEMENT   */
/**********************************/

let choiceCount = 1;
rows[0].addEventListener("click", () => {
    choiceCount--
    if (choiceCount < 1) {
        choiceCount = choicesplayer.length;
    }
    choicesplayer.forEach(choice => {
        if (choice.getAttribute("data-spaceship") == choiceCount) {
            choice.classList.remove("none");
        } else {
            choice.classList.add("none");
        }
    })
})
rows[1].addEventListener("click", () => {
    choiceCount++
    if (choiceCount > choicesplayer.length) {
        choiceCount = 1;
    }
    choicesplayer.forEach(choice => {
        if (choice.getAttribute("data-spaceship") == choiceCount) {
            choice.classList.remove("none");
        } else {
            choice.classList.add("none");
        }
    })
})

/**********************************/
/*      VAISSEAU VALIDER    */
/**********************************/

btnChoices.forEach(btnChoice => {
    btnChoice.addEventListener("click", () => {
        switch (btnChoice.getAttribute("data-choice")) {
            case "1":
                P = new Player(1, 4, 2, 30);
                playerRestart = 1;
                break;
            case "2":
                P = new Player(2, 2, 1, 15);
                playerRestart = 2;
                break;
            case "3":
                P = new Player(3, 3, 3, 40);
                playerRestart = 3;
                break;

        }
        if(extreme === true) {
            P.life = 1;
        }
        containChoicePlayer.classList.add("none");
        containGame.classList.remove("none");
        if(extreme === false) {
            for (let i = 0; i < P.life; i++) {
                let div = document.createElement("div");
                div.innerHTML = "<img src='https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/heart.png' alt=''>";
                containHearts.append(div);
            }
        }
        containGameSpan.textContent = level;
        setInterval(() => {
            if(musicPause === false) {
                music.play();
            } else {
                music.pause();
            }
        }, 150)
        update();
    })
})

/**********************************/
/*      GAME    */
/**********************************/

function update() {
    gameTime = setTimeout(update, 20);
    switch (level) {
        case 1:
            level1();
            break;
        case 2:
            level2();
            break;
        case 3:
            level3();
            break;
        case 4:
            level4();
            break;
        case 5:
            levelBoss();
            break;
    }
    clearScreen();
    if (P !== "") {
        P.update();
    }
    if (P.life < 1 || P === "") {
        blasts.push(new Blast(P.x, P.y, P.width, P.height));
        P = "";
        setTimeout(() => {
            clearTimeout(gameTime);
            musicPause = true;
            divPlayerDestroy.classList.remove("none");
            if(extreme === true) {
                btnRestartLevel.classList.add("none");
                btnRestartGame.style.marginTop = 80 + "px"; 
            }
        }, 1000);

    }
    collision();
    getPowerUp();
    hitShootPlayer();
    hitShootAlien();
    disappearanceAlien()
    disappearanceShootPlayer();
    disappearanceShootAlien();
    Aliens.forEach((A, index) => {
        if (A.life <= 0) {
            totalAlienDestroy++;
            totalAlienDestroyAll++;
            Aliens.splice(index, 1);
            blasts.push(new Blast(A.x, A.y, A.width, A.height));
        } else {
            A.update();
        }
    })
    blasts.forEach((blast, index) => {
        timeBlast++
        if (timeBlast === 3) {
            blast.evolutionBlast++;
            timeBlast = 0;
        }
        if (blast.evolutionBlast > 4) {
            blasts.splice(index, 1);
        } else {
            blast.update();
        }
    })
    powerUp.forEach(power => {
        if (power.x - power.width >= 360) {
            powerUp.splice(0, 1)
        } else {
            power.update();
        }
    })
    targets.forEach(target => {
        target.update();
    })
    elecShoots.forEach(elec => {
        elec.update();
    })
}

/**********************************/
/*      NEXT LEVEL   */
/**********************************/

btnNextLevel.addEventListener("click", () => {
    if(gameEnd === false) {
        totalAlienDestroy = 0;
        totalDamage = 0;
        totalRestart = 0;
        totalHit = 0;
        if(level !== 5) {
            containGameSpan.textContent = level;
        } else {
            containGameSpan.textContent = "Boss Rush";
        }
        idAlien = 0;
        divLevelEnd.classList.add("none");
        powerUpCheck = false;
        musicPause = false;
        update();
    } else {
        divLevelEnd.querySelector("h4").textContent = "Statistiques total";
        divLevelEnd.querySelector("h4").classList.add("color_stats");
        divLevelEnd.querySelector("div.stats p:first-child").classList.add("none");
        divLevelEnd.querySelector("#alien_destroy").textContent = totalAlienDestroyAll;
        divLevelEnd.querySelector("#all_damage").textContent = totalDamageAll;
        divLevelEnd.querySelector("#num_restart").textContent = totalRestartAll;
        divLevelEnd.querySelector("#all_hit").textContent = totalHitAll;
        divLevelEnd.querySelector(".btn_next_level").classList.add("none");
        divLevelEnd.querySelector(".btn_end").classList.remove("none");
    }
})

/**********************************/
/*      RESTART EVENEMENT   */
/**********************************/

btnRestartLevel.addEventListener("click", () => {
    idAlien = 0;
    totalAlienDestroyAll = totalAlienDestroyAll - totalAlienDestroy;
    totalAlienDestroy = 0;
    totalDamageAll = (totalDamageAll - totalDamage);
    totalDamage = 0;
    switch (playerRestart) {
        case 1:
            P = new Player(1, 4, 2, 30);
            break;
        case 2:
            P = new Player(2, 2, 1, 15);
            break;
        case 3:
            P = new Player(3, 3, 3, 40);
            break;
    }
    if (powerUpCheck === true) {
        P.power = currentPower - 1;
        powerUpCheck = false;
    } else {
        P.power = currentPower;
    }
    for (let i = 0; i < P.life; i++) {
        let div = document.createElement("div");
        div.innerHTML = "<img src='https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/heart.png' alt=''>";
        containHearts.append(div);
    }
    Aliens = [];
    shootsAlien = [];
    shootsPlayer = [];
    targets = [];
    elecShoots = [];
    loading.classList.remove("none");
    setTimeout(()=> {
        divPlayerDestroy.classList.add("none");
        loading.classList.add("none");
        musicPause = false;
        totalRestart++;
        totalRestartAll++;
        update();
    }, 1000);
})


/**********************************/
/*      FONCTION    */
/**********************************/

function clearScreen() {
    // - 4 = les bordures du canvas
    ctx.clearRect(0, 0, canvas.getBoundingClientRect().width - 4, canvas.getBoundingClientRect().height - 4);
}

function collision() {
    Aliens.forEach((A, index) => {
        if (A.y + A.height > P.y && A.y < P.y + P.height && A.x + A.width > P.x && A.x < P.x + P.width) {
            containHearts.innerHTML = "";
            if (A.boss === false) {
                blasts.push(new Blast(A.x, A.y, A.width, A.height));
                Aliens.splice(index, 1);
            }
            blasts.push(new Blast(P.x, P.y, P.width, P.height));
            P = "";
        }
    })
}

function getPowerUp() {
    powerUp.forEach((power, index) => {
        if (power.y + power.height > P.y && power.y < P.y + P.height && power.x + power.width > P.x && power.x < P.x + P.width) {
            P.power++;
            currentPower++;
            powerUpCheck = true;
            powerUp.splice(index, 1);
        }
    })
}

function hitShootPlayer() {
    shootsPlayer.forEach((shootP, index) => {
        Aliens.forEach(A => {
            if (A.y + A.height > shootP.y && A.y < shootP.y + shootP.height && A.x + A.width > shootP.x && A.x < shootP.x + shootP.width) {
                totalDamage = totalDamage + P.damage;
                totalDamageAll = totalDamageAll + P.damage;
                A.life = A.life - P.damage;
                shootsPlayer.splice(index, 1);
            }
        })
    })
}

function hitShootAlien() {
    shootsAlien.forEach((shootA, index) => {
        if (shootA.y + shootA.height > P.y && shootA.y < P.y + P.height && shootA.x + shootA.width > P.x && shootA.x < P.x + P.width) {
            if (invincibility === false) {
                if(P.life > 1) {
                    invincibility = true;
                    setTimeout(() => {
                        invincibility = false;
                    }, 2000);
                }
                P.life--
                if(extreme === false) {
                    containHearts.removeChild(containHearts.lastChild);
                }
                totalHit++;
                totalHitAll++;
                shootsAlien.splice(index, 1);
            }
        }
    });
    targets.forEach(target => {
        if (target.targetShoot === true) {
            if (target.y + target.height > P.y && target.y < P.y + P.height && target.x + target.width > P.x && target.x < P.x + P.width) {
                if (invincibility === false) {
                    if(P.life > 1) {
                        invincibility = true;
                        setTimeout(() => {
                            invincibility = false;
                        }, 2000);
                    }
                    P.life--
                    containHearts.removeChild(containHearts.lastChild);
                    totalHit++;
                    totalHitAll++;
                    targets.splice(0, 1);
                }
            }
        }
    })
    elecShoots.forEach(elec => {
        if (elec.y + elec.height > P.y && elec.y < P.y + P.height && elec.x + elec.width > P.x && elec.x < P.x + P.width) {
            if (invincibility === false) {
                if(P.life > 1) {
                    invincibility = true;
                    setTimeout(() => {
                        invincibility = false;
                    }, 2000);
                }
                P.life--
                containHearts.removeChild(containHearts.lastChild);
                totalHit++;
                totalHitAll++;
            }
        }
    })
}

function disappearanceShootPlayer() {
    shootsPlayer.forEach((shootPlayer, index) => {
        if (shootPlayer.y + shootPlayer.height <= 0) {
            shootsPlayer.splice(index, 1);
        } else {
            shootPlayer.update();
        }
    })
}
function disappearanceShootAlien() {
    shootsAlien.forEach((shootAlien, index) => {
        if (shootAlien.y - shootAlien.height >= 600 || shootAlien.y + shootAlien.height < 0 || shootAlien.x + shootAlien.width >= 360 || shootAlien.x + shootAlien.width < 0) {
            shootsAlien.splice(index, 1);
        } else {
            shootAlien.update();
        }
    })
}

function disappearanceAlien() {
    Aliens.forEach((A, index) => {
        if (A.x > 360 && A.velocity === "moveXright") {
            Aliens.splice(index, 1);
        }
        if (A.x + A.width < 0 && A.velocity === "moveXleft") {
            Aliens.splice(index, 1);
        }
        if (A.y > 600 && (A.velocity === "moveYbottom" || A.velocity === "moveAllRight" || A.velocity === "moveAllLeft")) {
            Aliens.splice(index, 1);
        }
        if (A.y + A.height < 0 && (A.velocity === "moveYup" || A.velocity === "moveAllRightUp" || A.velocity === "moveAllLeftUp")) {
            Aliens.splice(index, 1);
        }
    })
}

function appearBoss(bossPush, id) {
    if (idAlien === id) {
        if (bossMove === true) {
            timeBoss++;
        }
        if (idAlien === id && Aliens.length === 0) {
            timeBoss = 0;
            P.fire = false;
            bossMove = true;
            warning.classList.remove("none");
            Aliens.push(bossPush);
            if (level === 5 && idAlien === 2) {
                targets = [];
                if (P.power < 3) {
                    powerUp.push(new PowerUp(-60, 400));
                }
            }
        }
        if (timeBoss >= 245) {
            P.fire = true;
            bossMove = false;
            Aliens[0].fire = true;
            warning.classList.add("none");
            timeBoss = 0;
            idAlien++;
            if (level === 5 && idAlien === 5) {
                elecShoots.push(new ElecShoot(0, 430, "right"));
                elecShoots.push(new ElecShoot(360 - 45, 250, "left"));
            }
        }
    }
}

function levelEnd(currentLevel, id = 9) {
    if (idAlien === id && Aliens.length === 0) {
        if (level === 5) {
            elecShoots = [];
        }
        timeBoss++
        if (timeBoss >= 100) {
            clearTimeout(gameTime);
            musicPause = true;
            level++;
            timeBoss = 0;
            shootsPlayer = [];
            divLevelEnd.classList.remove("none");
            levelNumber.textContent = currentLevel;
            alienDestroy.textContent = totalAlienDestroy;
            allDamage.textContent = totalDamage;
            numRestart.textContent = totalRestart;
            allHit.textContent = totalHit;
            if(level > 5) {
                gameEnd = true;
            }
            if(gameEnd === true) {
                btnNextLevel.textContent = "Voir statistiques total"
            }
        }
    }
}

/**********************************/
/*      LEVEL 1     */
/**********************************/
function level1() {
    if (idAlien === 0) {
        Aliens.push(new Alien(160, -60, "moveYbottom", 2, false, 50, 1, 2));
        idAlien++;
    }
    if (idAlien === 1 && Aliens.length === 0) {
        Aliens.push(new Alien(60, -60, "moveYbottom", 2, false, 50, 1, 2), new Alien(250, -60, "moveYbottom", 2, false, 50, 1, 2));
        idAlien++;
    }
    if (idAlien === 2 && Aliens.length === 0) {
        Aliens.push(new Alien(-50, 80, "moveXright", 2, true, 50, 1, 2), new Alien(-150, 80, "moveXright", 2, true, 50, 1, 2), new Alien(-250, 80, "moveXright", 2, true, 30, 1, 2));
        idAlien++;
    }
    if (idAlien === 3 && Aliens.length === 0) {
        Aliens.push(new Alien(-50, 80, "moveXright", 2, true, 50, 2, 4), new Alien(365, 200, "moveXleft", 2, true, 50, 2, 4));
        idAlien++;
    }
    if (idAlien === 4 && Aliens.length === 0) {
        Aliens.push(new Alien(60, -60, "moveYbottom", 2, true, 50, 2, 4), new Alien(250, -60, "moveYbottom", 2, true, 50, 2, 4));
        idAlien++;
    }
    if (idAlien === 5 && Aliens.length === 0) {
        Aliens.push(new Alien(365, 260, "moveXleft", 2, true, 15, 3, 3));
        powerUp.push(new PowerUp(-60, 200));
        idAlien++;
    }
    if (idAlien === 6 && Aliens.length === 0) {
        Aliens.push(new Alien(-50, 80, "moveXright", 2, true, 20, 1, 2), new Alien(-200, 80, "moveXright", 2, true, 20, 1, 2), new Alien(365, 200, "moveXleft", 2, true, 30, 2, 2), new Alien(505, 200, "moveXleft", 2, true, 30, 2, 2));
        idAlien++;
    }
    if (idAlien === 7 && Aliens.length === 0) {
        Aliens.push(new Alien(160, -90, "moveYmiddle", 4, true, 40, 4, 8));
        idAlien++;
    }
    appearBoss(new Alien(32, -450, "moveYmiddle", 2, false, 10, "boss1", 55), 8);
    levelEnd("1");
}

/**********************************/
/*      LEVEL 2     */
/**********************************/

function level2() {
    if (idAlien === 0 && Aliens.length === 0) {
        Aliens.push(new Alien(40, -60, "moveYbottom", 2, true, 30, 1, 2), new Alien(160, -60, "moveYbottom", 2, true, 30, 1, 2), new Alien(280, -60, "moveYbottom", 2, true, 30, 1, 2));
        idAlien++;
    }
    if (idAlien === 1 && Aliens.length === 0) {
        Aliens.push(new Alien(365, 200, "moveXleft", 2, true, 30, 2, 2), new Alien(505, 200, "moveXleft", 2, true, 30, 2, 2), new Alien(645, 200, "moveXleft", 2, true, 30, 2, 2));
        idAlien++;
    }
    if (idAlien === 2 && Aliens.length === 0) {
        Aliens.push(new Alien(-60, 80, "moveXright", 2, true, 45, 5, 5), new Alien(390, 180, "moveXleft", 2, true, 45, 5, 5));
        idAlien++;
    }
    if (idAlien === 3 && Aliens.length === 0) {
        Aliens.push(new Alien(140, -80, "moveYbottom", 2, true, 45, 5, 5), new Alien(-70, 100, "moveXright", 1, true, 30, 2, 2), new Alien(365, 200, "moveXleft", 1, true, 30, 2, 2));
        idAlien++;
    }
    if (idAlien === 4 && Aliens.length === 0) {
        Aliens.push(new Alien(-60, 100, "moveXright", 1, true, 40, 4, 5), new Alien(370, 250, "moveXleft", 1, true, 40, 4, 5));
        idAlien++;
    }
    if (idAlien === 5 && Aliens.length === 0) {
        Aliens.push(new Alien(40, 650, "moveYup", 4, false, 30, 6, 1), new Alien(280, 850, "moveYup", 4, false, 30, 6, 1), new Alien(160, 1050, "moveYup", 4, false, 30, 6, 1), new Alien(40, -60, "moveYbottom", 1, true, 30, 2, 2), new Alien(280, -60, "moveYbottom", 1, true, 30, 2, 2));
        idAlien++;
    }
    if (idAlien === 6 && Aliens.length === 0) {
        Aliens.push(new Alien(20, 650, "moveYup", 2, true, 5, 3, 100), new Alien(280, 650, "moveYup", 2, true, 5, 3, 100), new Alien(155, -60, "moveYmiddle", 2, true, 30, 7, 10));
        idAlien++;
    }
    if (idAlien === 7 && Aliens.length === 0) {
        Aliens.push(new Alien(-60, 100, "moveXright", 1, true, 2, 8, 5), new Alien(370, 200, "moveXleft", 1, true, 2, 8, 5));
        idAlien++;
    }
    appearBoss(new Alien(32, -450, "moveYmiddle", 2, false, 5, "boss2", 55), 8);
    levelEnd("2");
}

/**********************************/
/*      LEVEL 3     */
/**********************************/

function level3() {
    if (idAlien === 0 && Aliens.length === 0) {
        Aliens.push(new Alien(-80, -50, "moveAllRight", 0.5, true, 40, 9, 5), new Alien(380, -50, "moveAllLeft", 0.5, true, 40, 9, 5), new Alien(155, -300, "moveYbottom", 2, true, 40, 9, 5));
        idAlien++;
    }
    if (idAlien === 1 && Aliens.length === 0) {
        Aliens.push(new Alien(-60, 80, "moveXright", 2, true, 40, 7, 8), new Alien(400, 120, "moveXleft", 2, true, 40, 7, 8));
        idAlien++;
    }
    if (idAlien === 2 && Aliens.length === 0) {
        Aliens.push(new Alien(-80, -140, "moveAllRight", 1, true, 40, 2, 3), new Alien(-110, -200, "moveAllRight", 1, true, 40, 2, 3), new Alien(-130, -260, "moveAllRight", 1, true, 40, 2, 3), new Alien(380, -140, "moveAllLeft", 1, true, 40, 2, 3), new Alien(410, -200, "moveAllLeft", 1, true, 40, 2, 3), new Alien(440, -260, "moveAllLeft", 1, true, 40, 2, 3));
        idAlien++;
    }
    if (idAlien === 3 && Aliens.length === 0) {
        Aliens.push(new Alien(-60, 80, "moveXright", 1.5, true, 40, 7, 8), new Alien(500, 120, "moveXleft", 1.5, true, 40, 7, 8), new Alien(380, 120, "moveXleft", 1.5, true, 40, 9, 5), new Alien(-180, 80, "moveXright", 1.5, true, 40, 9, 5));
        idAlien++;
    }
    if (idAlien === 4 && Aliens.length === 0) {
        Aliens.push(new Alien(20, -60, "moveYbottom", 1.2, true, 40, 10, 4), new Alien(300, -60, "moveYbottom", 1.2, true, 40, 10, 4), new Alien(80, -200, "moveYbottom", 1.2, true, 40, 10, 4), new Alien(240, -200, "moveYbottom", 1.2, true, 40, 10, 4), new Alien(155, -340, "moveYbottom", 1.2, true, 40, 10, 4));
        idAlien++;
    }
    if (idAlien === 5 && Aliens.length === 0) {
        Aliens.push(new Alien(-80, 650, "moveAllRightUp", 0.5, true, 40, 9, 5), new Alien(380, 650, "moveAllLeftUp", 0.5, true, 40, 9, 5), new Alien(-80, 60, "moveXright", 0.5, true, 40, 9, 5), new Alien(380, 130, "moveXleft", 0.5, true, 40, 9, 5));
        powerUp.push(new PowerUp(-300, 200));
        idAlien++;
    }
    if (idAlien === 6 && Aliens.length === 0) {
        Aliens.push(new Alien(-80, -60, "moveAllRight", 1, true, 40, 3, 4), new Alien(380, -60, "moveAllLeft", 1, true, 40, 3, 4), new Alien(-80, 650, "moveAllRightUp", 1, true, 40, 3, 4), new Alien(380, 650, "moveAllLeftUp", 1, true, 40, 3, 4), new Alien(155, -60, "moveYbottom", 2, true, 40, 3, 4), new Alien(-60, 120, "moveXright", 2, true, 40, 3, 4), new Alien(420, 160, "moveXleft", 2, true, 40, 3, 4));
        idAlien++;
    }
    if (idAlien === 7 && Aliens.length === 0) {
        Aliens.push(new Alien(380, 40, "moveXleft", 0.9, true, 40, 11, 15));
        idAlien++;
    }
    appearBoss(new Alien(48, -450, "moveYmiddle", 2, false, 40, "boss3", 80), 8);
    levelEnd("3");
}



/**********************************/
/*      LEVEL 4     */
/**********************************/

function level4() {
    if (idAlien === 0 && Aliens.length === 0) {
        Aliens.push(new Alien(10, -60, "moveYbottom", 1, true, 30, 5, 8), new Alien(155, -60, "moveYbottom", 1, true, 2, 8, 6), new Alien(300, -60, "moveYbottom", 1, true, 30, 5, 8));
        idAlien++;
    }
    if (idAlien === 1 && Aliens.length === 0) {
        Aliens.push(new Alien(-60, 60, "moveXright", 1, true, 40, 4, 7), new Alien(155, -60, "moveYbottom", 1, true, 40, 7, 10), new Alien(400, 100, "moveXleft", 1, true, 40, 11, 10));
        idAlien++;
    }
    if (idAlien === 2 && Aliens.length === 0) {
        Aliens.push(new Alien(-50, 80, "moveXright", 1.5, true, 25, 1, 2), new Alien(-100, 80, "moveXright", 2, true, 30, 1, 2), new Alien(-150, 80, "moveXright", 1.5, true, 25, 1, 2), new Alien(-200, 80, "moveXright", 2, true, 30, 1, 2), new Alien(410, 120, "moveXleft", 1.5, true, 25, 1, 2), new Alien(460, 120, "moveXleft", 2, true, 30, 1, 2), new Alien(510, 120, "moveXleft", 1.5, true, 25, 1, 2), new Alien(560, 120, "moveXleft", 2, true, 30, 1, 2));
        idAlien++;
    }
    if (idAlien === 3 && Aliens.length === 0) {
        Aliens.push(new Alien(380, 40, "moveXleft", 1, true, 50, 12, 10), new Alien(380, 140, "moveXleft", 1.5, true, 30, 2, 4), new Alien(-60, 140, "moveXright", 1.5, true, 30, 2, 4));
        idAlien++;
    }
    if (idAlien === 4 && Aliens.length === 0) {
        Aliens.push(new Alien(20, 650, "moveYup", 1.5, true, 2, 8, 8), new Alien(280, 650, "moveYup", 1.5, true, 2, 8, 8), new Alien(-60, 40, "moveXright", 1.5, true, 2, 8, 8), new Alien(380, 60, "moveXleft", 1.5, true, 2, 8, 8));
        idAlien++;
    }
    if (idAlien === 5 && Aliens.length === 0) {
        Aliens.push(new Alien(-60, 40, "moveXright", 1, true, 50, 12, 10), new Alien(380, 40, "moveXleft", 1, true, 50, 12, 10));
        if (P.power < 3) {
            powerUp.push(new PowerUp(-60, 200));
        }
        idAlien++;
    }
    if (idAlien === 6 && Aliens.length === 0) {
        Aliens.push(new Alien(40, 650, "moveYup", 4, false, 30, 6, 1), new Alien(280, 850, "moveYup", 4, false, 30, 6, 1), new Alien(160, 1050, "moveYup", 4, false, 30, 6, 1), new Alien(40, 1250, "moveYup", 4, false, 30, 6, 1), new Alien(280, 1450, "moveYup", 4, false, 30, 6, 1), new Alien(380, 50, "moveXleft", 1.5, true, 30, 2, 2), new Alien(480, 140, "moveXleft", 1.5, true, 30, 2, 2), new Alien(-60, 50, "moveXright", 1.5, true, 30, 2, 2), new Alien(-160, 140, "moveXright", 1.5, true, 30, 2, 2));
        idAlien++;
    }
    if (idAlien === 7 && Aliens.length === 0) {
        Aliens.push(new Alien(135, -60, "moveYmiddle", 2, true, 2, 13, 20));
        idAlien++;
    }
    appearBoss(new Alien(32, -450, "moveYmiddle", 2, false, 25, "boss4", 95), 8);
    levelEnd("4");
}


/**********************************/
/*      LEVEL BOSS RUSH     */
/**********************************/
function levelBoss() {
    appearBoss(new Alien(32, -450, "moveYmiddle", 2, false, 20, "boss5", 100), 0);
    appearBoss(new Alien(32, -450, "moveYmiddle", 2, false, 20, "boss6", 125), 1);
    appearBoss(new Alien(32, -450, "moveYmiddle", 2, false, 80, "boss7", 100), 2);
    appearBoss(new Alien(32, -450, "moveYmiddle", 2, false, 40, "boss8", 150), 3);
    appearBoss(new Alien(0, -450, "moveYmiddle", 2, false, 50, "finalBoss", 250), 4);
    levelEnd("Boss Rush", 5);
}
