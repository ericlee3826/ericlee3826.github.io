var board=document.querySelector("#board") as HTMLCanvasElement;
var ctx=board.getContext("2d");
ctx.arc(250,125,220,0,360);
ctx.fillStyle="black";
ctx.fill();
ctx.beginPath();
ctx.fillStyle="white";
ctx.arc(250,125,218,0,360);
ctx.fill();
ctx.beginPath();
ctx.fillStyle="black";
for (let i = 0; i < 2; i++) {
    ctx.fillRect(100+i*200,0,100,100);    
}
ctx.arc(250,150,50,0,360);
ctx.fill();
ctx.fillRect(150,225,200,50);
ctx.beginPath();
ctx.fillStyle="white";
ctx.arc(150,50,10,0,360);
ctx.arc(350,50,10,0,360);
ctx.fill();



