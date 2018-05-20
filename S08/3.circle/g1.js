var circlegame1;
(function (circlegame1) {
    var Game = /** @class */ (function () {
        function Game() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
            this.circles = [];
            this.player = new circlecomponent(1, 300, 5, 0, 360, 1, "navy", 0);
        }
        Game.prototype.start = function () {
            var _this = this;
            for (var i = 1; i < 1000; i++) {
                this.circles[i] = new circlecomponent(100, 50 + i * 50, 10, 0, Math.PI * 2, i * (Math.random() * 10), "magenta", i * (Math.random() * 10));
            }
            window.setInterval(function () { _this.update20(); }, 20);
        };
        Game.prototype.update20 = function () {
            this.ctx.clearRect(0, 0, 800, 600);
            for (var i = 1; i < this.circles.length + 1; i++) {
                this.circles[i].update30();
                this.circles[i].draw(this.ctx);
            }
            this.player.update40();
            this.player.draw(this.ctx);
        };
        return Game;
    }());
    var circlecomponent = /** @class */ (function () {
        function circlecomponent(x, y, r, sa, ea, dx, color, dy) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.sa = sa;
            this.ea = ea;
            this.dx = dx;
            this.color = color;
            this.dy = dy;
        }
        circlecomponent.prototype.update30 = function () {
            if (this.x >= 790 || this.x <= 0) {
                this.dx *= -1;
            }
            if (this.y >= 590 || this.y <= 0) {
                this.dy *= -1;
            }
            this.x += this.dx;
            this.y += this.dy;
        };
        circlecomponent.prototype.update40 = function () {
            if (this.x >= 790 || this.x <= 0) {
                this.dx *= -1;
            }
            this.x += this.dx;
        };
        circlecomponent.prototype.draw = function (ctx) {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.r, this.sa, this.ea);
            ctx.fill();
        };
        return circlecomponent;
    }());
    var mgame = new Game();
    mgame.start();
})(circlegame1 || (circlegame1 = {}));
