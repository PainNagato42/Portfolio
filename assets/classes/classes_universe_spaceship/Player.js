class Player {
    constructor(spaceship, life, damage, timeShoot) {
        this.width = 45;
        this.height = 46;
        this.x = 165;
        this.y = 500;
        this.spaceship = spaceship;
        this.life = life;
        this.damage = damage;
        this.power = 1;
        this.time = 0;
        this.timeShoot = timeShoot;
        this.levelShoot = 1;
        this.fire = true;

        const player = new Image();
        player.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/player.png";
        player.onload = () => {
            this.player = player;
        }
        const player2 = new Image();
        player2.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/player2.png";
        player2.onload = () => {
            this.player2 = player2;
        }
        const player3 = new Image();
        player3.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/player3.png";
        player3.onload = () => {
            this.player3 = player3;
        }
        const aura = new Image();
        aura.src = "https://PainNagato42.github.io/Portfolio/assets/img/img_universe_spaceship/invincibility_aura.png";
        aura.onload = () => {
            this.aura = aura;
            this.widthAura = 80;
            this.heightAura = 80;
        }
    }

    update() {
        this.draw();
        this.direction();
        this.shoot();
    }

    draw() {
        if (this.player || this.player2 || this.player3) {
            switch (this.spaceship) {
                case 1:
                    ctx.drawImage(this.player, this.x, this.y, this.width, this.height);
                    break;
                case 2:
                    ctx.drawImage(this.player2, this.x, this.y, this.width, this.height);
                    break;
                case 3:
                    ctx.drawImage(this.player3, this.x, this.y, this.width, this.height);
                    break;

            }

        }
        if(invincibility === true) {
            if(this.aura) {
                ctx.drawImage(this.aura, this.x - 18, this.y - 18, this.widthAura, this.heightAura);
            }
        }
    }

    direction() {
        if(window.screen.width > 1180) {
            containGame.addEventListener("mousemove", (e) => {
                let posX = ((e.clientX) - (canvas.getBoundingClientRect().x - 4)) - this.width / 2;
                let posY = ((e.clientY) - (canvas.getBoundingClientRect().y - 4)) - this.height / 2;
                containGame.style.cursor = "initial";
                if((this.x < posX + this.width && this.x > posX - this.width) && (this.y < posY + this.height && this.y > posY - this.height)) {
                        this.x = posX;
                        this.y = posY;
                        containGame.style.cursor = "none";
                    }
                    if (this.x + this.width > 360) {
                        this.x = 360 - this.width;
                    } else if (this.x < 0) {
                        this.x = 0;
                    } else if (this.y + this.height > 600) {
                        this.y = 600 - this.height;
                    } else if (this.y < 0) {
                        this.y = 0;
                    }
            })
        } else {
            containGame.addEventListener("touchmove", (e) => {
                if((this.x < e.touches[0].clientX + this.width - 40 && this.x > e.touches[0].clientX - this.width - 20) && (this.y < e.touches[0].clientY + this.height - 50 && this.y > e.touches[0].clientY - this.height - 50)) {
                    this.x = ((e.touches[0].clientX) - (canvas.getBoundingClientRect().x - 4)) - this.width / 2;
                    this.y = ((e.touches[0].clientY) - (canvas.getBoundingClientRect().y - 4)) - this.height / 2;
                }
                if (this.x + this.width > 360) {
                    this.x = 360 - this.width;
                } else if (this.x < 0) {
                    this.x = 0;
                } else if (this.y + this.height > 600) {
                    this.y = 600 - this.height;
                } else if (this.y < 0) {
                    this.y = 0;
                }
            })
        }
    }

    shoot() {
        if (this.fire === true) {
            this.time++;
            if (this.time === this.timeShoot) {
                if (this.spaceship === 1) {
                    switch (this.power) {
                        case 1:
                            shootsPlayer.push(new PlayerShoot(P.x + 18, P.y - 10, 14));
                            break;
                        case 2:
                            shootsPlayer.push(new PlayerShoot(P.x + 10, P.y - 10, 14));
                            shootsPlayer.push(new PlayerShoot(P.x + 26, P.y - 10, 14));
                            break;
                        case 3:
                            this.damage = 6;
                            shootsPlayer.push(new PlayerShoot(P.x + 7, P.y - 10, 14, 1, true));
                            break;

                    }
                }
                if (this.spaceship === 2) {
                    switch (this.power) {
                        case 1:
                            shootsPlayer.push(new PlayerShoot(P.x + 18, P.y - 10, 24, 2));
                            break;
                        case 2:
                            shootsPlayer.push(new PlayerShoot(P.x + 14, P.y - 10, 24, 2));
                            shootsPlayer.push(new PlayerShoot(P.x + 30, P.y - 10, 24, 2));
                            break;
                        case 3:
                            this.damage = 4;
                            shootsPlayer.push(new PlayerShoot(P.x + 7, P.y - 50, 24, 2, true));
                            break;

                    }
                }
                if (this.spaceship === 3) {
                    switch (this.power) {
                        case 1:
                            shootsPlayer.push(new PlayerShoot(P.x + 10, P.y - 23, 5, 3));
                            break;
                        case 2:
                            shootsPlayer.push(new PlayerShoot(P.x - 5, P.y - 23, 5, 3));
                            shootsPlayer.push(new PlayerShoot(P.x + 25, P.y - 23, 5, 3));
                            break;
                        case 3:
                            this.damage = 8;
                            shootsPlayer.push(new PlayerShoot(P.x - 10, P.y - 60, 5, 3, true));
                            break;

                    }
                }

                this.time = 0;
            }
        }
    }
}