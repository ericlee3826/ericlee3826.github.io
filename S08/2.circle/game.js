var circlegame;
(function (circlegame) {
    var myGame = /** @class */ (function () {
        function myGame() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
            this.leftbtn = document.querySelector("#left");
            this.rightbtn = document.querySelector("#right");
            this.upbtn = document.querySelector("#up");
            this.downbtn = document.querySelector("#down");
        }
        myGame.prototype.start = function () {
            var _this = this;
            this.players = [];
            this.mainplayer = new CircleComponent(400, 0, 1, 1, 2, "red");
            this.mainplayer.draw(this.ctx);
            // this.leftbtn.addEventListener('click',this.moveleft);
            // this.rightbtn.addEventListener('click',this.moveright);
            // this.upbtn.addEventListener('click', this.moveup);
            // this.downbtn.addEventListener('click', this.movedown);
            for (var i = 0; i < 5; i++) {
                this.players[i] = new CircleComponent(100, 100 + i * 25, 1, 1, i * 2, "navy");
                // this.players.push(this.players[i]);
            }
            window.setInterval(function () { _this.update10(); }, 20);
        };
        myGame.prototype.update10 = function () {
            this.ctx.clearRect(0, 0, 800, 600);
            for (var i = 0; i < 5; i++) {
                this.players[i].update11();
                this.players[i].draw(this.ctx);
                if (this.mainplayer.x == this.players[i].x && this.mainplayer.y == this.players[i].y) {
                    document.querySelector("#result").innerHTML = 'gameover';
                }
            }
        };
        myGame.prototype.moveleft = function () {
            this.mainplayer.x -= 1;
            this.mainplayer.draw(this.ctx);
        };
        myGame.prototype.moveright = function () {
            this.mainplayer.x += 1;
            this.mainplayer.draw(this.ctx);
        };
        myGame.prototype.moveup = function () {
            this.mainplayer.y += 1;
            this.mainplayer.draw(this.ctx);
        };
        myGame.prototype.movedown = function () {
            this.mainplayer.y -= 1;
            this.mainplayer.draw(this.ctx);
        };
        return myGame;
    }());
    var CircleComponent = /** @class */ (function () {
        function CircleComponent(x, y, w, h, dx, color) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.dx = dx;
            this.color = color;
        }
        CircleComponent.prototype.update11 = function () {
            if (this.x >= 780 || this.x <= 0) {
                this.dx *= -1;
            }
            this.x += this.dx;
        };
        CircleComponent.prototype.draw = function (ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        };
        return CircleComponent;
    }());
    var game1 = new myGame();
    game1.start();
})(circlegame || (circlegame = {}));
//# sourceMappingURL=game.js.map