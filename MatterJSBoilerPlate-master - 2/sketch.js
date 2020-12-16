
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;
var dustbin2;
var dustbin3,dustbinImg;
var ground;
var paperball,paperballImg;
function preload()
{
	paperballImg = loadImage("sprites/paper(1).png");
	dustbinImg = loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(1100,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(700,320,10,150);
	dustbin2 = new Dustbin(920,320,10,150);
	dustbin3 = new Dustbin(810,360,220,10);
	dustbin3.addImage(dustbinImg);
	dustbinImg.scale = 2;
	ground = new Ground(550,380,1100,10);
	paperball = new Paperball(50, 100);
	paperball.addImage(paperballImg);
	paperballImg.scale = 2;

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
    dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	ground.display();
	paperball.display();

	keyPressed();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:2.5,y:-5});
	}
}

