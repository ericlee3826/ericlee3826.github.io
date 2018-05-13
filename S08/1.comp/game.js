var game2;
(function (game2) {
    var MyGame = /** @class */ (function () {
        function MyGame() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
        }
        MyGame.prototype.start = function () {
            var _this = this;
            this.player = new RectComponent(100, 100, 30, 30, 3, "navy");
            window.setInterval(function () { _this.update(); }, 20);
        };
        MyGame.prototype.update = function () {
            this.ctx.clearRect(0, 0, 800, 600);
            this.player.update();
            this.player.draw(this.ctx);
        };
        return MyGame;
    }());
    var RectComponent = /** @class */ (function () {
        function RectComponent(x, y, w, h, dx, color) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.dx = dx;
            this.color = color;
        }
        RectComponent.prototype.update = function () {
            if (this.x >= 780 || this.x <= 0) {
                this.dx *= -1;
            }
            this.x += this.dx;
        };
        RectComponent.prototype.draw = function (ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        };
        return RectComponent;
    }());
    var game = new MyGame();
    game.start();
})(game2 || (game2 = {}));
