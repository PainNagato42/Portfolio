const containNumber = document.querySelector(".contain-number");
const btnGenerate = document.querySelector(".btn-generate");

let arrayNumber = [];
let arrayNbStar = [];

btnGenerate.addEventListener('click', () => {

    btnGenerate.classList.add("none");
    generateNumber(arrayNumber);
    setTimeout(() => {
        console.log("ici")
        generateNumber(arrayNbStar, 12, 2);
    }, 2400)
});

function generateNumber(arrayName, nb = 50, arrayLength = 5) {

    rand = Math.floor(Math.random() * nb) + 1;
    if (arrayName.length < arrayLength) {
        if (!arrayName.includes(rand)) {
            arrayName.push(rand)
            let div = document.createElement("div");
            div.classList.add("number");
            div.classList.add("flex");
            div.classList.add("align-center");
            div.classList.add("justify-center");
            if (arrayName === arrayNbStar) {
                div.classList.add("star");
            }
            div.textContent = rand;
            containNumber.append(div);
            setTimeout(() => {
                if (arrayName === arrayNumber) {
                    generateNumber(arrayName)
                } else {
                    generateNumber(arrayName, 12, 2)
                }
            }, 400);
        } else {
            if (arrayName === arrayNumber) {
                generateNumber(arrayName)
            } else {
                generateNumber(arrayName, 12, 2)
            }
        }
    }
}


