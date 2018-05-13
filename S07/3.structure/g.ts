class myGame{
    board: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    players: Rectangle[];
    constructor(){
        this.board=document.querySelector("#board");
        this.ctx=this.board.getContext("2d");
    }
    public start(){
        this.players=[];
        for (let i = 1; i <= 10; i++) {
            var element=new Rectangle(1,100+i*50,20,20,"blue");
            element.dx=i*2;
            this.players.push(element);
            
        }
        window.setInterval(()=>{this.update5()},20);
    }
    public update5(){
        this.ctx.clearRect(0,0,this.board.width,this.board.height);
        for (let i = 0; i < 10; i++) {
            const element=this.players[i];
            this.players[i].update();
            this.players[i].draw(this.ctx);
        }
    }

}

class Rectangle{
    x: number;
    dx: number;
    width: number;
    height: number;
    y: number;
    color: string;
    constructor(x,y,w,h,c){
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;
        this.color=c;
    }
    public draw(ctx:CanvasRenderingContext2D) {
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
    public update(){
        
        if (this.x>=800||this.x<=0){
            this.dx*=-1;
        }
        this.x+=this.dx;
    }
}

var g=new myGame();
g.start();
