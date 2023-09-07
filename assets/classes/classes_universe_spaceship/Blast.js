class Blast {
    constructor(x, y, width, height) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.evolutionBlast = 0;

        const blast = new Image();
        blast.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/blast_1.png";
        blast.onload = () => {
            this.b1 = blast;
        }
        const blast2 = new Image();
        blast2.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/blast_2.png";
        blast2.onload = () => {
            this.b2 = blast2;
        }
        const blast3 = new Image();
        blast3.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/blast_3.png";
        blast3.onload = () => {
            this.b3 = blast3;
        }
        const blast4 = new Image();
        blast4.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/blast_4.png";
        blast4.onload = () => {
            this.b4 = blast4;
        }
    }

    update() {
        this.draw();
    }

    draw() {
        if(this.b1 || this.b2 || this.b3 || this.b4) {
            switch (this.evolutionBlast) {
                case 1:
                    ctx.drawImage(this.b1, this.x, this.y, this.width, this.height);
                    break;
                case 2:
                    ctx.drawImage(this.b2, this.x, this.y, this.width, this.height);
                    break;
                case 3:
                    ctx.drawImage(this.b3, this.x, this.y, this.width, this.height);
                    break;
                case 4:
                    ctx.drawImage(this.b4, this.x, this.y, this.width, this.height);
                    break;
            }
        }
    }
}
