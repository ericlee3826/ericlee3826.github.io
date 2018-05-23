namespace game092 {
    class Game {
        board: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
        rect: RectPlayer;
        private gameloop: any;
        private isStarted: boolean;
        private keyCode: number;
        public players: RectPlayer[];
        private eightTouch: boolean;
        private zeroTouch: boolean;
        private level: number;
        constructor() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
            this.rect = new RectPlayer(40, 300, 10, 10, 0, "green", 0);
            this.update = this.update.bind(this);
            this.start=this.start.bind(this);
            this.stop=this.stop.bind(this);
            this.handleKeyDown=this.handleKeyDown.bind(this);
            this.eightTouch=false;
            this.zeroTouch=true;
            document.querySelector("#btnstart").addEventListener('click', this.start);
            document.querySelector("#btnstop").addEventListener('click', this.stop);
            this.players=[];
            this.level=1;
            for (let i = 0; i < 15; i++) {
                this.players[i]=new RectPlayer(100+i*50,1,5,5,0,"navy",(i+1)*1.1);
                
            }

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
            document.querySelector("#result").innerHTML="";
            
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
            for (let i = 0; i < this.players.length; i++) {
                this.players[i].update10();
                this.players[i].draw(this.ctx);


            }
            this.rect.draw(this.ctx);

            for (let i = 0; i < this.players.length; i++) {
                if (this.players[i].x<=this.rect.x+10&&this.players[i].x>=this.rect.x){
                    if (this.players[i].y<=this.rect.y+10&&this.players[i].y>=this.rect.y){
                        document.querySelector("#result").innerHTML="Game Over";
                        this.stop();
                    }
                }
                if (this.players[i].x+10<=this.rect.x+10&&this.players[i].x+10>=this.rect.x){
                    if (this.players[i].y<=this.rect.y+10&&this.players[i].y>=this.rect.y){
                        document.querySelector("#result").innerHTML="Game Over";
                        this.stop();
                    }
                }
                if (this.players[i].x<=this.rect.x+10&&this.players[i].x>=this.rect.x){
                    if (this.players[i].y+10<=this.rect.y+10&&this.players[i].y+10>=this.rect.y){
                        document.querySelector("#result").innerHTML="Game Over";
                        this.stop();
                    }
                }
                if (this.players[i].x+10<=this.rect.x+10&&this.players[i].x+10>=this.rect.x){
                    if (this.players[i].y+10<=this.rect.y+10&&this.players[i].y+10>=this.rect.y){
                        document.querySelector("#result").innerHTML="Game Over";
                        this.stop();
                    }
                }
                
            }

            if ((this.rect.x+10>=800)&& this.eightTouch==false){
                this.eightTouch=true;
                this.zeroTouch=false;
                for (let i = 0; i < this.players.length; i++) {
                    this.players[i].dy*=1.5;
                    
                }
                this.level+=1;
                document.querySelector("#level").innerHTML=this.level.toString();
            }
            if ((this.rect.x<=0)&& this.zeroTouch==false){
                this.eightTouch=false;
                this.zeroTouch=true;
                for (let i = 0; i < this.players.length; i++) {
                    this.players[i].dy*=1.5;
                    
                }
                this.level+=1;
                document.querySelector("#level").innerHTML=this.level.toString();
            }

        }
    }
    class RectPlayer {
        constructor(public x: number, public y: number, public w: number, public h: number, public dx: number, public color: string, public dy) {
            
         }
        public update(keyCode:number) {
            if (keyCode==37){
                this.dx=-2;
                this.dy=0;
                
            }
            else if(keyCode==38){
                this.dy=-2
                this.dx=0;
                
            }
            else if(keyCode==39){
                this.dx=2;
                this.dy=0;
                
            }
            else if(keyCode==40){
                this.dx=0;
                this.dy=2;
                
            }
             this.x+=this.dx;
             this.y+=this.dy;
            if (this.x>=800||this.x<=0){
                
            }
        }
        public update10(){
            if (this.y<=0||this.y>=600){
                this.dy*=-1;
            }
            this.y+=this.dy;
        }
        public draw(ctx: CanvasRenderingContext2D) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }

    var game5 = new Game();

}
