class PlayerShoot {
    constructor(x, y , speed, shootType = 1, max = false) {
        this.width = 8;
        this.height = 22;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.shootType = shootType;
        this.max = max;

        const shoot1 = new Image();
        shoot1.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_1_player.png";
        shoot1.onload = () => {
            this.shoot1 = shoot1;
        }
        const shoot1Max = new Image();
        shoot1Max.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_1_player_max.png";
        shoot1Max.onload = () => {
            this.shoot1Max = shoot1Max;
        }
        const shoot2 = new Image();
        shoot2.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_2_player.png";
        shoot2.onload = () => {
            this.shoot2 = shoot2;
        }
        const shoot2Max = new Image();
        shoot2Max.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_2_player_max.png";
        shoot2Max.onload = () => {
            this.shoot2Max = shoot2Max;
        }
        const shoot3 = new Image();
        shoot3.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_3_player.png";
        shoot3.onload = () => {
            this.shoot3 = shoot3;
        }
        const shoot3Max = new Image();
        shoot3Max.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_3_player_max.png";
        shoot3Max.onload = () => {
            this.shoot3Max = shoot3Max;
        }

    }

    update() {
        this.draw();
        this.shootSpeed();
    }

    draw() {
        if(this.shoot1 || this.shoot1Max || this.shoot2 || this.shoot2Max || this.shoot3 || this.shoot3Max) {
            if(this.max === false) {
                if(this.shootType === 1) {
                    ctx.drawImage(this.shoot1,this.x,this.y,this.width,this.height);
                }
                if(this.shootType === 2) {
                    ctx.drawImage(this.shoot2,this.x,this.y,this.width,this.height);
                }
                if(this.shootType === 3) {
                    this.width = 28;
                    this.height = 33;
                    ctx.drawImage(this.shoot3,this.x,this.y,this.width,this.height);
                }
            } else {
                if(this.shootType === 1) {
                    this.width = 30;
                    this.height = 43;
                    ctx.drawImage(this.shoot1Max,this.x,this.y,this.width,this.height);
                }
                if(this.shootType === 2) {
                    this.width = 30;
                    this.height = 77;
                    ctx.drawImage(this.shoot2Max,this.x,this.y,this.width,this.height);
                }
                if(this.shootType === 3) {
                    this.width = 70;
                    this.height = 70;
                    ctx.drawImage(this.shoot3Max,this.x,this.y,this.width,this.height);
                }
            }
        }
    }

    shootSpeed() {
        this.y = this.y - this.speed;
    }
}