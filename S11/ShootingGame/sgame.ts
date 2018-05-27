namespace ShootingGame{
    class game{
        board: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
        mainplayer: Rectmain;
        obstacles: Rectmain[];
        private keyCode: number;
        private isStarted: boolean;
        constructor() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
            this.stop=this.stop.bind(this);
            this.start=this.start.bind(this);
            this.update=this.update.bind(this);
            document.querySelector("#btnstart").addEventListener('click', this.start);
            document.querySelector("#btnstop").addEventListener('click',this.stop);
            window.addEventListener('keydown', this.keydown);
            
            
            
                
        }
        public keydown(ev: KeyboardEvent){
            this.keyCode=ev.keyCode;
        }
        
        public start(){
            if (this.isStarted){
                return;
            }
            this.isStarted=true;
            this.mainplayer=new Rectmain(100,300,40,40,0);
            
            window.setInterval(this.update,20);
        }
        public stop(){
            if (this.isStarted==false){
                return;
            }
            this.isStarted=false;
        }
        public update(){

        }
    }
    class Rectmain{
        constructor(public x, public y, public w, public h, public dy){}
    }
    var mygame=new game();
}

