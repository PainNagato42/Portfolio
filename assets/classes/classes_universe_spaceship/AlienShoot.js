class AlienShoot {
    constructor(x, y, speed, shootType = 1, diagonal = false) {
        this.width = 10;
        this.height = 10;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.shootType = shootType;
        this.diagonal = diagonal;

        /*********************************************/
        /*                  SIMPLE                  */
        /*******************************************/
        const shoot = new Image();
        shoot.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_1_alien.png";
        shoot.onload = () => {
            this.shoot1 = shoot;
        }
        const shoot2 = new Image();
        shoot2.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_2_alien.png";
        shoot2.onload = () => {
            this.shoot2 = shoot2;
        }
        const shoot3 = new Image();
        shoot3.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_3_alien.png";
        shoot3.onload = () => {
            this.shoot3 = shoot3;
        }
        const shoot4 = new Image();
        shoot4.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_4_alien.png";
        shoot4.onload = () => {
            this.shoot4 = shoot4;
        }
        const shoot5 = new Image();
        shoot5.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_5_alien.png";
        shoot5.onload = () => {
            this.shoot5 = shoot5;
        }
        const shoot6 = new Image();
        shoot6.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_6_alien.png";
        shoot6.onload = () => {
            this.shoot6 = shoot6;
        }
        const shoot7 = new Image();
        shoot7.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_7_alien.png";
        shoot7.onload = () => {
            this.shoot7 = shoot7;
        }

        /*********************************************/
        /*                  BOSS                    */
        /*******************************************/

        const shootBoss1 = new Image();
        shootBoss1.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_1_boss.png";
        shootBoss1.onload = () => {
            this.shootB1 = shootBoss1;
        }
        const shootBoss2 = new Image();
        shootBoss2.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_2_boss.png";
        shootBoss2.onload = () => {
            this.shootB2 = shootBoss2;
        }
        const shootBoss3 = new Image();
        shootBoss3.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_3_boss.png";
        shootBoss3.onload = () => {
            this.shootB3 = shootBoss3;
        }
        const shootBoss4 = new Image();
        shootBoss4.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_4_boss.png";
        shootBoss4.onload = () => {
            this.shootB4 = shootBoss4;
        }
        const shootBoss5 = new Image();
        shootBoss5.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_5_boss.png";
        shootBoss5.onload = () => {
            this.shootB5 = shootBoss5;
        }
        const shootBoss6 = new Image();
        shootBoss6.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_6_boss.png";
        shootBoss6.onload = () => {
            this.shootB6 = shootBoss6;
        }
        const shootBoss7 = new Image();
        shootBoss7.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_7_boss.png";
        shootBoss7.onload = () => {
            this.shootB7 = shootBoss7;
        }
        const shootBoss9 = new Image();
        shootBoss9.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_9_boss.png";
        shootBoss9.onload = () => {
            this.shootB9 = shootBoss9;
        }
        const shootBoss10 = new Image();
        shootBoss10.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_10_boss.png";
        shootBoss10.onload = () => {
            this.shootB10 = shootBoss10;
        }
        const shootBoss11 = new Image();
        shootBoss11.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_11_boss.png";
        shootBoss11.onload = () => {
            this.shootB11 = shootBoss11;
        }
        const shootBoss12 = new Image();
        shootBoss12.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_12_boss.png";
        shootBoss12.onload = () => {
            this.shootB12 = shootBoss12;
        }
        const shootBoss13 = new Image();
        shootBoss13.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_13_boss.png";
        shootBoss13.onload = () => {
            this.shootB13 = shootBoss13;
        }
        const shootBoss15 = new Image();
        shootBoss15.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_15_boss.png";
        shootBoss15.onload = () => {
            this.shootB15 = shootBoss15;
        }
    }

    update() {
        this.draw();
        this.move();
    }

    draw() {
        if (this.shoot1 || this.shoot2 || this.shoot2 || this.shoot4 || this.shoot5 || this.shoot6 || this.shoot7) {
            switch (this.shootType) {
                case 1:
                    ctx.drawImage(this.shoot1, this.x, this.y, this.width, this.height);
                    break;
                case 2:
                    this.width = 15;
                    this.height = 15;
                    ctx.drawImage(this.shoot2, this.x, this.y, this.width, this.height);
                    break;
                case 3:
                    this.width = 30;
                    this.height = 30;
                    ctx.drawImage(this.shoot1, this.x, this.y, this.width, this.height);
                    break;
                case 4:
                    this.width = 30;
                    this.height = 40;
                    ctx.drawImage(this.shoot3, this.x, this.y, this.width, this.height);
                    break;
                case 5:
                    this.width = 30;
                    this.height = 30;
                    ctx.drawImage(this.shoot4, this.x, this.y, this.width, this.height);
                    break;
                case 6:
                    this.width = 30;
                    this.height = 60;
                    ctx.drawImage(this.shoot5, this.x, this.y, this.width, this.height);
                    break;
                case 7:
                    this.width = 22;
                    this.height = 80;
                    ctx.drawImage(this.shoot6, this.x, this.y, this.width, this.height);
                    break;
                case 8:
                    this.width = 32;
                    this.height = 32;
                    ctx.drawImage(this.shoot7, this.x, this.y, this.width, this.height);
                    break;
            }
        }
        if (this.shootB1 || this.shootB2 || this.shootB3 || this.shootB4 || this.shootB5 || this.shootB6 || this.shootB7 || this.shootB9 || this.shootB10 || this.shootB11 || this.shootB12 || this.shootB13) {
            switch (this.shootType) {
                case "shootBoss1":
                    this.width = 37;
                    this.height = 102;
                    ctx.drawImage(this.shootB1, this.x, this.y, this.width, this.height);
                    break;
                case "shootBoss2":
                    this.width = 30;
                    this.height = 53;
                    ctx.drawImage(this.shootB2, this.x, this.y, this.width, this.height);
                    break;
                case "shootBoss3":
                    this.width = 40;
                    this.height = 37;
                    ctx.drawImage(this.shootB3, this.x, this.y, this.width, this.height);
                    break;
                case "shootBoss4":
                    this.width = 144;
                    this.height = 64;
                    ctx.drawImage(this.shootB4, this.x, this.y, this.width, this.height);
                    break;
                case "shootBoss5":
                    this.width = 55;
                    this.height = 88;
                    ctx.drawImage(this.shootB5, this.x, this.y, this.width, this.height);
                    break;
                case "shootBoss6":
                    this.width = 23;
                    this.height = 48;
                    ctx.drawImage(this.shootB6, this.x, this.y, this.width, this.height);
                    break;
                case "shootBoss7":
                    this.width = 60;
                    this.height = 109;
                    ctx.drawImage(this.shootB7, this.x, this.y, this.width, this.height);
                    break;
                case "shootBoss9":
                    this.width = 19;
                    this.height = 40;
                    ctx.drawImage(this.shootB9, this.x, this.y, this.width, this.height);
                    break;
                case "shootBoss10":
                    this.width = 86;
                    this.height = 115;
                    ctx.drawImage(this.shootB10, this.x, this.y, this.width, this.height);
                    break;
                case "shootBoss11":
                    this.width = 31;
                    this.height = 68;
                    ctx.drawImage(this.shootB11, this.x, this.y, this.width, this.height);
                    break;
                case "shootBoss12":
                    this.width = 91;
                    this.height = 368;
                    ctx.drawImage(this.shootB12, this.x, this.y, this.width, this.height);
                    break;
                case "shootBoss13":
                    this.width = 27;
                    this.height = 61;
                    ctx.drawImage(this.shootB13, this.x, this.y, this.width, this.height);
                    break;
                case "shootBoss15":
                    this.width = 27;
                    this.height = 61;
                    ctx.drawImage(this.shootB15, this.x, this.y, this.width, this.height);
                    break;
            }
        }
    }
    move() {
        if(this.diagonal === false) {
            this.y = this.y + this.speed;
        } else {
            if(this.speed < 0) {
                this.y = this.y - this.speed;
            } else {
                this.y = this.y + this.speed;
            }
            this.x = this.x + this.speed;
        }
    }

}