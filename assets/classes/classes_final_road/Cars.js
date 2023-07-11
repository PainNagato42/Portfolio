class Cars {
    constructor() {
        this.x;
        this.y = Math.floor(Math.random() * (-250));
        this.moveY = 3;
        this.count = 0;
        this.width;
        this.height;
        const police = new Image();
        police.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_final_road/police.png";
        police.onload = () => {
            this.image = police;
            this.widthPolice = 37;
            this.heightPolice = 77;
            
        }
        const chasseur = new Image();
        chasseur.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_final_road/chasseur.png";
        chasseur.onload = () => {
            this.image2 = chasseur;
            this.widthChasseur = 48;
            this.heightChasseur = 80;
        }
        const alien = new Image();
        alien.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_final_road/vaisseau_2.png";
        alien.onload = () => {
            this.image3 = alien;
            this.widthAlien = 60;
            this.heightAlien = 47;
        }
    }

    update() {
        this.drawCars()
        this.directionCars();
        this.level();
    }

    drawCars() {
        if (this.image) {
            if (numChoix === "i") {
                ctx.drawImage(this.image2, this.x, this.y, this.widthChasseur, this.heightChasseur);
                this.width = this.widthChasseur;
                this.height = this.heightChasseur;
            } else if (numChoix === "o") {
                ctx.drawImage(this.image3, this.x, this.y, this.widthAlien, this.heightAlien);
                this.width = this.widthAlien;
                this.height = this.heightAlien;
            } else {
                ctx.drawImage(this.image, this.x, this.y, this.widthPolice, this.heightPolice);
                this.width = this.widthPolice;
                this.height = this.heightPolice;
            }
        }
    }

    directionCars() {
        if (this.y >= 600) {
            this.y = Math.floor(Math.random() * (-250));
            this.directionX();
            this.count++
        } else {
            this.y += this.moveY
        }
    }

    directionX() {
        let numRandom = Math.floor(Math.random() * (360 - this.width));
        this.x = numRandom;
        if(C.y + C.height > C2.y && C.y < C2.y + C2.height && C.x + C.width > C2.x && C.x < C2.x + C2.width) {
            this.directionX();
        }
    }
    level() {
        switch (this.count) {
            case 3:
                this.moveY = 5;
                spanLevel.textContent = "2"
                break;
            case 6:
                this.moveY = 6;
                spanLevel.textContent = "3"
                break;
            case 10:
                this.moveY = 8;
                spanLevel.textContent = "4"
                break;
            case 18:
                this.moveY = 10;
                spanLevel.textContent = "5"
                break;
            case 29:
                this.moveY = 12;
                spanLevel.textContent = "6"
                break;
            case 40:
                this.moveY = 15;
                spanLevel.textContent = "7"
                break;
            case 55:
                this.moveY = 17;
                spanLevel.textContent = "8"
                break;
            case 70:
                this.moveY = 20;
                spanLevel.textContent = "9"
                break;
            case 85:
                this.moveY = 25;
                spanLevel.textContent = "10"
                break;
            case 100:
                break;
        }
    }
}