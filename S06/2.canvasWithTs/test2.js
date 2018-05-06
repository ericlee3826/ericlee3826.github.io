var board = document.querySelector("#board");
var ctx = board.getContext("2d");
for (var i = 0; i < 5; i++) {
    ctx.arc(100 + i * 100, 100, 5, 0, Math.PI * 2);
}
ctx.fill();
ctx.beginPath();
for (var i = 0; i < 3; i++) {
    ctx.moveTo(100 + i * 100, 350);
    ctx.lineTo(100 + i * 100, 600);
    ctx.stroke();
}
for (var i = 0; i < 3; i++) {
    ctx.fillRect(100 + i * 100, 300, 50, 50);
}
ctx.font = "30px Arial";
ctx.fillText("Circles, Squares, Lines", 30, 30);
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 200, 200);
var smileImage = new Image();
smileImage.src = "smile.jpg";
smileImage.onload = function () {
    ctx.drawImage(smileImage, 200, 200);
};
