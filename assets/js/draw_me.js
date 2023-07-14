const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const mediumCanvas = document.querySelector(".medium_canvas");
const mediumCtx = mediumCanvas.getContext("2d");
const smallCanvas = document.querySelector(".small_canvas");
const smallCtx = smallCanvas.getContext("2d");
const currentColor = document.querySelector(".current_color");
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
if (window.screen.width <= 768) {
    smallCtx.lineWidth = 2;
    smallCtx.strokeStyle = "black";
} else if (window.screen.width >= 769 && window.screen.width <= 1180) {
    mediumCtx.lineWidth = 2;
    mediumCtx.strokeStyle = "black";
} else {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
}


let pos = { x: 0, y: 0 }

window.addEventListener("load", () => {
    currentColor.style.backgroundColor = "black";
    colors.forEach(color => {
        color.style.backgroundColor = color.getAttribute("data-color");
        color.addEventListener("click", (e) => {
            if (window.screen.width <= 768) {
                if (bgColorActive === false) {
                    smallCtx.strokeStyle = e.target.getAttribute("data-color");
                    currentColor.style.backgroundColor = e.target.getAttribute("data-color");
                } else {
                    smallCanvas.style.backgroundColor = e.target.getAttribute("data-color");
                }
            } else if (window.screen.width >= 769 && window.screen.width <= 1180) {
                if (bgColorActive === false) {
                    mediumCtx.strokeStyle = e.target.getAttribute("data-color");
                    currentColor.style.backgroundColor = e.target.getAttribute("data-color");
                } else {
                    mediumCanvas.style.backgroundColor = e.target.getAttribute("data-color");
                }
            } else {
                if (bgColorActive === false) {
                    ctx.strokeStyle = e.target.getAttribute("data-color");
                    currentColor.style.backgroundColor = e.target.getAttribute("data-color");
                } else {
                    canvas.style.backgroundColor = e.target.getAttribute("data-color");
                }
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
        if(window.screen.width <= 768) {
            smallCtx.lineWidth = parseInt(e.target.textContent);
        } else if (window.screen.width >= 769 && window.screen.width <= 1180) {
            mediumCtx.lineWidth = parseInt(e.target.textContent);
        } else  {
            ctx.lineWidth = parseInt(e.target.textContent);
        }
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
    // MEDIUM
    mediumCanvas.addEventListener("touchmove", (e) => {
        draw(e);
    })
    mediumCanvas.addEventListener("touchstart", (e) => {
        position(e);
        drawActive = true;
    })
    mediumCanvas.addEventListener("touchend", () => {
        drawActive = false;
    })
    mediumCanvas.addEventListener("touchcancel", () => {
        drawActive = false;
    })

    // SMALL
    smallCanvas.addEventListener("touchmove", (e) => {
        draw(e);
    })
    smallCanvas.addEventListener("touchstart", (e) => {
        e.preventDefault();
        position(e);
        drawActive = true;
    })
    smallCanvas.addEventListener("touchend", () => {
        drawActive = false;
    })
    smallCanvas.addEventListener("touchcancel", () => {
        drawActive = false;
    })
}



// DESSINER

function draw(e) {
    if (drawActive === false) {
        return;
    } else {
        if (gommeActive === false) {
            let currentX;
            let currentY;
            if (window.screen.width <= 768) {
                currentX = e.touches[0].clientX - smallCanvas.getBoundingClientRect().x;
                currentY = e.touches[0].clientY - smallCanvas.getBoundingClientRect().y;

                smallCtx.beginPath();
                smallCtx.moveTo(pos.x, pos.y);
                smallCtx.lineTo(currentX, currentY);
                smallCtx.closePath();
                smallCtx.stroke();

            } else if (window.screen.width >= 769 && window.screen.width <= 1180) {
                currentX = e.touches[0].clientX - mediumCanvas.getBoundingClientRect().x;
                currentY = e.touches[0].clientY - mediumCanvas.getBoundingClientRect().y;

                mediumCtx.beginPath();
                mediumCtx.moveTo(pos.x, pos.y);
                mediumCtx.lineTo(currentX, currentY);
                mediumCtx.closePath();
                mediumCtx.stroke();
            } else {
                currentX = e.clientX - canvas.getBoundingClientRect().x;
                currentY = e.clientY - canvas.getBoundingClientRect().y;

                ctx.beginPath();
                ctx.moveTo(pos.x, pos.y);
                ctx.lineTo(currentX, currentY);
                ctx.closePath();
                ctx.stroke();
            }

            pos.x = currentX;
            pos.y = currentY;

        } else {
            let currentX;
            let currentY;
            if (window.screen.width <= 768) {
                currentX = e.touches[0].clientX - smallCanvas.getBoundingClientRect().x;
                currentY = e.touches[0].clientY - smallCanvas.getBoundingClientRect().y;

                smallCtx.clearRect(currentX - smallCtx.lineWidth, currentY - smallCtx.lineWidth, smallCtx.lineWidth, smallCtx.lineWidth);
            } else if (window.screen.width >= 769 && window.screen.width <= 1180) {
                currentX = e.touches[0].clientX - mediumCanvas.getBoundingClientRect().x;
                currentY = e.touches[0].clientY - mediumCanvas.getBoundingClientRect().y;

                mediumCtx.clearRect(currentX - mediumCtx.lineWidth, currentY - mediumCtx.lineWidth, mediumCtx.lineWidth, mediumCtx.lineWidth);
            } else {
                currentX = e.clientX - canvas.getBoundingClientRect().x;
                currentY = e.clientY - canvas.getBoundingClientRect().y;

                ctx.clearRect(currentX - ctx.lineWidth, currentY - ctx.lineWidth, ctx.lineWidth, ctx.lineWidth);
            }
        }
    }
}

function position(e) {
    if (window.screen.width <= 768) {
        pos.x = e.touches[0].clientX - smallCanvas.getBoundingClientRect().x;
        pos.y = e.touches[0].clientY - smallCanvas.getBoundingClientRect().y;
    } else if (window.screen.width >= 769 && window.screen.width <= 1180) {
        pos.x = e.touches[0].clientX - mediumCanvas.getBoundingClientRect().x;
        pos.y = e.touches[0].clientY - mediumCanvas.getBoundingClientRect().y;
    } else {
        pos.x = e.clientX - canvas.getBoundingClientRect().x;
        pos.y = e.clientY - canvas.getBoundingClientRect().y;
    }
}

// crayon 
stroke.addEventListener("click", () => {
    spanSize.textContent = "du crayon"
    if (window.screen.width <= 768) {
        smallCtx.strokeStyle = currentColor.style.backgroundColor;
    } else if (window.screen.width >= 769 && window.screen.width <= 1180) {
        mediumCtx.strokeStyle = currentColor.style.backgroundColor;
    } else {
        ctx.strokeStyle = currentColor.style.backgroundColor;
    }
    if (sizes[0].textContent === "2") {
        sizes.forEach(size => {
            size.textContent = parseInt(size.textContent) / 2;
        })
        if(window.screen.width <= 768) {
            smallCtx.lineWidth /= 2;
        } else if (window.screen.width >= 769 && window.screen.width <= 1180) {
            mediumCtx.lineWidth /= 2;
        } else {
            ctx.lineWidth /= 2;
        }
    }
    gommeActive = false;
    bgColorActive = false;
})

// gomme
gomme.addEventListener("click", () => {
    spanSize.textContent = "de la gomme";
    sizes.forEach(size => {
        size.textContent = parseInt(size.textContent) * 2;
    })
    if(window.screen.width <= 768) {
        smallCtx.lineWidth *= 2;
    } else if (window.screen.width >= 769 && window.screen.width <= 1180) {
        mediumCtx.lineWidth *= 2;
    } else {
        ctx.lineWidth *= 2;
    }
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
    if (window.screen.width <= 768) {
        smallCtx.clearRect(0, 0, smallCanvas.getBoundingClientRect().width, smallCanvas.getBoundingClientRect().height + 100);
    } else if (window.screen.width >= 769 && window.screen.width <= 1180) {
        mediumCtx.clearRect(0, 0, mediumCanvas.getBoundingClientRect().width, mediumCanvas.getBoundingClientRect().height + 100);
    } else {
        ctx.clearRect(0, 0, canvas.getBoundingClientRect().width, canvas.getBoundingClientRect().height + 100);
    }

})