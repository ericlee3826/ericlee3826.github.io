var rectGame;
(function (rectGame) {
    var Game = /** @class */ (function () {
        function Game() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
            this.update = this.update.bind(this);
            this.start = this.start.bind(this);
            this.stop = this.stop.bind(this);
            this.handleKeydown = this.handleKeydown.bind(this);
            this.handleKeyup = this.handleKeyup.bind(this);
            document.querySelector("#btnstart").addEventListener('click', this.start);
            document.querySelector("#btnstop").addEventListener('click', this.stop);
            window.addEventListener('keydown', this.handleKeydown);
            window.addEventListener("keyup", this.handleKeyup);
        }
        Game.prototype.start = function () {
            if (this.isStarted) {
                return;
            }
            this.isStarted = true;
            // this.rect=new RectPlayer(10,10,10,10,0,'green',0);
            this.spaceship = new SpaceshipComponent(30, 100, 50, 50, 0);
            this.obstacle = new ObstacleComponent(800, 40, 3, "green");
            this.gameloop = window.setInterval(this.update, 20);
        };
        Game.prototype.stop = function () {
            if (this.isStarted == false) {
                return;
            }
            this.isStarted = false;
            window.clearInterval(this.gameloop);
        };
        Game.prototype.handleKeydown = function (ev) {
            this.keyCode = ev.keyCode;
        };
        Game.prototype.handleKeyup = function (ev) {
            this.keyCode = null;
        };
        Game.prototype.update = function () {
            this.ctx.clearRect(0, 0, 800, 600);
            // this.rect.update(this.keyCode);
            // this.rect.draw(this.ctx);
            this.spaceship.update(this.keyCode);
            this.spaceship.draw(this.ctx);
            this.obstacle.update();
            this.obstacle.draw(this.ctx);
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
            if (keyCode == 38) {
                this.dy = -20;
            }
            else if (keyCode == 40) {
                this.dy = 20;
            }
            else {
                this.dy = 0;
            }
            this.y += this.dy;
        };
        RectPlayer.prototype.draw = function (ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        };
        return RectPlayer;
    }());
    var ObstacleComponent = /** @class */ (function () {
        function ObstacleComponent(x, w, dx, color) {
            this.x = x;
            this.w = w;
            this.dx = dx;
            this.color = color;
            this.initBars();
        }
        ObstacleComponent.prototype.initBars = function () {
            this.barH = Math.floor(Math.random() * 200) + 100;
            this.gapH = Math.floor(Math.random() * 200) + 100;
        };
        ObstacleComponent.prototype.update = function () {
            this.x -= this.dx;
            if (this.x <= -40) {
                this.x = 800;
                this.initBars();
            }
        };
        ObstacleComponent.prototype.draw = function (ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, 0, this.w, this.barH);
            ctx.fillRect(this.x, this.barH + this.gapH, this.w, 600 - this.barH - this.gapH);
        };
        return ObstacleComponent;
    }());
    var SpaceshipComponent = /** @class */ (function () {
        function SpaceshipComponent(x, y, w, h, dy) {
            var _this = this;
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.dy = dy;
            var image = new Image(w, h);
            image.src = "spaceship1.png";
            image.addEventListener('load', function () { _this.loadedImage = image; });
        }
        SpaceshipComponent.prototype.update = function (keyCode) {
            if (keyCode == 38) {
                this.dy = -5;
            }
            else if (keyCode == 40) {
                this.dy = 5;
            }
            else {
                this.dy = 0;
            }
            this.y += this.dy;
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
    var game5 = new Game();
})(rectGame || (rectGame = {}));
//# sourceMappingURL=game.js.map