var ShootingGame;
(function (ShootingGame) {
    var game = /** @class */ (function () {
        function game() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
            this.stop = this.stop.bind(this);
            this.start = this.start.bind(this);
            this.update = this.update.bind(this);
            document.querySelector("#btnstart").addEventListener('click', this.start);
            document.querySelector("#btnstop").addEventListener('click', this.stop);
            window.addEventListener('keydown', this.keydown);
        }
        game.prototype.keydown = function (ev) {
            this.keyCode = ev.keyCode;
        };
        game.prototype.start = function () {
            if (this.isStarted) {
                return;
            }
            this.isStarted = true;
            this.mainplayer = new Rectmain(100, 300, 40, 40, 0);
            window.setInterval(this.update, 20);
        };
        game.prototype.stop = function () {
            if (this.isStarted == false) {
                return;
            }
            this.isStarted = false;
        };
        game.prototype.update = function () {
        };
        return game;
    }());
    var Rectmain = /** @class */ (function () {
        function Rectmain(x, y, w, h, dy) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.dy = dy;
        }
        return Rectmain;
    }());
    var mygame = new game();
})(ShootingGame || (ShootingGame = {}));
//# sourceMappingURL=sgame.js.map