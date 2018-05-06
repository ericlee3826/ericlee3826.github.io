var board = document.querySelector("#board");
var ctx = board.getContext("2d");
ctx.beginPath();
for (var i = 0; i < 5; i++) {
    ctx.fillRect(100 + i * 50, 100 + i * 50, 50, 50);
}
ctx.beginPath();
for (var i = 0; i < 5; i++) {
    ctx.arc(125 + i * 50, 325 - i * 50, 25, 0, 360);
}
ctx.fillStyle = "green";
ctx.fill();
ctx.beginPath();
for (var i = 0; i < 5; i++) {
    ctx.moveTo(0, 125 + i * 50);
    ctx.lineTo(100, 125 + i * 50);
    ctx.stroke();
}
for (var i = 0; i < 5; i++) {
    ctx.moveTo(350, 125 + i * 50);
    ctx.lineTo(450, 125 + i * 50);
    ctx.stroke();
}
for (var i = 0; i < 5; i++) {
    ctx.moveTo(125 + i * 50, 0);
    ctx.lineTo(125 + i * 50, 100);
    ctx.stroke();
}
for (var i = 0; i < 5; i++) {
    ctx.moveTo(125 + i * 50, 350);
    ctx.lineTo(125 + i * 50, 450);
    ctx.stroke();
}
ctx.beginPath();
ctx.fillStyle = "black";
for (var i = 0; i < 3; i++) {
    ctx.arc(400 + i * 50, 400 + i * 50, 35 - (35 * 1 / 2 * i), 0, Math.PI * 2);
}
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "black";
var image = new image();
image.src = "cartoonface.jpg";
image.onload = function () {
    ctx.drawImage(image, 550, 550);
};
