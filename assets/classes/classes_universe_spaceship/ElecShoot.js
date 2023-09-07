class ElecShoot {
    constructor(x, y, velocity) {
        this.width = 45;
        this.height = 168;
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.speed = 2.5;

        const elec = new Image();
        elec.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/shoot_14_boss.png";
        elec.onload = () => {
            this.elec = elec;
        }
    }

    update() {
        this.draw();
        this.move();
    }

    draw() {
        if(this.elec) {
            ctx.drawImage(this.elec, this.x, this.y, this.width, this.height);
        }
    }

    move() {
        if(this.velocity === "left") {
            this.x = this.x - this.speed;
        }
        if(this.velocity === "right") {
            this.x = this.x + this.speed;
        }
        if(this.x + this.width <= 45) {
            this.velocity = "right";
        }
        if(this.x + this.width >= 360) {
            this.velocity = "left";
        }
    }
}