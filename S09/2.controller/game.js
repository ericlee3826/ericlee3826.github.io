var game092;
(function (game092) {
    var Game = /** @class */ (function () {
        function Game() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
            this.rect = new SpaceshipComponent(40, 300, 30, 30, 0, 0);
            this.update = this.update.bind(this);
            this.start = this.start.bind(this);
            this.stop = this.stop.bind(this);
            this.handleKeyDown = this.handleKeyDown.bind(this);
            this.eightTouch = false;
            this.zeroTouch = true;
            document.querySelector("#btnstart").addEventListener('click', this.start);
            document.querySelector("#btnstop").addEventListener('click', this.stop);
            this.players = [];
            this.level = 1;
            this.handleKeyUp = this.handleKeyUp.bind(this);
            document.querySelector("#level").innerHTML = this.level.toString();
            for (var i = 0; i < 14; i++) {
                this.players[i] = new AsteroidComponent(100 + i * 50, 1, 15, 15, (i + 1) * 1.1, 0);
            }
            window.addEventListener('keydown', this.handleKeyDown);
            window.addEventListener('keyup', this.handleKeyUp);
        }
        Game.prototype.handleKeyUp = function () {
            this.keyCode = null;
        };
        Game.prototype.handleKeyDown = function (ev) {
            this.keyCode = ev.keyCode;
            console.log(ev.keyCode);
        };
        Game.prototype.start = function () {
            if (this.isStarted) {
                return;
            }
            this.isStarted = true;
            this.gameloop = window.setInterval(this.update, 20);
            document.querySelector("#result").innerHTML = "";
        };
        Game.prototype.stop = function () {
            if (this.isStarted == false) {
                return;
            }
            this.isStarted = false;
            window.clearInterval(this.gameloop);
        };
        Game.prototype.update = function () {
            this.ctx.clearRect(0, 0, 850, 600);
            this.rect.update(this.keyCode);
            for (var i = 0; i < this.players.length; i++) {
                this.players[i].update10();
                this.players[i].draw(this.ctx);
            }
            this.rect.draw(this.ctx);
            for (var i = 0; i < this.players.length; i++) {
                if (this.players[i].x <= this.rect.x + 10 && this.players[i].x >= this.rect.x) {
                    if (this.players[i].y <= this.rect.y + 10 && this.players[i].y >= this.rect.y) {
                        document.querySelector("#result").innerHTML = "Game Over";
                        this.stop();
                    }
                }
                if (this.players[i].x + 10 <= this.rect.x + 10 && this.players[i].x + 10 >= this.rect.x) {
                    if (this.players[i].y <= this.rect.y + 10 && this.players[i].y >= this.rect.y) {
                        document.querySelector("#result").innerHTML = "Game Over";
                        this.stop();
                    }
                }
                if (this.players[i].x <= this.rect.x + 10 && this.players[i].x >= this.rect.x) {
                    if (this.players[i].y + 10 <= this.rect.y + 10 && this.players[i].y + 10 >= this.rect.y) {
                        document.querySelector("#result").innerHTML = "Game Over";
                        this.stop();
                    }
                }
                if (this.players[i].x + 10 <= this.rect.x + 10 && this.players[i].x + 10 >= this.rect.x) {
                    if (this.players[i].y + 10 <= this.rect.y + 10 && this.players[i].y + 10 >= this.rect.y) {
                        document.querySelector("#result").innerHTML = "Game Over";
                        this.stop();
                    }
                }
            }
            if ((this.rect.x + 10 >= 800)) {
                this.eightTouch = true;
                this.zeroTouch = false;
                this.rect.x = 40;
                this.level += 1;
                for (var i = 0; i < this.players.length; i++) {
                    this.players[i].dy *= 1.7;
                }
                document.querySelector("#level").innerHTML = this.level.toString();
            }
            // if ((this.rect.x<=0)&& this.zeroTouch==false){
            //     this.eightTouch=false;
            //     this.zeroTouch=true;
            //     for (let i = 0; i < this.players.length; i++) {
            //         this.players[i].dy*=1.5;
            //     }
            //     this.level+=1;
            //     document.querySelector("#level").innerHTML=this.level.toString();
            // }
            if (this.level == 3) {
                for (var i = 0; i < this.players.length; i++) {
                    this.players[i].dx = this.players[i].dy;
                }
            }
        };
        return Game;
    }());
    var RectPlayer = /** @class */ (function () {
        function RectPlayer(x, y, w, h, dx, color, dy) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.dx = dx;
            this.color = color;
            this.dy = dy;
        }
        RectPlayer.prototype.update = function (keyCode) {
            if (keyCode == 37) {
                this.dx = -2;
                this.dy = 0;
            }
            else if (keyCode == 38) {
                this.dy = -2;
                this.dx = 0;
            }
            else if (keyCode == 39) {
                this.dx = 2;
                this.dy = 0;
            }
            else if (keyCode == 40) {
                this.dx = 0;
                this.dy = 2;
            }
            this.x += this.dx;
            this.y += this.dy;
            if (this.x >= 800 || this.x <= 0) {
            }
        };
        RectPlayer.prototype.update10 = function () {
            if (this.y <= 0 || this.y >= 600) {
                this.dy *= -1;
            }
            if (this.x <= 0 || this.x >= 800) {
                this.dx *= -1;
            }
            this.x += this.dx;
            this.y += this.dy;
        };
        RectPlayer.prototype.draw = function (ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        };
        return RectPlayer;
    }());
    var SpaceshipComponent = /** @class */ (function () {
        function SpaceshipComponent(x, y, w, h, dy, dx) {
            var _this = this;
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.dy = dy;
            this.dx = dx;
            var image = new Image(w, h);
            image.src = "spaceship1.png";
            image.addEventListener('load', function () { _this.loadedImage = image; });
        }
        SpaceshipComponent.prototype.update = function (keyCode) {
            if (keyCode == 38) {
                this.dy = -3;
                this.dx = 0;
            }
            else if (keyCode == 40) {
                this.dy = 3;
                this.dx = 0;
            }
            else if (keyCode == 37) {
                this.dx = -3;
                this.dy = 0;
            }
            else if (keyCode == 39) {
                this.dx = 3;
                this.dy = 0;
            }
            else {
                this.dy = 0;
                this.dx = 0;
            }
            this.y += this.dy;
            this.x += this.dx;
        };
        SpaceshipComponent.prototype.draw = function (ctx) {
            if (this.loadedImage) {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(Math.PI / 2);
                ctx.drawImage(this.loadedImage, this.w / -2, this.h / -2, this.w, this.h);
                ctx.restore();
            }
        };
        return SpaceshipComponent;
    }());
    var AsteroidComponent = /** @class */ (function () {
        function AsteroidComponent(x, y, w, h, dy, dx) {
            var _this = this;
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.dy = dy;
            this.dx = dx;
            var image = new Image(w, h);
            image.src = "asteroid.png";
            image.addEventListener('load', function () { _this.loadedImage = image; });
        }
        AsteroidComponent.prototype.update10 = function () {
            if (this.y <= 0 || this.y >= 600) {
                this.dy *= -1;
            }
            if (this.x <= 0 || this.x >= 800) {
                this.dx *= -1;
            }
            this.x += this.dx;
            this.y += this.dy;
        };
        AsteroidComponent.prototype.draw = function (ctx) {
            if (this.loadedImage) {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(Math.PI / 2);
                ctx.drawImage(this.loadedImage, this.w / -2, this.h / -2, this.w, this.h);
                ctx.restore();
            }
        };
        return AsteroidComponent;
    }());
    var game5 = new Game();
})(game092 || (game092 = {}));
//# sourceMappingURL=game.js.map