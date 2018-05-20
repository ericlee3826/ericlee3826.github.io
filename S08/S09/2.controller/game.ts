namespace game092 {
    class Game {
        board: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
        rect: RectPlayer;
        private gameloop: any;
        private isStarted: boolean;
        private keyCode: number;
        constructor() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
            this.rect = new RectPlayer(100, 100, 10, 10, 10, "green", 10);
            this.update = this.update.bind(this);
            this.start=this.start.bind(this);
            this.stop=this.stop.bind(this);
            this.handleKeyDown=this.handleKeyDown.bind(this);
            document.querySelector("#btnstart").addEventListener('click', this.start);
            document.querySelector("#btnstop").addEventListener('click', this.stop);

            window.addEventListener('keydown', this.handleKeyDown);
        }
        public handleKeyDown(ev: KeyboardEvent){
            this.keyCode=ev.keyCode;
            console.log(ev.keyCode);
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
            this.rect.update(this.keyCode);
            this.rect.draw(this.ctx);
        }
    }
    class RectPlayer {
        constructor(public x: number, public y: number, public w: number, public h: number, public dx: number, public color: string, public dy) {
            this.dx=0;
            this.dy=0;
         }
        public update(keyCode:number) {
            if (keyCode==37){
                this.dx=-1;
                this.dy=0;
                
            }
            else if(keyCode==38){
                this.dy=-1
                this.dx=0;
                
            }
            else if(keyCode==39){
                this.dx=1;
                this.dy=0;
                
            }
            else if(keyCode==40){
                this.dx=0;
                this.dy=1;
                
            }
             this.x+=this.dx;
             this.y+=this.dy;
            
        }
        public draw(ctx: CanvasRenderingContext2D) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }

    var game5 = new Game();

}
