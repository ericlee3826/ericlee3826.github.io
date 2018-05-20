namespace circlegame1 {
    class Game {
        board: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
        circles: circlecomponent[];
        player:circlecomponent;
        constructor() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
            this.circles = [];
            this.player=new circlecomponent(1,300,5,0,360,1,"navy",0);
        }
        public start() {
            
            for (let i = 1; i < 1000; i++) {
                this.circles[i] = new circlecomponent(100, 50 + i * 50, 10, 0, Math.PI * 2, i * (Math.random()*10), "magenta", i * (Math.random()*10));
            }
            window.setInterval(() => { this.update20() }, 20);
            
            
        }
        public update20() {
            this.ctx.clearRect(0, 0, 800, 600);
            for (let i = 1; i < this.circles.length + 1; i++) {
                this.circles[i].update30();
                this.circles[i].draw(this.ctx);

            }
            this.player.update40();
            this.player.draw(this.ctx);
            
        }
        
    }
    class circlecomponent {
        constructor(public x: number, public y: number, public r: number, public sa: number, public ea: number, public dx: number, public color: string, public dy: number) { }
        public update30() {
            if (this.x >= 790 || this.x <= 0) {
                this.dx *= -1;
            }
            if (this.y >= 590 || this.y <= 0) {
                this.dy *= -1;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
        public update40(){
            if (this.x>=790||this.x<=0){
                this.dx*=-1;
            }
            this.x+=this.dx;

        }
        public draw(ctx: CanvasRenderingContext2D) {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.r, this.sa, this.ea);
            ctx.fill();
        }
        
    }
    var mgame = new Game();
    mgame.start();
}