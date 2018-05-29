var ShootingGame;
(function (ShootingGame) {
    var game = /** @class */ (function () {
        function game() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
            this.update = this.update.bind(this);
            this.start = this.start.bind(this);
            this.stop = this.stop.bind(this);
            document.querySelector("#btnstart").addEventListener('click', this.start);
            document.querySelector("#btnstop").addEventListener('click', this.stop);
            this.obstacles = [];
            this.keyDown = this.keyDown.bind(this);
            this.keyUp = this.keyUp.bind(this);
            window.addEventListener('keydown', this.keyDown);
            window.addEventListener('keyup', this.keyUp);
        }
        game.prototype.keyDown = function (ev) {
            this.keyCode = ev.keyCode;
        };
        game.prototype.keyUp = function () {
            this.keyCode = null;
        };
        game.prototype.start = function () {
            if (this.isStarted) {
                return;
            }
            this.isStarted = true;
            this.mainplayer = new Rectmain(100, 300, 40, 40, 0, "navy");
            this.obstacle = new Rectmain(700, 300, 40, 40, 3, "red");
            this.gameloop = window.setInterval(this.update, 20);
        };
        game.prototype.stop = function () {
            if (this.isStarted == false) {
                return;
            }
            this.isStarted = false;
            window.clearInterval(this.gameloop);
        };
        game.prototype.update = function () {
            this.ctx.clearRect(0, 0, 800, 600);
            this.mainplayer.movement(this.keyCode);
            this.obstacle.update();
            this.mainplayer.draw(this.ctx);
            this.obstacle.draw(this.ctx);
            if (this.keyCode == 32) {
                this.mainplayer.shoot(this.ctx);
            }
            if (this.mainplayer.y <= this.obstacle.y + 50 && this.mainplayer.y >= this.obstacle.y - 50) {
                this.obstacle.shoot(this.ctx);
            }
        };
        return game;
    }());
    var Rectmain = /** @class */ (function () {
        function Rectmain(x, y, w, h, dy, color) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.dy = dy;
            this.color = color;
            this.movebullet.bind(this);
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext('2d');
        }
        Rectmain.prototype.update = function () {
            if (this.y <= 0 || this.y >= 560) {
                this.dy *= -1;
            }
            this.y += this.dy;
        };
        Rectmain.prototype.movement = function (code) {
            if (code == 38) {
                this.dy = -2;
            }
            else if (code == 40) {
                this.dy = 2;
            }
            else {
                this.dy = 0;
            }
            this.y += this.dy;
        };
        Rectmain.prototype.draw = function (ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        };
        Rectmain.prototype.shoot = function (ctx) {
            this.bullet = new Rectmain(100, this.y, 5, 5, 3, "black");
            window.setInterval(this.movebullet, 20);
        };
        Rectmain.prototype.movebullet = function () {
            this.bullet.x++;
            this.bullet.draw(this.ctx);
        };
        return Rectmain;
    }());
    var mygame = new game();
})(ShootingGame || (ShootingGame = {}));
//# sourceMappingURL=sgame.js.map