namespace rectGame {
    class Game {
        board: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
        rect: RectPlayer;
        private gameloop: any;
        private isStarted: boolean;
        constructor() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
            this.rect = new RectPlayer(100, 100, 10, 10, 10, "green", 10);
            this.update = this.update.bind(this);
            this.start=this.start.bind(this);
            this.stop=this.stop.bind(this);
            document.querySelector("#btnstart").addEventListener('click', this.start);
            document.querySelector("#btnstop").addEventListener('click', this.stop);
        }
        public start() {
            if (this.isStarted){
                return;
            }
            this.isStarted=true;
            this.gameloop=window.setInterval(this.update, 20);
        }
        public stop() {
            if (this.isStarted==false){
                return;
            }
            this.isStarted=false;
            window.clearInterval(this.gameloop);
        }
        public update() {
            this.ctx.clearRect(0, 0, 800, 600);
            this.rect.update();
            this.rect.draw(this.ctx);
        }
    }
    class RectPlayer {
        constructor(public x: number, public y: number, public w: number, public h: number, public dx: number, public color: string, public dy) { }
        public update() {
            if (this.x >= 790 || this.x <= 0) {
                this.dx *= -1;
            }
            if (this.y <= 0 || this.y >= 600) {
                this.dy *= -1;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
        public draw(ctx: CanvasRenderingContext2D) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }

    var game5 = new Game();

}
