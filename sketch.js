var garden, gardenImg;
var cat, catImg, catRunning, catFinal;
var mouse, mouseImg, mouseTeasing, mouseFinal;
function preload() {
    //load the images here
   gardenImg=loadAnimation("images/garden.png");
   catImg=loadAnimation("images/cat1.png");
   mouseImg=loadAnimation("images/mouse1.png");
   catRunning=loadAnimation("images/cat2.png", "images/cat3.png");
   mouseTeasing=loadAnimation("images/mouse2.png","images/mouse3.png");
   catFinal=loadAnimation("images/cat4.png");
   mouseFinal=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(600,400);
    //create tom and jerry sprites here
    garden=createSprite(300,200,10,10);
    garden.addAnimation("garden",gardenImg);
    garden.scale=0.6;

   cat=createSprite(530,350,10,10);
   cat.addAnimation("standing",catImg);
   cat.scale=0.1;
   

   mouse=createSprite(100,350,10,10);
   mouse.addAnimation("standing", mouseImg);
   mouse.scale=0.1;
}

function draw() {
    
    background("pink");
    //Write condition here to evalute if tom and jerry collide
    text(mouseX + ',' + mouseY, 10, 45);
    drawSprites();

    if(cat.x-mouse.x < (cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.x=200;
        cat.addAnimation("final", catFinal);
        cat.changeAnimation("final");

        mouse.addAnimation("end", mouseFinal);
        mouse.changeAnimation("end");
    }
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.addAnimation("running", catRunning);
        cat.changeAnimation("running");
        cat.velocityX=-2;

        mouse.addAnimation("teasing", mouseTeasing);
        mouse.changeAnimation("teasing");
    }


}