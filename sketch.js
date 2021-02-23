var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(600,600);

    
//create box sprite and give velocity

box = createSprite(random(20,650));
box.shapeColor="white";
box.velocityY= 5;    
box.scale=0.3;  
  //create 4 different surfaces
  
  
  surface1 = createSprite(75,587,140,20);
  surface1.shapeColor="blue";
  
  surface2 = createSprite(225,587,140,20);
  surface2.shapeColor="orange";
  
  surface3 = createSprite(377,587,140,20);
  surface3.shapeColor="red";
  
  surface4 = createSprite(528,587,140,20);
  surface4.shapeColor="green";
  

  
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

 edges= createEdgeSprites();
 box.bounceOff(edges);

  
  if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor="blue";
  music.play();
  }
  
  if(surface2.isTouching(box)){
    box.shapeColor = rgb(255,128,0);
    box.velocityY = 0;
    music.stop();
  }
  
  if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor="red";
  }
  
  if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor="green";
  }
  
  
  
  
drawSprites();
    //add condition to check if box touching surface and make it box
}
