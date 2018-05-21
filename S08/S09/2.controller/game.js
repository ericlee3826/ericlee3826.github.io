var game092;
(function (game092) {
    var Game = /** @class */ (function () {
        function Game() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
            this.rect = new RectPlayer(100, 100, 10, 10, 10, "green", 10);
            this.update = this.update.bind(this);
            this.start = this.start.bind(this);
            this.stop = this.stop.bind(this);
            this.handleKeyDown = this.handleKeyDown.bind(this);
            document.querySelector("#btnstart").addEventListener('click', this.start);
            document.querySelector("#btnstop").addEventListener('click', this.stop);
            window.addEventListener('keydown', this.handleKeyDown);
        }
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
        };
        Game.prototype.stop = function () {
            if (this.isStarted == false) {
                return;
            }
            this.isStarted = false;
            window.clearInterval(this.gameloop);
        };
        Game.prototype.update = function () {
            this.ctx.clearRect(0, 0, 800, 600);
            this.rect.update(this.keyCode);
            this.rect.draw(this.ctx);
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
            this.dx = 0;
            this.dy = 0;
        }
        RectPlayer.prototype.update = function (keyCode) {
            if (keyCode == 37) {
                this.dx = -1;
                this.dy = 0;
            }
            else if (keyCode == 38) {
                this.dy = -1;
                this.dx = 0;
            }
            else if (keyCode == 39) {
                this.dx = 1;
                this.dy = 0;
            }
            else if (keyCode == 40) {
                this.dx = 0;
                this.dy = 1;
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
    var game5 = new Game();
})(game092 || (game092 = {}));