
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,  world;

//function preload(){}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,600,10);
	ground = new Ground(400,680,800,10);

	leftSide = new Dustbin(600, 620, 10, 100);
	bottom = new Dustbin(640, 665, 70, 10);
  rightSide = new Dustbin(670, 620, 10, 100); 
  

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  Engine.update(engine);

  paper.display();
  ground.display();
  leftSide.display();
  bottom.display();
  rightSide.display();
  
  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body, paper.body.position,{x:15, y:-15});

  }

}