var tiel;
var tielImage;
var ground;
var invisibleGround;

function preload(){
    tielImage =  loadImage("tiel.png")
}

function setup(){
    createCanvas(displayWidth, displayHeight)
    tiel = createSprite(75, 715, 10, 10)
    tiel.addImage(tielImage)
    tiel.scale = 0.3;
    ground = createSprite(displayWidth/2, 790, displayWidth, 10)
    invisibleGround = createSprite(displayWidth/2, 790, displayWidth, 10)

}

function draw(){
    background(255)
    if(keyDown ("w")){
        tiel.velocityY = -25
    }
    tiel.velocityY = tiel.velocityY + 5
    tiel.collide(invisibleGround);
    drawSprites();
}