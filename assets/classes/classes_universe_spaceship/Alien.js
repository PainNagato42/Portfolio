class Alien {
    constructor(x, y, velocity, speed, fire, timeShoot, alienType, life) {
        this.width;
        this.height;
        this.x = x;
        this.y = y;
        this.velocity = velocity; // moveXright or moveXleft or moveYbottom or moveYmiddle or moveAllRight or moveAllLeft
        this.speed = speed;
        this.fire = fire; // true ou false
        this.shoots = [];
        this.time = 0;
        this.timeShoot = timeShoot;
        this.time2 = 0
        this.timeShoot2 = 0;
        this.alienType = alienType;
        this.alienStage = 1;
        this.timeAlienStage = 0;
        this.boss = false;
        this.bossStage = 1;
        this.bossStage2 = 0;
        this.timeBossStage = 0;
        this.life = life;
        this.timeMove = 0;

        /**********************************************/
        /*              SIMPLE ALIEN                 */
        /********************************************/

        const alien = new Image();
        alien.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/alien_1.png";
        alien.onload = () => {
            this.imgAlien1 = alien;
            this.widthA1 = 38;
            this.heightA1 = 42;
        }
        const alien2 = new Image();
        alien2.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/alien_2.png";
        alien2.onload = () => {
            this.imgAlien2 = alien2;
            this.widthA2 = 46;
            this.heightA2 = 42;
        }
        const alien3 = new Image();
        alien3.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/alien_3.png";
        alien3.onload = () => {
            this.imgAlien3 = alien3;
            this.widthA3 = 46;
            this.heightA3 = 39;
        }
        const alien4 = new Image();
        alien4.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/alien_4.png";
        alien4.onload = () => {
            this.imgAlien4 = alien4;
            this.widthA4 = 46;
            this.heightA4 = 39;
        }
        const alien5 = new Image();
        alien5.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/alien_5.png";
        alien5.onload = () => {
            this.imgAlien5 = alien5;
            this.widthA5 = 56;
            this.heightA5 = 61;
        }
        const alien6 = new Image();
        alien6.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/alien_6.png";
        alien6.onload = () => {
            this.imgAlien6 = alien6;
            this.widthA6 = 41;
            this.heightA6 = 28;
        }
        const alien7 = new Image();
        alien7.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/alien_7.png";
        alien7.onload = () => {
            this.imgAlien7 = alien7;
            this.widthA7 = 40;
            this.heightA7 = 65;
        }
        const alien8 = new Image();
        alien8.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/alien_8.png";
        alien8.onload = () => {
            this.imgAlien8 = alien8;
            this.widthA8 = 61;
            this.heightA8 = 64;
        }
        const alien9 = new Image();
        alien9.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/alien_9.png";
        alien9.onload = () => {
            this.imgAlien9 = alien9;
            this.widthA9 = 51;
            this.heightA9 = 38;
        }
        const alien10 = new Image();
        alien10.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/alien_10.png";
        alien10.onload = () => {
            this.imgAlien10 = alien10;
            this.widthA10 = 42;
            this.heightA10 = 45;
        }
        const alien11 = new Image();
        alien11.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/alien_11.png";
        alien11.onload = () => {
            this.imgAlien11 = alien11;
            this.widthA11 = 88;
            this.heightA11 = 87;
        }
        const alien12 = new Image();
        alien12.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/alien_12.png";
        alien12.onload = () => {
            this.imgAlien12 = alien12;
            this.widthA12 = 86;
            this.heightA12 = 87;
        }
        const alien13 = new Image();
        alien13.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/alien_13.png";
        alien13.onload = () => {
            this.imgAlien13 = alien13;
            this.widthA13 = 90;
            this.heightA13 = 90;
        }

        /**********************************************/
        /*              BOSS ALIEN                   */
        /********************************************/
        const boss1 = new Image();
        boss1.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/boss_1.png";
        boss1.onload = () => {
            this.imgBoss1 = boss1;
            this.widthB1 = 300;
            this.heightB1 = 311;
        }
        const boss2 = new Image();
        boss2.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/boss_2.png";
        boss2.onload = () => {
            this.imgBoss2 = boss2;
            this.widthB2 = 300;
            this.heightB2 = 311;
        }
        const boss3 = new Image();
        boss3.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/boss_3.png";
        boss3.onload = () => {
            this.imgBoss3 = boss3;
            this.widthB3 = 280;
            this.heightB3 = 300;
        }
        const boss4 = new Image();
        boss4.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/boss_4.png";
        boss4.onload = () => {
            this.imgBoss4 = boss4;
            this.widthB4 = 300;
            this.heightB4 = 311;
        }
        const boss5 = new Image();
        boss5.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/boss_5.png";
        boss5.onload = () => {
            this.imgBoss5 = boss5;
            this.widthB5 = 300;
            this.heightB5 = 280;
        }
        const boss6 = new Image();
        boss6.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/boss_6.png";
        boss6.onload = () => {
            this.imgBoss6 = boss6;
            this.widthB6 = 300;
            this.heightB6 = 280;
        }
        const boss7 = new Image();
        boss7.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/boss_7.png";
        boss7.onload = () => {
            this.imgBoss7 = boss7;
            this.widthB7 = 300;
            this.heightB7 = 311;
        }
        const boss8 = new Image();
        boss8.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/boss_8.png";
        boss8.onload = () => {
            this.imgBoss8 = boss8;
            this.widthB8 = 300;
            this.heightB8 = 311;
        }
        const finalBoss = new Image();
        finalBoss.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/final_boss.png";
        finalBoss.onload = () => {
            this.imgfinalBoss = finalBoss;
            this.widthFB = 360;
            this.heightFB = 250;
        }

    }

    update() {
        this.draw();
        this.move();
        this.shoot();
    }

    draw() {
        if (this.imgAlien1 || this.imgAlien2 || this.imgAlien3 || this.imgAlien4 || this.imgAlien5 || this.imgAlien6 || this.imgAlien7 || this.imgAlien8 || this.imgAlien9 || this.imgAlien10 || this.imgAlien11 || this.imgAlien12 || this.imgAlien13) {
            switch (this.alienType) {
                case 1:
                    ctx.drawImage(this.imgAlien1, this.x, this.y, this.widthA1, this.heightA2);
                    this.width = this.widthA1;
                    this.height = this.heightA1;
                    break;
                case 2:
                    ctx.drawImage(this.imgAlien2, this.x, this.y, this.widthA2, this.heightA2);
                    this.width = this.widthA2;
                    this.height = this.heightA2;
                    break;
                case 3:
                    ctx.drawImage(this.imgAlien3, this.x, this.y, this.widthA3, this.heightA3);
                    this.width = this.widthA3;
                    this.height = this.heightA3;
                    break;
                case 4:
                    ctx.drawImage(this.imgAlien4, this.x, this.y, this.widthA4, this.heightA4);
                    this.width = this.widthA4;
                    this.height = this.heightA4;
                    break;
                case 5:
                    ctx.drawImage(this.imgAlien5, this.x, this.y, this.widthA5, this.heightA5);
                    this.width = this.widthA5;
                    this.height = this.heightA5;
                    break;
                case 6:
                    ctx.drawImage(this.imgAlien6, this.x, this.y, this.widthA6, this.heightA6);
                    this.width = this.widthA6;
                    this.height = this.heightA6;
                    break;
                case 7:
                    ctx.drawImage(this.imgAlien7, this.x, this.y, this.widthA7, this.heightA7);
                    this.width = this.widthA7;
                    this.height = this.heightA7;
                    break;
                case 8:
                    ctx.drawImage(this.imgAlien8, this.x, this.y, this.widthA8, this.heightA8);
                    this.width = this.widthA8;
                    this.height = this.heightA8;
                    break;
                case 9:
                    ctx.drawImage(this.imgAlien9, this.x, this.y, this.widthA9, this.heightA9);
                    this.width = this.widthA9;
                    this.height = this.heightA9;
                    break;
                case 10:
                    ctx.drawImage(this.imgAlien10, this.x, this.y, this.widthA10, this.heightA10);
                    this.width = this.widthA10;
                    this.height = this.heightA10;
                    break;
                case 11:
                    ctx.drawImage(this.imgAlien11, this.x, this.y, this.widthA11, this.heightA11);
                    this.width = this.widthA11;
                    this.height = this.heightA11;
                    break;
                case 12:
                    ctx.drawImage(this.imgAlien12, this.x, this.y, this.widthA12, this.heightA12);
                    this.width = this.widthA12;
                    this.height = this.heightA12;
                    break;
                case 13:
                    ctx.drawImage(this.imgAlien13, this.x, this.y, this.widthA13, this.heightA13);
                    this.width = this.widthA13;
                    this.height = this.heightA13;
                    break;
            }
        }
        if (this.imgBoss1 || this.imgBoss2 || this.imgBoss3 || this.imgBoss4 || this.imgBoss5 || this.imgBoss6 || this.imgBoss7 || this.imgBoss8 || this.imgfinalBoss) {
            switch (this.alienType) {
                case "boss1":
                    ctx.drawImage(this.imgBoss1, this.x, this.y, this.widthB1, this.heightB1);
                    this.width = this.widthB1;
                    this.height = this.heightB1;
                    this.boss = true
                    break;
                case "boss2":
                    ctx.drawImage(this.imgBoss2, this.x, this.y, this.widthB2, this.heightB2);
                    this.width = this.widthB2;
                    this.height = this.heightB2;
                    this.boss = true
                    break;
                case "boss3":
                    ctx.drawImage(this.imgBoss3, this.x, this.y, this.widthB3, this.heightB3);
                    this.width = this.widthB3;
                    this.height = this.heightB3;
                    this.boss = true
                    break;
                case "boss4":
                    ctx.drawImage(this.imgBoss4, this.x, this.y, this.widthB4, this.heightB4);
                    this.width = this.widthB4;
                    this.height = this.heightB4;
                    this.boss = true
                    break;
                case "boss5":
                    ctx.drawImage(this.imgBoss5, this.x, this.y, this.widthB5, this.heightB5);
                    this.width = this.widthB5;
                    this.height = this.heightB5;
                    this.boss = true
                    break;
                case "boss6":
                    ctx.drawImage(this.imgBoss6, this.x, this.y, this.widthB6, this.heightB6);
                    this.width = this.widthB6;
                    this.height = this.heightB6;
                    this.boss = true
                    break;
                case "boss7":
                    ctx.drawImage(this.imgBoss7, this.x, this.y, this.widthB7, this.heightB7);
                    this.width = this.widthB7;
                    this.height = this.heightB7;
                    this.boss = true
                    break;
                case "boss8":
                    ctx.drawImage(this.imgBoss8, this.x, this.y, this.widthB8, this.heightB8);
                    this.width = this.widthB8;
                    this.height = this.heightB8;
                    this.boss = true
                    break;
                case "finalBoss":
                    ctx.drawImage(this.imgfinalBoss, this.x, this.y, this.widthFB, this.heightFB);
                    this.width = this.widthFB;
                    this.height = this.heightFB;
                    this.boss = true
                    break;

            }
        }

    }

    move() {
        if (this.velocity === "moveXright") {
            this.x = this.x + this.speed;
        }
        if (this.velocity === "moveXleft") {
            this.x = this.x - this.speed;
        }
        if (this.velocity === "moveYbottom") {
            this.y = this.y + this.speed;
        }
        if (this.velocity === "moveYmiddle") {
            if (this.boss === false) {
                this.timeMove++
            }
            if (this.y <= 160 && this.boss === false) {
                this.y = this.y + this.speed;
            }
            if (this.y <= 20 && this.boss === true) {
                this.y = this.y + this.speed;
            }
            if (this.timeMove >= 190) {
                this.timeMove = 0;
                this.velocity = "moveYup";
            }
        }
        if (this.velocity === "moveYup") {
            this.y = this.y - this.speed;
        }
        if (this.velocity === "moveAllRight") {
            this.y = this.y + this.speed * 2;
            this.x = this.x + this.speed;
        }
        if (this.velocity === "moveAllRightUp") {
            this.y = this.y - this.speed * 2;
            this.x = this.x + this.speed;
        }
        if (this.velocity === "moveAllLeft") {
            this.y = this.y + this.speed * 2;
            this.x = this.x - this.speed;
        }
        if (this.velocity === "moveAllLeftUp") {
            this.y = this.y - this.speed * 2;
            this.x = this.x - this.speed;
        }
    }

    shoot() {
        if (this.fire === true) {
            this.time++;
            if (this.alienType === 1) {
                if (this.timeShoot === this.time) {
                    shootsAlien.push(new AlienShoot(this.x + 15, this.y + this.height, 10));
                    this.time = 0;
                }
            }
            if (this.alienType === 2) {
                if (this.timeShoot === this.time) {
                    shootsAlien.push(new AlienShoot(this.x + 3, this.y + this.height, 10));
                    shootsAlien.push(new AlienShoot(this.x + 35, this.y + this.height, 10));
                    this.time = 0;
                }
            }
            if (this.alienType === 3) {
                if (this.timeShoot === this.time) {
                    shootsAlien.push(new AlienShoot(this.x + 33, this.y + this.height, 10));
                    shootsAlien.push(new AlienShoot(this.x + 6, this.y - 10, -10));
                    this.time = 0;
                }
            }
            if (this.alienType === 4) {
                if (this.timeShoot === this.time) {
                    shootsAlien.push(new AlienShoot(this.x + 46, this.y + 10, 15, 2));
                    shootsAlien.push(new AlienShoot(this.x + 26, this.y + this.height, 15, 2));
                    shootsAlien.push(new AlienShoot(this.x + 6, this.y + this.height, 15, 2));
                    shootsAlien.push(new AlienShoot(this.x - 15, this.y + 10, 15, 2));
                    this.time = 0;
                }
            }
            if (this.alienType === 5) {
                if (this.timeShoot === this.time) {
                    shootsAlien.push(new AlienShoot(this.x + 13, this.y + this.height, 10, 3));
                    this.time = 0;
                }
            }
            if (this.alienType === 7) {
                if (this.timeShoot === this.time) {
                    shootsAlien.push(new AlienShoot(this.x + 5, this.y + this.height, 10, 4));
                    this.time = 0;
                }
            }
            if (this.alienType === 8) {
                if (this.timeShoot === this.time) {
                    this.timeAlienStage++;
                    if (this.timeAlienStage >= 10 && this.alienStage === 1) {
                        this.alienStage = 2;
                        this.timeAlienStage = 0;
                    }
                    if (this.timeAlienStage >= 10 && this.alienStage === 2) {
                        this.alienStage = 1;
                        this.timeAlienStage = 0;
                    }
                    if (this.alienStage === 1 && this.timeAlienStage >= 5) {
                        shootsAlien.push(new AlienShoot(this.x + 51, this.y + this.height, 10));
                    }
                    if (this.alienStage === 2 && this.timeAlienStage >= 5) {
                        shootsAlien.push(new AlienShoot(this.x + 3, this.y + this.height, 10));
                    }
                    this.time = 0;
                }
            }
            if (this.alienType === 9) {
                if (this.timeShoot === this.time) {
                    shootsAlien.push(new AlienShoot(this.x + 12, this.y + this.height, 5, 5));
                    this.time = 0;
                }
            }
            if (this.alienType === 10) {
                if (this.timeShoot === this.time) {
                    shootsAlien.push(new AlienShoot(this.x + 10, this.y + this.height, 3, 1, true));
                    shootsAlien.push(new AlienShoot(this.x + 20, this.y + this.height, -3, 1, true));
                    this.time = 0;
                }
            }
            if (this.alienType === 11) {
                if (this.timeShoot === this.time) {
                    shootsAlien.push(new AlienShoot(this.x - 10, this.y + this.height, 10, 6));
                    shootsAlien.push(new AlienShoot(this.x + 60, this.y + this.height, 10, 6));
                    this.time = 0;
                }
            }
            if (this.alienType === 12) {
                if (this.timeShoot === this.time) {
                    this.timeAlienStage++;
                    if (this.timeAlienStage >= 1 && this.alienStage === 1) {
                        this.alienStage = 2;
                        this.timeAlienStage = 0;
                    }
                    if (this.timeAlienStage >= 1 && this.alienStage === 2) {
                        this.alienStage = 1;
                        this.timeAlienStage = 0;
                    }
                    if (this.alienStage === 1) {
                        shootsAlien.push(new AlienShoot(this.x + 5, this.y + this.height, 10, 7));
                    }
                    if (this.alienStage === 2) {
                        shootsAlien.push(new AlienShoot(this.x + 50, this.y + this.height, 10, 7));
                    }
                    this.time = 0;
                }
            }
            if (this.alienType === 13) {
                if (this.timeShoot === this.time) {
                    this.timeAlienStage++;
                    if (this.timeAlienStage >= 20 && this.alienStage === 1) {
                        this.alienStage = 2;
                        this.timeAlienStage = 0;
                    }
                    if (this.timeAlienStage >= 10 && this.alienStage === 2) {
                        this.alienStage = 1;
                        this.timeAlienStage = 0;
                    }
                    if (this.alienStage === 1 && this.timeAlienStage >= 15) {
                        shootsAlien.push(new AlienShoot(this.x + 40, this.y + this.height, 10));
                        shootsAlien.push(new AlienShoot(this.x + 50, this.y + this.height, 10));
                        shootsAlien.push(new AlienShoot(this.x + 60, this.y + this.height, 10));
                    }
                    if (this.alienStage === 2 && this.timeAlienStage === 9) {
                        shootsAlien.push(new AlienShoot(this.x, this.y + this.height, 10, 8));
                    }
                    this.time = 0;
                }
            }
            if (this.alienType === "boss1") {
                if (this.timeShoot === this.time) {
                    this.timeBossStage++;
                    if (this.timeBossStage >= 10 && this.bossStage === 1) {
                        this.bossStage = 2;
                        this.timeBossStage = 0;
                    }
                    if (this.timeBossStage >= 10 && this.bossStage === 2) {
                        this.bossStage = 1;
                        this.timeBossStage = 0;
                    }
                    if (this.bossStage === 1) {
                        shootsAlien.push(new AlienShoot(this.x + 10, this.y + this.height - 80, 5));
                        shootsAlien.push(new AlienShoot(this.x + 30, this.y + this.height - 70, 5));
                        shootsAlien.push(new AlienShoot(this.x + 50, this.y + this.height - 50, 5));
                        shootsAlien.push(new AlienShoot(this.x + 70, this.y + this.height - 30, 5));
                        shootsAlien.push(new AlienShoot(this.x + 220, this.y + this.height - 30, 5));
                        shootsAlien.push(new AlienShoot(this.x + 240, this.y + this.height - 50, 5));
                        shootsAlien.push(new AlienShoot(this.x + 260, this.y + this.height - 70, 5));
                        shootsAlien.push(new AlienShoot(this.x + 280, this.y + this.height - 80, 5));
                    }
                    if (this.bossStage === 2 && this.timeBossStage >= 4) {
                        shootsAlien.push(new AlienShoot(this.x + 115, this.y + this.height - 50, 10, "shootBoss1"));
                        shootsAlien.push(new AlienShoot(this.x + 150, this.y + this.height - 50, 10, "shootBoss1"));
                    }
                    this.time = 0;
                }
            }
            if (this.alienType === "boss2") {
                this.time2++;
                this.timeShoot2 = 50;
                if (this.timeShoot === this.time) {
                    this.timeBossStage++;
                    if (this.timeBossStage >= 15 && this.bossStage === 1) {
                        this.bossStage = 2;
                        this.timeBossStage = 0;
                    }
                    if (this.timeBossStage >= 15 && this.bossStage === 2) {
                        this.bossStage = 1;
                        this.timeBossStage = 0;
                    }
                    if (this.bossStage === 1) {
                        shootsAlien.push(new AlienShoot(this.x + 10, this.y + this.height, 5));
                        shootsAlien.push(new AlienShoot(this.x + 30, this.y + this.height, 5));
                        shootsAlien.push(new AlienShoot(this.x + 50, this.y + this.height, 5));
                        shootsAlien.push(new AlienShoot(this.x + 70, this.y + this.height, 5));
                    }
                    if (this.bossStage === 2 && this.timeBossStage >= 4) {
                        shootsAlien.push(new AlienShoot(this.x + 220, this.y + this.height, 5));
                        shootsAlien.push(new AlienShoot(this.x + 240, this.y + this.height, 5));
                        shootsAlien.push(new AlienShoot(this.x + 260, this.y + this.height, 5));
                        shootsAlien.push(new AlienShoot(this.x + 280, this.y + this.height, 5));
                    }
                    this.time = 0;
                }
                if (this.timeShoot2 === this.time2) {
                    shootsAlien.push(new AlienShoot(this.x + 135, this.y + this.height, 12, "shootBoss2"));
                    this.time2 = 0;
                }
            }
            if (this.alienType === "boss3") {
                this.time2++;
                this.timeShoot2 = 35;
                if (this.timeShoot === this.time) {
                    this.timeBossStage++;
                    if (this.timeBossStage >= 1 && this.bossStage === 1) {
                        this.bossStage = 2;
                        this.timeBossStage = 0;
                    }
                    if (this.timeBossStage >= 1 && this.bossStage === 2) {
                        this.bossStage = 1;
                        this.timeBossStage = 0;
                    }
                    if (this.bossStage === 1) {
                        shootsAlien.push(new AlienShoot(this.x, this.y + this.height, 9, "shootBoss4"));
                    } else {
                        shootsAlien.push(new AlienShoot(this.x + 130, this.y + this.height, 9, "shootBoss4"));
                    }
                    this.time = 0;
                }
                if (this.timeShoot2 === this.time2) {
                    shootsAlien.push(new AlienShoot(this.x - 20, this.y + this.height, 6, "shootBoss3"));
                    shootsAlien.push(new AlienShoot(this.x + 115, this.y + this.height, 6, "shootBoss3"));
                    shootsAlien.push(new AlienShoot(this.x + 250, this.y + this.height, 6, "shootBoss3"));
                    this.time2 = 0;
                }
            }
            if (this.alienType === "boss4") {
                if (this.timeShoot === this.time) {
                    this.timeBossStage++;
                    if (this.timeBossStage >= 1 && this.bossStage === 1) {
                        this.bossStage = 2;
                        this.timeBossStage = 0;
                    }
                    if (this.timeBossStage >= 1 && this.bossStage === 2) {
                        this.bossStage = 3;
                        this.timeBossStage = 0;
                    }
                    if (this.timeBossStage >= 1 && this.bossStage === 3) {
                        this.bossStage = 4;
                        this.timeBossStage = 0;
                    }
                    if (this.timeBossStage >= 1 && this.bossStage === 4) {
                        this.bossStage = 5;
                        this.timeBossStage = 0;
                    }
                    if (this.timeBossStage >= 1 && this.bossStage === 5) {
                        this.bossStage = 6;
                        this.timeBossStage = 0;
                    }
                    if (this.timeBossStage >= 1 && this.bossStage === 6) {
                        this.bossStage = 1;
                        this.timeBossStage = 0;
                    }
                    if (this.bossStage === 1) {
                        shootsAlien.push(new AlienShoot(this.x + 80, this.y + this.height - 20, 8, "shootBoss5"));
                        shootsAlien.push(new AlienShoot(this.x + 165, this.y + this.height - 20, 8, "shootBoss5"));
                        shootsAlien.push(new AlienShoot(this.x + 250, this.y + this.height - 20, 8, "shootBoss5"));
                    }
                    if (this.bossStage === 2 || this.bossStage === 6) {
                        shootsAlien.push(new AlienShoot(this.x, this.y + this.height - 20, 8, "shootBoss5"));
                        shootsAlien.push(new AlienShoot(this.x + 165, this.y + this.height - 20, 8, "shootBoss5"));
                        shootsAlien.push(new AlienShoot(this.x + 250, this.y + this.height - 20, 8, "shootBoss5"));
                    }
                    if (this.bossStage === 3 || this.bossStage === 5) {
                        shootsAlien.push(new AlienShoot(this.x, this.y + this.height - 20, 8, "shootBoss5"));
                        shootsAlien.push(new AlienShoot(this.x + 80, this.y + this.height - 20, 8, "shootBoss5"));
                        shootsAlien.push(new AlienShoot(this.x + 250, this.y + this.height - 20, 8, "shootBoss5"));
                    }
                    if (this.bossStage === 4) {
                        shootsAlien.push(new AlienShoot(this.x, this.y + this.height - 20, 8, "shootBoss5"));
                        shootsAlien.push(new AlienShoot(this.x + 80, this.y + this.height - 20, 8, "shootBoss5"));
                        shootsAlien.push(new AlienShoot(this.x + 165, this.y + this.height - 20, 8, "shootBoss5"));
                    }
                    this.time = 0;
                }
            }
            if (this.alienType === "boss5") {
                this.time2++;
                this.timeShoot2 = 40;
                if (this.timeShoot === this.time) {
                    shootsAlien.push(new AlienShoot(this.x + Math.floor(Math.random() * 281), this.y + this.height - 20, 8, "shootBoss6"));
                    this.time = 0;
                }
                if (this.timeShoot2 === this.time2) {
                    this.timeBossStage++;
                    if (this.timeBossStage >= 2 && this.bossStage === 1) {
                        this.bossStage = 2;
                        this.timeBossStage = 0;
                    }
                    if (this.timeBossStage >= 2 && this.bossStage === 2) {
                        this.bossStage = 1;
                        this.timeBossStage = 0;
                    }
                    if (this.bossStage === 1 && this.timeBossStage >= 1) {
                        shootsAlien.push(new AlienShoot(this.x + 30, this.y + this.height - 20, 8, "shootBoss7"));
                    }
                    if (this.bossStage === 2 && this.timeBossStage >= 1) {
                        shootsAlien.push(new AlienShoot(this.x + 230, this.y + this.height - 20, 8, "shootBoss7"));
                    }
                    this.time2 = 0;
                }
            }
            if (this.alienType === "boss6") {
                this.time2++;
                this.timeShoot2 = 20;
                if (this.timeShoot === this.time) {
                    this.timeBossStage++;
                    if (this.timeBossStage >= 2 && this.bossStage === 1) {
                        this.bossStage = 2;
                        this.timeBossStage = 0;
                    }
                    if (this.timeBossStage >= 2 && this.bossStage === 2) {
                        this.bossStage = 1;
                        this.timeBossStage = 0;
                    }
                    if (this.bossStage === 1 && this.timeBossStage >= 1) {
                        shootsAlien.push(new AlienShoot(this.x, this.y + this.height - 20, 8, "shootBoss9"));
                        shootsAlien.push(new AlienShoot(this.x + 20, this.y + this.height - 20, 8, "shootBoss9"));
                        shootsAlien.push(new AlienShoot(this.x + 135, this.y + this.height - 20, 8, "shootBoss9"));
                        shootsAlien.push(new AlienShoot(this.x + 145, this.y + this.height - 20, 8, "shootBoss9"));
                        shootsAlien.push(new AlienShoot(this.x + 260, this.y + this.height - 20, 8, "shootBoss9"));
                        shootsAlien.push(new AlienShoot(this.x + 280, this.y + this.height - 20, 8, "shootBoss9"));
                    }
                    if (this.bossStage === 2 && this.timeBossStage >= 1) {
                        shootsAlien.push(new AlienShoot(this.x + 60, this.y + this.height - 20, 8, "shootBoss9"));
                        shootsAlien.push(new AlienShoot(this.x + 80, this.y + this.height - 20, 8, "shootBoss9"));
                        shootsAlien.push(new AlienShoot(this.x + 210, this.y + this.height - 20, 8, "shootBoss9"));
                        shootsAlien.push(new AlienShoot(this.x + 230, this.y + this.height - 20, 8, "shootBoss9"));
                    }
                    this.time = 0;
                }
                if (this.timeShoot2 === this.time2) {
                    targets.push(new Target(this.x + Math.floor(Math.random() * 261), this.y + this.height + Math.floor(Math.random() * 141) + 60));

                }
                if (this.time2 === 70) {
                    targets[0].targetShoot = true;
                    targets[0].x = targets[0].x - 30;
                    targets[0].y = targets[0].y - 30;
                }
                if (this.time2 === 85) {
                    targets = [];
                    this.time2 = 0;
                }
            }
            if (this.alienType === "boss7") {
                this.time2++;
                this.timeShoot2 = 15;
                if (this.timeShoot === this.time) {
                    shootsAlien.push(new AlienShoot(this.x + 120, this.y + this.height - 90, 8, "shootBoss10"));
                    this.time = 0;
                }
                if (this.timeShoot2 === this.time2) {
                    this.timeBossStage++;
                    if (this.timeBossStage >= 5 && this.bossStage === 1) {
                        this.bossStage = 2;
                        this.timeBossStage = 0;
                    }
                    if (this.timeBossStage >= 5 && this.bossStage === 2) {
                        this.bossStage = 1;
                        this.timeBossStage = 0;
                    }
                    if (this.bossStage === 1) {
                        shootsAlien.push(new AlienShoot(this.x, this.y + this.height - 90, 8, "shootBoss11", true));
                        shootsAlien.push(new AlienShoot(this.x + 50, this.y + this.height - 90, 8, "shootBoss11", true));
                        shootsAlien.push(new AlienShoot(this.x + 100, this.y + this.height - 90, 8, "shootBoss11", true));
                    }
                    if (this.bossStage === 2) {
                        shootsAlien.push(new AlienShoot(this.x + 180, this.y + this.height - 90, -8, "shootBoss11", true));
                        shootsAlien.push(new AlienShoot(this.x + 230, this.y + this.height - 90, -8, "shootBoss11", true));
                        shootsAlien.push(new AlienShoot(this.x + 280, this.y + this.height - 90, -8, "shootBoss11", true));
                    }
                    this.time2 = 0;
                }
            }
            if (this.alienType === "boss8") {
                this.time2++;
                this.timeShoot2 = 100;
                if (this.timeShoot === this.time) {
                    if(this.bossStage2 === 1) {
                        shootsAlien.push(new AlienShoot(this.x + 140, this.y + this.height, 8, "shootBoss13"));
                        shootsAlien.push(new AlienShoot(this.x + 280, this.y + this.height, 8, "shootBoss13"));
                        shootsAlien.push(new AlienShoot(this.x + 220, this.y + this.height - 160, 8, "shootBoss13"));
                    }
                    if(this.bossStage2 === 0 || this.bossStage2 === 2) {
                        shootsAlien.push(new AlienShoot(this.x, this.y + this.height, 8, "shootBoss13"));
                        shootsAlien.push(new AlienShoot(this.x + 140, this.y + this.height, 8, "shootBoss13"));
                        shootsAlien.push(new AlienShoot(this.x + 75, this.y + this.height - 160, 8, "shootBoss13"));
                    }
                    this.time = 0;
                }
                if (this.timeShoot2 === this.time2) {
                    this.timeBossStage++;
                    if (this.timeBossStage >= 1 && this.bossStage === 1) {
                        this.bossStage = 2;
                        this.timeBossStage = 0;
                    }
                    if (this.timeBossStage >= 1 && this.bossStage === 2) {
                        this.bossStage = 1;
                        this.timeBossStage = 0;
                    }
                    if (this.bossStage === 1) {
                        shootsAlien.push(new AlienShoot(this.x, this.y + this.height - 300, 6, "shootBoss12"));
                        setTimeout(()=> {
                            this.bossStage2 = 2;
                        }, 2000)
                    }
                    if (this.bossStage === 2) {
                        shootsAlien.push(new AlienShoot(this.x + 210, this.y + this.height - 300, 6, "shootBoss12"));
                        setTimeout(()=> {
                            this.bossStage2 = 1;
                        }, 2000)
                    }
                    this.time2 = 0;
                }
            }
            if (this.alienType === "finalBoss") {
                if (this.timeShoot === this.time) {
                    this.timeBossStage++;
                    if (this.timeBossStage >= 3 && this.bossStage === 1) {
                        this.bossStage = 2;
                        this.timeBossStage = 0;
                    }
                    if (this.timeBossStage >= 3 && this.bossStage === 2) {
                        this.bossStage = 1;
                        this.timeBossStage = 0;
                    }
                    if(this.bossStage === 1) {
                        shootsAlien.push(new AlienShoot(this.x + 40, this.y + this.height - 30, 8, "shootBoss15"));
                        shootsAlien.push(new AlienShoot(this.x + 170, this.y + this.height - 30, 8, "shootBoss15"));
                        shootsAlien.push(new AlienShoot(this.x + 300, this.y + this.height - 30, 8, "shootBoss15"));
                    }
                    if(this.bossStage === 2) {
                        shootsAlien.push(new AlienShoot(this.x + 90, this.y + this.height - 30, 8, "shootBoss15"));
                        shootsAlien.push(new AlienShoot(this.x + 250, this.y + this.height - 30, 8, "shootBoss15"));
                    }
                    this.time = 0;
                }
            }
        }
    }

}