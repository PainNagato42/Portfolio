class Target {
    constructor(x, y) {
        this.width = 32;
        this.height = 32;
        this.x = x;
        this.y = y;
        this.targetShoot = false;

        const target = new Image();
        target.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/target_boss.png";
        target.onload = () => {
            this.target = target;
        }
        const shoot = new Image();
        shoot.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_8_boss.png";
        shoot.onload = () => {
            this.shoot = shoot;
        }
    }

    update() {
        this.draw();
    }

    draw() {
        if(this.target || this.shoot) {
            switch (this.targetShoot) {
                case false:
                    ctx.drawImage(this.target, this.x, this.y, this.width, this.height);
                    break;
                case true:
                    this.width = 88;
                    this.height = 83;
                    ctx.drawImage(this.shoot, this.x, this.y, this.width, this.height);
                    break;
            }
        }
    }
}