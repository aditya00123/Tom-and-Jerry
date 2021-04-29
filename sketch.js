var garden, gardenImage;
var mouse, mouseImage, mouseEndImage, mouseTeasing;
var cat, catImage, catEndImage, catWalking;

function preload() {
    //load the images here
    gardenImage = loadImage('images/garden.png');

    mouseImage = loadImage('images/mouse1.png');
    mouseEndImage = loadImage('images/mouse4.png');

    catImage = loadImage('images/cat1.png');
    catEndImage = loadImage('images/cat4.png');

    mouseTeasing = loadAnimation('images/mouse2.png','images/mouse3.png');
    catWalking = loadAnimation('images/cat2.png','images/cat3.png');
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprite
    garden = createSprite(500,400,2000,1600);
    garden.addImage(gardenImage);

    cat = createSprite(800,600,40,40);
    cat.addImage(catImage);
    cat.scale = 0.2;

    mouse = createSprite(100,600,20,20);
    mouse.addImage(mouseImage);
    mouse.scale = 0.2;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if (cat.x - mouse.x < mouse.width/2 + cat.width/2
        && mouse.x - cat.x < mouse.width/2 + cat.width/2
        && cat.y - mouse.y < mouse.height/2 + cat.height/2
        && mouse.y - cat.y < mouse.height/2 + cat.height/2) {
     mouse.changeImage = mouseEndImage;
     cat.changeImage = catEndImage;
    }

   
    drawSprites();
    
}


function keyPressed(){

  //For moving and changing animation write code here

    if(keyCode === 32) {
        cat.x = cat.x - 5;
        cat.changeAnimation('walking',catWalking);

        mouse.changeAnimation('teasing',mouseTeasing);
    }

}
