namespace game2 {
    class MyGame {
        public board: HTMLCanvasElement;
        public ctx: CanvasRenderingContext2D;
        public player: RectComponent;
        constructor() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
        }
        public start() {
            this.player = new RectComponent(100, 100, 30, 30, 3, "navy");
            

            window.setInterval(() => { this.update(); }, 20);
        }

        public update() {
            this.ctx.clearRect(0,0,800,600);
            this.player.update();
            this.player.draw(this.ctx);
        }
    }
    class RectComponent {

        constructor(public x: number, public y: number, public w: number, public h: number, public dx: number, public color: string) {

        }
        public update() {
            if(this.x>=780||this.x<=0){
                this.dx*=-1;
            }
            this.x += this.dx;
        }
        public draw(ctx: CanvasRenderingContext2D) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }

    var game = new MyGame();
    game.start();
}