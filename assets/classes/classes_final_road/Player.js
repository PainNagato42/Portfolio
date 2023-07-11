class Player {
    constructor() {
        this.x = 160;
        this.y = 500;
        this.moveX = 10;
        this.currentDirection;
        this.width;
        this.height;
        const blueCar = new Image();
        blueCar.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_final_road/voiture_bleue.png";
        blueCar.onload = () => {
            this.image = blueCar;
            this.widthBlue = 44;
            this.heightBlue = 77;
        }
        const blackCar = new Image();
        blackCar.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_final_road/voiture_noire.png";
        blackCar.onload = () => {
            this.image2 = blackCar;
            this.widthBlack = 45;
            this.heightBlack = 77;
        }
        const redCar = new Image();
        redCar.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_final_road/voiture_rouge.png";
        redCar.onload = () => {
            this.image3 = redCar;
            this.widthRed = 44;
            this.heightRed = 76;
        }
        const pinkCar = new Image();
        pinkCar.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_final_road/voiture_rose.png";
        pinkCar.onload = () => {
            this.image4 = pinkCar;
            this.widthPink = 49;
            this.heightPink = 77;
        }
        const greenCar = new Image();
        greenCar.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_final_road/voiture_verte.png";
        greenCar.onload = () => {
            this.image5 = greenCar;
            this.widthGreen = 48;
            this.heightGreen = 78;
        }
        const f1 = new Image();
        f1.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_final_road/f1.png";
        f1.onload = () => {
            this.image6 = f1;
            this.widthF1 = 35;
            this.heightF1 = 80;
        }
        const purpleBike = new Image();
        purpleBike.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_final_road/moto_violette.png";
        purpleBike.onload = () => {
            this.image7 = purpleBike;
            this.widthPurpleBike = 34;
            this.heightPurpleBike = 77;
        }
        const yellowBike = new Image();
        yellowBike.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_final_road/moto_jaune.png";
        yellowBike.onload = () => {
            this.image8 = yellowBike;
            this.widthYellowBike = 34;
            this.heightYellowBike = 77;
        }
        const greenBike = new Image();
        greenBike.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_final_road/moto_verte.png";
        greenBike.onload = () => {
            this.image9 = greenBike;
            this.widthGreenBike = 34;
            this.heightGreenBike = 77;
        }
        const redBike = new Image();
        redBike.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_final_road/moto_rouge.png";
        redBike.onload = () => {
            this.image10 = redBike;
            this.widthRedBike = 33;
            this.heightRedBike = 76;
        }
        const blueBike = new Image();
        blueBike.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_final_road/moto_bleue.png";
        blueBike.onload = () => {
            this.image11 = blueBike;
            this.widthBlueBike = 36;
            this.heightBlueBike = 77;
        }
        const blackBike = new Image();
        blackBike.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_final_road/moto_noire.png";
        blackBike.onload = () => {
            this.image12 = blackBike;
            this.widthBlackBike = 35;
            this.heightBlackBike = 76;
        }
        const truck = new Image();
        truck.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_final_road/camion.png";
        truck.onload = () => {
            this.image13 = truck;
            this.widthTruck = 40;
            this.heightTruck = 99;
        }
        const jet = new Image();
        jet.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_final_road/avion.png";
        jet.onload = () => {
            this.image14 = jet;
            this.widthJet = 70;
            this.heightJet = 70;
        }
        const spaceship = new Image();
        spaceship.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_final_road/vaisseau.png";
        spaceship.onload = () => {
            this.image15 = spaceship;
            this.widthSpaceship = 75;
            this.heightSpaceship = 100;
        }
    }

    update() {
        this.drawPlayer();
        this.detecteKeyboard();
        this.direction();
    }

    drawPlayer() {
        if (this.image || this.image2 || this.image3 || this.image4 || this.image5 || this.image6) {
            switch (numChoix) {
                case "1":
                    ctx.drawImage(this.image, this.x, this.y, this.widthBlue, this.heightBlue);
                    this.width = this.widthBlue;
                    this.height = this.heightBlue;
                    break;
                case "2":
                    ctx.drawImage(this.image2, this.x, this.y, this.widthBlack, this.heightBlack);
                    this.width = this.widthBlack;
                    this.height = this.heightBlack;
                    break;
                case "3":
                    ctx.drawImage(this.image3, this.x, this.y, this.widthRed, this.heightRed);
                    this.width = this.widthRed;
                    this.height = this.heightRed;
                    break;
                case "4":
                    ctx.drawImage(this.image4, this.x, this.y, this.widthPink, this.heightPink);
                    this.width = this.widthPink;
                    this.height = this.heightPink;
                    break;
                case "5":
                    ctx.drawImage(this.image5, this.x, this.y, this.widthGreen, this.heightGreen);
                    this.width = this.widthGreen;
                    this.height = this.heightGreen;
                    break;
                case "6":
                    ctx.drawImage(this.image6, this.x, this.y, this.widthF1, this.heightF1);
                    this.width = this.widthF1;
                    this.height = this.heightF1;
                    break;
                case "a":
                    ctx.drawImage(this.image7, this.x, this.y, this.widthPurpleBike, this.heightPurpleBike);
                    this.width = this.widthPurpleBike;
                    this.height = this.heightPurpleBike;
                    break;
                case "z":
                    ctx.drawImage(this.image8, this.x, this.y, this.widthYellowBike, this.heightYellowBike);
                    this.width = this.widthYellowBike;
                    this.height = this.heightYellowBike;
                    break;
                case "e":
                    ctx.drawImage(this.image9, this.x, this.y, this.widthGreenBike, this.heightGreenBike);
                    this.width = this.widthGreenBike;
                    this.height = this.heightGreenBike;
                    break;
                case "r":
                    ctx.drawImage(this.image10, this.x, this.y, this.widthRedBike, this.heightRedBike);
                    this.width = this.widthRedBike;
                    this.height = this.heightRedBike;
                    break;
                case "t":
                    ctx.drawImage(this.image11, this.x, this.y, this.widthBlueBike, this.heightBlueBike);
                    this.width = this.widthBlueBike;
                    this.height = this.heightBlueBike;
                    break;
                case "y":
                    ctx.drawImage(this.image12, this.x, this.y, this.widthBlackBike, this.heightBlackBike);
                    this.width = this.widthBlackBike;
                    this.height = this.heightBlackBike;
                    break;
                case "u":
                    ctx.drawImage(this.image13, this.x, this.y, this.widthTruck, this.heightTruck);
                    this.width = this.widthTruck;
                    this.height = this.heightTruck;
                    break;
                case "i":
                    ctx.drawImage(this.image14, this.x, this.y, this.widthJet, this.heightJet);
                    this.width = this.widthJet;
                    this.height = this.heightJet;
                    canvas.style.backgroundColor = "#86c6ff";
                    break;
                case "o":
                    ctx.drawImage(this.image15, this.x, this.y, this.widthSpaceship, this.heightSpaceship);
                    this.width = this.widthSpaceship;
                    this.height = this.heightSpaceship;
                    canvas.style.backgroundColor = "black";
                    break;
            }
        }
    }

    detecteKeyboard() {
        if (window.screen.width >= 1180) {
            document.addEventListener("keydown", (e) => {
                switch (e.key) {
                    case "ArrowRight":
                        this.currentDirection = "right";
                        break;
                    case "ArrowLeft":
                        this.currentDirection = "left";
                        break;
                }
            })
            document.addEventListener("keyup", (e) => {
                switch (e.key) {
                    case "ArrowRight":
                        this.currentDirection = "";
                        break;
                    case "ArrowLeft":
                        this.currentDirection = "";
                        break;
                }
            })
        } else {
            dLeft.addEventListener("touchstart", () => {
                this.currentDirection = "left";
            })
            dLeft.addEventListener("touchend", () => {
                this.currentDirection = "";
            })
            dRight.addEventListener("touchstart", () => {
                this.currentDirection = "right";
            })
            dRight.addEventListener("touchend", () => {
                this.currentDirection = "";
            })
        }
    }

    direction() {
        if (this.currentDirection === "right") {
            if (this.x + this.width >= 360) {
                this.x = 360 - this.width;
            } else {
                this.x += this.moveX
            }
        } else if (this.currentDirection === "left") {
            if (this.x <= 0) {
                this.x = 0;
            } else {
                this.x -= this.moveX;
            }
        }
    }

}