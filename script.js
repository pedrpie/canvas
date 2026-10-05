const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.style.border = "1px black solid";

const playerImage = new Image();
playerImage.src = "./assets/player.png";

const player = {
    x: 100,
    y: 100,
    width: 50,
    height: 50,
    speed: 5
};

const keys = {};

document.addEventListener("keydown", (event) =>{
    keys[event.key] = true;
});

document.addEventListener("keyup", (event) => {
    keys[event.key] = false;
});

function updatePlayer(){

    if (keys["ArrowUp"]){
        player.y -= player.speed;
    }

    if (keys["ArrowDown"]){
        player.y += player.speed;
    }

    if (keys["ArrowLeft"]){
        player.x -= player.speed;
    }

    if (keys["ArrowRight"]){
        player.x += player.speed;
    }


    if (player.x < 0){
        player.x = 0;
    }

    if (player.y < 0){
        player.y = 0;
    }

    if (player.x + player.width > canvas.width){
        player.x = canvas.width - player.width;
    }

    if (player.y + player.height > canvas.height){
        player.y = canvas.height - player.height;
    }
}

function drawPlayer(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "red";

    ctx.fillRect(
        player.x,
        player.y,
        player.width,
        player.height
    )
}

function gameLoop(){
    updatePlayer();
    drawPlayer();

    requestAnimationFrame(gameLoop);
}

gameLoop();