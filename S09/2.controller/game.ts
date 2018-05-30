namespace game092 {
    class Game {
        board: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
        rect: SpaceshipComponent;
        private gameloop: any;
        private isStarted: boolean;
        private keyCode: number;
        public players: AsteroidComponent[];
        private eightTouch: boolean;
        private zeroTouch: boolean;
        private level: number;
        constructor() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
            this.rect = new SpaceshipComponent(40, 300, 30, 30, 0, 0);
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
            this.handleKeyUp=this.handleKeyUp.bind(this);
            document.querySelector("#level").innerHTML=this.level.toString();
            for (let i = 0; i < 14; i++) {
                this.players[i]=new AsteroidComponent(100+i*50,1,15,15,(i+1)*1.1,0);
                
            }

            window.addEventListener('keydown', this.handleKeyDown);
            window.addEventListener('keyup', this.handleKeyUp);

        }
        public handleKeyUp(){
            this.keyCode=null;
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
            this.ctx.clearRect(0, 0, 850, 600);
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

            if ((this.rect.x+10>=800)){
                this.eightTouch=true;
                this.zeroTouch=false;
                this.rect.x=40;
                this.level+=1;
                for (let i = 0; i < this.players.length; i++) {
                    this.players[i].dy*=1.7;
                    
                    
                }
                document.querySelector("#level").innerHTML=this.level.toString();
            }
            // if ((this.rect.x<=0)&& this.zeroTouch==false){
            //     this.eightTouch=false;
            //     this.zeroTouch=true;
            //     for (let i = 0; i < this.players.length; i++) {
            //         this.players[i].dy*=1.5;
                    
                    
            //     }
            //     this.level+=1;
            //     document.querySelector("#level").innerHTML=this.level.toString();
            // }
            if (this.level==3){
                for (let i = 0; i < this.players.length; i++) {
                    this.players[i].dx=this.players[i].dy;
                    
                }
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
            if (this.x<=0||this.x>=800){
                this.dx*=-1;
            }
            this.x+=this.dx;
            this.y+=this.dy;
        }
        public draw(ctx: CanvasRenderingContext2D){
            ctx.fillStyle=this.color;
            ctx.fillRect(this.x,this.y,this.w,this.h);
        }
    }

    class SpaceshipComponent {
        private loadedImage: HTMLImageElement;
        constructor(public x, public y, public w, public h, public dy, public dx) {
            var image = new Image(w, h);
            image.src = "spaceship1.png";
            image.addEventListener('load', () => { this.loadedImage = image });

        }
        public update(keyCode: number) {
            if (keyCode == 38) {
                this.dy = -3;
                this.dx=0;
            }
            else if (keyCode == 40) {
                this.dy = 3;
                this.dx=0;
            }
            else if(keyCode==37){
                this.dx=-3;
                this.dy=0;
            }
            else if (keyCode==39){
                this.dx=3;
                this.dy=0;
            }
            else {
                this.dy = 0;
                this.dx=0;
            }
            this.y += this.dy;
            this.x+=this.dx;

        }
        public draw(ctx: CanvasRenderingContext2D) {
            if (this.loadedImage) {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(Math.PI / 2);
                ctx.drawImage(this.loadedImage, this.w / -2, this.h / -2, this.w, this.h);
                ctx.restore();
            }
        }
    }
    class AsteroidComponent {
        private loadedImage: HTMLImageElement;
        constructor(public x, public y, public w, public h, public dy, public dx) {
            var image = new Image(w, h);
            image.src = "asteroid.png";
            image.addEventListener('load', () => { this.loadedImage = image });

        }
        public update10(){
            if (this.y<=0||this.y>=600){
                this.dy*=-1;
            }
            if (this.x<=0||this.x>=800){
                this.dx*=-1;
            }
            this.x+=this.dx;
            this.y+=this.dy;
        }
        
        public draw(ctx: CanvasRenderingContext2D) {
            if (this.loadedImage) {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(Math.PI / 2);
                ctx.drawImage(this.loadedImage, this.w / -2, this.h / -2, this.w, this.h);
                ctx.restore();
            }
        }
        
    }

    

    var game5 = new Game();

}
