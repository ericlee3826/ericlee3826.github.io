var myGame = /** @class */ (function () {
    function myGame() {
        this.board = document.querySelector("#board");
        this.ctx = this.board.getContext("2d");
    }
    myGame.prototype.start = function () {
        var _this = this;
        this.players = [];
        for (var i = 1; i <= 10; i++) {
            var element = new Rectangle(1, 100 + i * 50, 20, 20, "blue");
            element.dx = i * 2;
            this.players.push(element);
        }
        window.setInterval(function () { _this.update5(); }, 20);
    };
    myGame.prototype.update5 = function () {
        this.ctx.clearRect(0, 0, this.board.width, this.board.height);
        for (var i = 0; i < 10; i++) {
            var element = this.players[i];
            this.players[i].update();
            this.players[i].draw(this.ctx);
        }
    };
    return myGame;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.color = c;
    }
    Rectangle.prototype.draw = function (ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    Rectangle.prototype.update = function () {
        if (this.x >= 800 || this.x <= 0) {
            this.dx *= -1;
        }
        this.x += this.dx;
    };
    return Rectangle;
}());
var g = new myGame();
g.start();
