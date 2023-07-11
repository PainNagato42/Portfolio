const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const gameWidth = 360;
const gameHeight = 600;

const select = document.querySelector(".select");
const load = document.querySelector(".load");
const level = document.querySelector(".level");
const spanLevel = document.querySelector("#level");
const divChoix = document.querySelector(".choix");
const popup = document.querySelector(".popup");

const music = new Audio("https://PainNagato42.github.io/Portfolio/assets/song/song_final_road/gaming-8bit.mp3");
const songCrash = new Audio("https://PainNagato42.github.io/Portfolio/assets/song/song_final_road/crash.mp3");

const smallTouch = document.querySelectorAll(".small_touch")
const dLeft = document.querySelector(".d-left");
const dRight = document.querySelector(".d-right");

let gameStart = false;
let hit = false;
let numChoix;
let finishY = -50;

const P = new Player();
const C = new Cars();
const C2 = new Cars();
C.directionX();
C2.directionX();

window.addEventListener("keydown", (e) => {
    if ((e.key == 1 || e.key == 2 || e.key == 3 || e.key == 4 || e.key == 5 || e.key == 6 || e.key == "a" || e.key == "z" || e.key == "e" || e.key == "r" || e.key == "t" || e.key == "y" || e.key == "u" || e.key == "i" || e.key == "o") && gameStart === false) {
        numChoix = e.key;
        divChoix.style.display = "none";
        select.style.display = "none";
        level.style.display = "block";
        load.classList.remove("none");
        setTimeout(() => {
            load.classList.add("none");
            setInterval(() => {
                if (hit === true) {
                    music.pause();
                } else {
                    music.play();
                }
            }, 150)
        }, 5500)
        if (gameStart === false) {
            gameStart = true;
            update();
        }
    }
})
if (window.screen.width <= 1180) {
    smallTouch.forEach(touch => {
        touch.addEventListener("click", (e) => {
            if (e.target.getAttribute("data-id") === null) {
                numChoix = e.target.parentElement.getAttribute("data-id");
            } else {
                numChoix = e.target.getAttribute("data-id");
            }
            divChoix.style.display = "none";
            select.style.display = "none";
            level.style.display = "block";
            load.classList.remove("none");
            setTimeout(() => {
                load.classList.add("none");
                setInterval(() => {
                    if (hit === true) {
                        music.pause();
                    } else {
                        music.play();
                    }
                }, 150)
            }, 5500)
            dLeft.classList.remove("none");
            dRight.classList.remove("none");
            if (gameStart === false) {
                gameStart = true;
                update();
            }
        })
    });
}


function update() {
    clearScreen();
    P.update();
    C.update();
    C2.update();
    collision();
    if (hit === false && finishY <= 500 + P.height) {
        setTimeout(update, 20);
    } else {
        popup.classList.remove("none");
        popup.style.color = "green";
        document.querySelector(".popup div p").textContent = "GAGNER";
        clearTimeout(update);
    }
    if (hit === true) {
        popup.classList.remove("none");
        popup.style.color = "rgb(221, 25, 25)";
        document.querySelector(".popup div p").textContent = "PERDU";
        songCrash.play();
        clearTimeout(update);
    }
    if (C.count >= 100) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, finishY, 360, 30);
        finishY += 10;
    }
};

function clearScreen() {
    ctx.clearRect(0, 0, gameWidth, gameHeight);
}

function collision() {
    if ((C.y + C.height > P.y && C.y < P.y + P.height && C.x + C.width > P.x && C.x < P.x + P.width) || (C2.y + C2.height > P.y && C2.y < P.y + P.height && C2.x + C2.width > P.x && C2.x < P.x + P.width)) {
        hit = true;
    }
}











