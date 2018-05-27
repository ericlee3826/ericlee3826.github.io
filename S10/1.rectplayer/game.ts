namespace rectGame {
    class Game {
        board: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
        rect: RectPlayer;
        private spaceship: SpaceshipComponent;
        private gameloop: any;
        private isStarted: boolean;
        private keyCode: number;
        private obstacle: ObstacleComponent;
        constructor() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
            this.update = this.update.bind(this);
            this.start = this.start.bind(this);
            this.stop = this.stop.bind(this);
            this.handleKeydown = this.handleKeydown.bind(this);
            this.handleKeyup = this.handleKeyup.bind(this);
            document.querySelector("#btnstart").addEventListener('click', this.start);
            document.querySelector("#btnstop").addEventListener('click', this.stop);
            window.addEventListener('keydown', this.handleKeydown);
            window.addEventListener("keyup", this.handleKeyup);
        }
        public start() {
            if (this.isStarted) {
                return;
            }
            this.isStarted = true;
            // this.rect=new RectPlayer(10,10,10,10,0,'green',0);
            this.spaceship = new SpaceshipComponent(30, 100, 50, 50, 0);
            this.obstacle=new ObstacleComponent(800,40,3,"green");
            this.gameloop = window.setInterval(this.update, 20);
        }
        public stop() {
            if (this.isStarted == false) {
                return;
            }
            this.isStarted = false;
            window.clearInterval(this.gameloop);
        }

        public handleKeydown(ev: KeyboardEvent) {
            this.keyCode = ev.keyCode;
        }
        public handleKeyup(ev: KeyboardEvent) {
            this.keyCode = null;
        }
        public update() {
            this.ctx.clearRect(0, 0, 800, 600);
            // this.rect.update(this.keyCode);
            // this.rect.draw(this.ctx);
            this.spaceship.update(this.keyCode);
            this.spaceship.draw(this.ctx);
            this.obstacle.update();
            this.obstacle.draw(this.ctx);

        }
    }
    class RectPlayer {
        constructor(public x: number, public y: number, public w: number, public h: number, public dx: number, public color: string, public dy) { }
        public update(keyCode: number) {
            if (keyCode == 38) {
                this.dy = -20;
            }
            else if (keyCode == 40) {
                this.dy = 20;
            }
            else {
                this.dy = 0;
            }
            this.y += this.dy;
        }
        public draw(ctx: CanvasRenderingContext2D) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }

    class ObstacleComponent{
        private barH: number;
        private gapH: number;
        constructor(public x, public w,public dx, public color){
            this.initBars();
        }
        public initBars(){
            this.barH=Math.floor(Math.random()*200)+100;
            this.gapH=Math.floor(Math.random()*200)+100;
            
        }
        public update(){
            this.x-=this.dx;
            if (this.x<=-40){
                this.x=800;
                this.initBars();
            }
        }
        public draw(ctx: CanvasRenderingContext2D){
            ctx.fillStyle=this.color;
            ctx.fillRect(this.x,0,this.w,this.barH);
            ctx.fillRect(this.x,this.barH+this.gapH, this.w,600-this.barH-this.gapH);
        }

    }

    class SpaceshipComponent {
        private loadedImage: HTMLImageElement;
        constructor(public x, public y, public w, public h, public dy) {
            var image = new Image(w, h);
            image.src = "spaceship1.png";
            image.addEventListener('load', () => { this.loadedImage = image });

        }
        public update(keyCode: number) {
            if (keyCode == 38) {
                this.dy = -5;
            }
            else if (keyCode == 40) {
                this.dy = 5;
            }
            else {
                this.dy = 0;
            }
            this.y += this.dy;

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
