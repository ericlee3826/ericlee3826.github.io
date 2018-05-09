var board=document.querySelector("#board") as HTMLCanvasElement;
var ctx=board.getContext("2d");

var ob1;
var ob2;
var ob3;
var ob4;
var ob5;
var ob6; 
var ob7;
var ob8;
var ob9;

setInterval(update1,20);
var dy=1;
var y=1;
var dy2=2;
var y2=1;
var dy3=3;
var y3=1;
var dy4=4;
var y4=1;
var dy5=5;
var y5=1;
var dy6=6;
var y6=1;
var dy7=7;
var y7=1;
var dy8=8;
var y8=1;
var dy9=9;
var y9=1;

var dx=1;
var btnLEFT=document.querySelector("#btnLEFT");
// btnLEFT.addEventListener('click',MOVEUP);
var x1=1;
var x=1;

 function MOVELEFT(){
     ctx.clearRect(0,0,800,600);
     x1++;
     ctx.fillRect(x1,0,20,20);
    
 }

function update1(){
    ctx.clearRect(0,0,800,600);
    if (y<=0||y>=580){
        dy*=-1;
    }
    y+=dy;
    var ob1=new Rect(50,y,20,20);
    ob1.draw(ctx);
    if (y2<=0||y2>=580){
        dy2*=-1;
    }
    y2+=dy2;
    var ob2=new Rect(100,y2,20,20);
    ob2.draw(ctx);
    if (y3<=0||y3>=580){
        dy3*=-1;
    }
    y3+=dy3;
    var ob3=new Rect(150,y3,20,20);
    ob3.draw(ctx);
    if (y4<=0||y4>=580){
        dy4*=-1;
    }
    y4+=dy4;
    var ob4=new Rect(200,y4,20,20);
    ob4.draw(ctx);
    if (y5<=0||y5>=580){
        dy5*=-1;
    }
    y5+=dy5;
    var ob5=new Rect(250,y5,20,20);
    ob5.draw(ctx);
    if (y6<=0||y6>=580){
        dy6*=-1;
    }
    y6+=dy6;
    var ob6=new Rect(300,y6,20,20);
    ob6.draw(ctx);
    if (y7<=0||y7>=580){
        dy7*=-1;
    }
    y7+=dy7;
    var ob7=new Rect(350,y7,20,20);
    ob7.draw(ctx);
    if (y8<=0||y8>=580){
        dy8*=-1;
    }
    y8+=dy8;
    var ob8=new Rect(400,y8,20,20);
    ob8.draw(ctx);
    if (y9<=0||y9>=580){
        dy9*=-1;
    }
    y9+=dy9;
    var ob9=new Rect(450,y9,20,20);
    ob9.draw(ctx);
    
    
     var player=new Rect(x,300,20,20);
     player.draw(ctx);

    if (player.x+30==ob1.x&&player.y+30==ob1.y){
        document.querySelector("#result").innerHTML="game over";
    }
    if (player.x==ob2.x&&player.y==ob2.y){
        document.querySelector("#result").innerHTML="game over";
    }
    if (player.x==ob3.x&&player.y==ob3.y){
        document.querySelector("#result").innerHTML="game over";
    }
    if (player.x+30<=ob4.x+20&&player.x+30>=ob4.x){
        if(player.y+30>=ob4.y&&player.y+30<=ob4.y+20){
        document.querySelector("#result").innerHTML="game over";
    }
}
    if (player.x==ob5.x&&player.y==ob5.y){
        document.querySelector("#result").innerHTML="game over";
    }
    if (player.x==ob6.x&&player.y==ob6.y){
        document.querySelector("#result").innerHTML="game over";
    }
    if (player.x==ob7.x&&player.y==ob7.y){
        document.querySelector("#result").innerHTML="game over";
    }
    if (player.x==ob8.x&&player.y==ob8.y){
        document.querySelector("#result").innerHTML="game over";
    }
    if (player.x==ob9.x&&player.y==ob9.y){
        document.querySelector("#result").innerHTML="game over";
    }
    
}







class Rect{
    x: number;
    y: number;
    w: number;
    h: number;
    dx: number;
    
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
    }
    public draw(ctx: CanvasRenderingContext2D) {
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }
}