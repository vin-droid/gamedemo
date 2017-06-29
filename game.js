// Setting 
// var upperBound = 



// var boudary_x = 0px;  


// define player
function Player() {
    this.x = 0;
    this.y = 0;
}






window.onload = function() {

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var x = canvas.width / 2;
    var y = canvas.height - 30;
    var dx = 2;
    var dy = -2;
    var startButton = document.getElementById("start-btn");
    var stopButton = document.getElementById("stop-btn");

    function drawBall(posX,posY) {
        ctx.beginPath();
        ctx.arc(posX, posY, 10, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    function draw() {
        if (y == 0) {
            clearInterval(gameIntervalId);
            gameOver();
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        console.log(x);
        console.log(y);
        x += dx;
        y += dy;
        drawBall(x,y);
    }


    function gameOver() {
        alert("Game Over!");
    }

    function moveLeft() {

    }

    function moveRight() {

    }

    function moveUp() {

    }

    function moveDown() {

    }

    function stopGame() {
        console.log("Stop Game!");
    }

    function startGame() {
        console.log("Start Game.");
    }

    function noMove() {
        console.log("No Move.");
    }

    var gameIntervalId = setInterval(draw, 100);


    document.addEventListener('keydown', function() {
        keyCode = event.keyCode;
        switch (keyCode) {
            case 37:
                // left arrow key pressed
                moveLeft();
                break;
            case 38:
                // up arrow key pressed
                moveUp();
                break;
            case 39:
                // right arrow key pressed
                moveRight();
                break;
            case 40:
                // down arrow key pressed
                moveDown();
                break;
            default:
                noMove();
                break;
        }
    }, false);

    startButton.addEventListener('click', startGame);
    stopButton.addEventListener('click', stopGame)

}