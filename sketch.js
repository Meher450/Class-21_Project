var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;
var img,img1,img2,img3,img4;
var bg;


function preload(){
    // load sound here
    music=loadSound("music.mp3");
  
    img=loadImage("img1.jpg");
    img1=loadImage("img2.jpg");
    img3=loadImage("img3.jpg");
    img2=loadImage("img4.jpg");
    img4=loadImage("img5.jpg");
}


function setup(){
    canvas = createCanvas(800,600);
  
    bg=createSprite(400,300,800,600);
    bg.addImage("img4",img4);   

    block1 = createSprite(0,580,360,30);
    block1.shapeColor= "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "yellow";

    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(725,580,200,30);
    block4.shapeColor = "green";

    ball = createSprite(400,300, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX=5;
    ball.velocityY=5;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        bg.addImage("img",img);
        bg.changeImage("img");
        bg.scale=0.35;
    }

    if(block2.isTouching(ball)&& ball.bounceOff(block2)){
        ball.shapeColor = "yellow";
        bg.addImage("img1",img1);
        bg.changeImage("img1");
        bg.scale=0.75;
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball)&& ball.bounceOff(block3)){
        ball.shapeColor = "red";
        bg.addImage("img2",img2);
        bg.changeImage("img2");
        bg.scale=1;
    }
    //write code to bounce off ball from the block4
    if(block4.isTouching(ball)&& ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
        bg.addImage("img3",img3);
        bg.changeImage("img3");
        bg.scale=0.75;
    }
    drawSprites();
}
