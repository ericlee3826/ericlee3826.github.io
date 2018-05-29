namespace ShootingGame{
    class game{
        board: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
        mainplayer: Rectmain;
        obstacles: Rectmain[];
        private gameloop: any;
        private isStarted: boolean;
        private keyCode: number;
        obstacle: Rectmain;

        constructor() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
            this.update=this.update.bind(this);
            this.start=this.start.bind(this);
            this.stop=this.stop.bind(this);
            document.querySelector("#btnstart").addEventListener('click', this.start);         
            document.querySelector("#btnstop").addEventListener('click', this.stop);
            this.obstacles=[];
            this.keyDown=this.keyDown.bind(this);
            this.keyUp=this.keyUp.bind(this);
            window.addEventListener('keydown',this.keyDown);
            window.addEventListener('keyup',this.keyUp);            
                
        }
        public keyDown(ev: KeyboardEvent){
            this.keyCode=ev.keyCode;
        }
        public keyUp(){
            this.keyCode=null;
        }
        
        public start(){
            if (this.isStarted){
                return;
            }
            this.isStarted=true;
            this.mainplayer=new Rectmain(100,300,40,40,0,"navy");
            this.obstacle=new Rectmain(700,300,40,40,3,"red");
            this.gameloop=window.setInterval(this.update,20);

        }
        public stop(){
            if (this.isStarted==false){
                return;
            }
            this.isStarted=false;
            window.clearInterval(this.gameloop);
        }
        public update(){
            this.ctx.clearRect(0,0,800,600);
            this.mainplayer.movement(this.keyCode);
            this.obstacle.update();
            this.mainplayer.draw(this.ctx);
            this.obstacle.draw(this.ctx);
            if (this.keyCode==32){
                this.mainplayer.shoot(this.ctx);
            }
            if (this.mainplayer.y<=this.obstacle.y+50&&this.mainplayer.y>=this.obstacle.y-50){
                this.obstacle.shoot(this.ctx);
            }
            
        }
    }
    class Rectmain{
        bulletx: number;
        bullet: Rectmain;
        board: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
        constructor(public x, public y, public w, public h, public dy, public color){
            this.movebullet.bind(this);
            this.board=document.querySelector("#board");
            this.ctx=this.board.getContext('2d');
        }
        public update(){
            if (this.y<=0||this.y>=560){
                this.dy*=-1;
            }
            this.y+=this.dy;
        }
        public movement(code: number){
            if (code==38){
                this.dy=-2;
            }
            else if(code==40){
                this.dy=2;
            }
            else{
                this.dy=0;
            }
         
            this.y+=this.dy;
        }
        public draw(ctx: CanvasRenderingContext2D){
            ctx.fillStyle=this.color;
            ctx.fillRect(this.x,this.y,this.w,this.h);
        }
        public shoot(ctx: CanvasRenderingContext2D){
            this.bullet=new Rectmain(100,this.y,5,5,3,"black");
            window.setInterval(this.movebullet,20);
        }
        public movebullet(){
            this.bullet.x++;
            this.bullet.draw(this.ctx);
        }
        
    }
    var mygame=new game();
}

