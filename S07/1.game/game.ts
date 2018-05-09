var board=document.querySelector("#board") as HTMLCanvasElement;
var ctx=board.getContext("2d");
setInterval(update,20);
var x=10;
var dx=1.5;
var y=50;
var dy=1;
function update(){
    ctx.clearRect(0,0,800,600);
    
    
    if (x>=800||x<=0){
        dx*=-1
    }
    x+=dx;
    if (y>=600||y<=0){
        dy*=-1;
    }
    y+=dy;
    ctx.fillStyle="red";
    var player=ctx.fillRect(x,150,100,100);
    ctx.beginPath();
    ctx.fillStyle="blue";
    var player2=ctx.fillRect(150,y,100,100);

    if(x+100==150){
        dx*=-1;
    }




    
}













