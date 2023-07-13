const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const currentColor = document.querySelector(".current_color")
const colors = document.querySelectorAll(".color");
const sizes = document.querySelectorAll(".size");
const spanSize = document.querySelector("#span_size")
const tools = document.querySelectorAll(".tool");
const stroke = document.querySelector("#stroke");
const gomme = document.querySelector("#gomme");
const bgColor = document.querySelector("#background");
const trash = document.querySelector("#trash");

let drawActive = false;
let gommeActive = false;
let currentBgColor = "white";
let bgColorActive = false;
ctx.lineWidth = 2;
ctx.strokeStyle = "black";

let pos = { x: 0, y: 0 }

window.addEventListener("load", () => {
    currentColor.style.backgroundColor = "black";
    colors.forEach(color => {
        color.style.backgroundColor = color.getAttribute("data-color");
        color.addEventListener("click", (e) => {
            if (bgColorActive === false) {
                ctx.strokeStyle = e.target.getAttribute("data-color");
                currentColor.style.backgroundColor = e.target.getAttribute("data-color");
            } else {
                canvas.style.backgroundColor = e.target.getAttribute("data-color");
            }
        })
    })
})

// la taille du crayon

sizes.forEach(size => {
    size.addEventListener("click", (e) => {
        sizes.forEach(s => {
            s.classList.remove("active");
        })
        e.target.classList.add("active");
        ctx.lineWidth = parseInt(e.target.textContent);
    })
})

// outils active
tools.forEach(tool => {
    tool.addEventListener("click", (e) => {
        tools.forEach(t => {
            t.classList.remove("active");
        })
        e.target.classList.add("active");
    })
})

// Evenement pour dessiner
if (window.screen.width >= 1180) {
    canvas.addEventListener("mousemove", (e) => {
        draw(e);
    })
    canvas.addEventListener("mousedown", (e) => {
        position(e);
        drawActive = true;
    })
    canvas.addEventListener("mouseup", () => {
        drawActive = false;
    })
    canvas.addEventListener("mouseout", () => {
        drawActive = false;
    })
} else {
    canvas.addEventListener("touchmove", (e) => {
        draw(e);
    })
    canvas.addEventListener("touchstart", (e) => {
        position(e);
        drawActive = true;
    })
    canvas.addEventListener("touchend", () => {
        drawActive = false;
    })
    canvas.addEventListener("touchcancel", () => {
        drawActive = false;
    })
}



// DESSINER

function draw(e) {
    if (drawActive === false) {
        return;
    } else {
        if (gommeActive === false) {
            let currentX = (e.clientX - canvas.getBoundingClientRect().x) * 1250 / canvas.clientWidth;
            let currentY = (e.clientY - canvas.getBoundingClientRect().y) * 850 / canvas.clientHeight;

            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
            ctx.lineTo(currentX, currentY);
            ctx.closePath();
            ctx.stroke();

            pos.x = currentX;
            pos.y = currentY;
        } else {
            let currentX = (e.clientX - canvas.getBoundingClientRect().x) * 1250 / canvas.clientWidth;
            let currentY = (e.clientY - canvas.getBoundingClientRect().y) * 850 / canvas.clientHeight;
            ctx.clearRect(currentX - ctx.lineWidth, currentY - ctx.lineWidth, ctx.lineWidth, ctx.lineWidth)
        }


    }
}

function position(e) {
    pos.x = (e.clientX - canvas.getBoundingClientRect().x) * 1250 / canvas.clientWidth;
    pos.y = (e.clientY - canvas.getBoundingClientRect().y) * 850 / canvas.clientHeight;
}

// crayon 
stroke.addEventListener("click", () => {
    spanSize.textContent = "du crayon"
    ctx.strokeStyle = currentColor.style.backgroundColor;
    gommeActive = false;
    bgColorActive = false;
})

// gomme
gomme.addEventListener("click", () => {
    spanSize.textContent = "de la gomme"
    gommeActive = true;
    bgColorActive = false;
})

// activer pour changer le fond
bgColor.addEventListener("click", () => {
    gommeActive = false;
    bgColorActive = true;
})

// clean
trash.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.getBoundingClientRect().width, canvas.getBoundingClientRect().height);
})