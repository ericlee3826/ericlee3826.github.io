var MyGame = /** @class */ (function () {
    function MyGame() {
        this.board = document.querySelector("#board");
        this.ctx = this.board.getContext("2d");
    }
    MyGame.prototype.start = function () {
        var _this = this;
        this.players = [];
        for (var i = 0; i < 10; i++) {
            var p = new RectComponent(0, 100 + i * 50, 30, 30, "blue");
            p.dx = i * 2;
            this.players.push(p);
        }
        window.setInterval(function () { _this.update(); }, 20);
    };
    MyGame.prototype.update = function () {
        this.ctx.clearRect(0, 0, this.board.width, this.board.height);
        for (var i = 0; i < this.players.length; i++) {
            var element = this.players[i];
            this.players[i].update();
            this.players[i].draw(this.ctx);
        }
    };
    return MyGame;
}());
var RectComponent = /** @class */ (function () {
    function RectComponent(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = c;
    }
    RectComponent.prototype.update = function () {
        if (this.x > 780 || this.x < 0) {
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
//# sourceMappingURL=game.js.map