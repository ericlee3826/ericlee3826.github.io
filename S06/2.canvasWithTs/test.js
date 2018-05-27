var board = document.querySelector("#board");
var ctx = board.getContext("2d");
ctx.fillRect(100, 100, 200, 200);
ctx.fillRect(200, 200, 300, 300);
ctx.fillStyle = "red";
ctx.arc(300, 300, 200, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "blue";
for (var i = 0; i < 5; i++) {
    ctx.arc(100 + i * 50, 100 + i * 50, 50, 0, Math.PI * 2);
}
ctx.fill();
//# sourceMappingURL=test.js.map