namespace circlegame {
    class myGame {
        board: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
        players: CircleComponent[];
        mainplayer: CircleComponent;
        leftbtn: HTMLButtonElement;
        rightbtn: HTMLButtonElement;
        upbtn: HTMLButtonElement;
        downbtn: HTMLButtonElement;
        constructor() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
            this.leftbtn=document.querySelector("#left");
            this.rightbtn=document.querySelector("#right");
            this.upbtn=document.querySelector("#up");
            this.downbtn=document.querySelector("#down");
        }
        public start() {
            this.players=[];
            this.mainplayer=new CircleComponent(400,0,1,1,2,"red");
            this.mainplayer.draw(this.ctx);
            // this.leftbtn.addEventListener('click',this.moveleft);
            // this.rightbtn.addEventListener('click',this.moveright);
            // this.upbtn.addEventListener('click', this.moveup);
            // this.downbtn.addEventListener('click', this.movedown);
            
            for (let i = 0; i < 5; i++) {
                this.players[i]=new CircleComponent(100,100+i*25,1,1,i*2,"navy");
                // this.players.push(this.players[i]);
                
                
            }
            window.setInterval(() => { this.update10() }, 20);
        }
        public update10() {
            this.ctx.clearRect(0,0,800,600);
            for (let i = 0; i < 5; i++) {
                
                 this.players[i].update11();
                this.players[i].draw(this.ctx);
                 if (this.mainplayer.x==this.players[i].x&&this.mainplayer.y==this.players[i].y){
                     document.querySelector("#result").innerHTML='gameover';
                     
             }
                
            }
            
            
            
        }
        public moveleft(){
            this.mainplayer.x-=1;
            this.mainplayer.draw(this.ctx);
        }
        public moveright(){
            this.mainplayer.x+=1;
            this.mainplayer.draw(this.ctx);
        }
        public moveup(){
            this.mainplayer.y+=1;
            this.mainplayer.draw(this.ctx);
        }
        public movedown(){
            this.mainplayer.y-=1;
            this.mainplayer.draw(this.ctx);
        }
    }
  
   



    class CircleComponent {
        constructor(public x: number, public y: number, public w: number, public h:number,public dx: number, public color: string) { }
        
        public update11() {
            if (this.x >= 780 || this.x <= 0) {
                this.dx *= -1;
            }
            this.x+=this.dx;
        }
        public draw(ctx: CanvasRenderingContext2D) {
            ctx.fillStyle=this.color;
            ctx.fillRect(this.x,this.y,this.w,this.h);
            
        }
    }


var game1 = new myGame();
game1.start();
}
