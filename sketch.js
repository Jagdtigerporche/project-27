
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;
var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;


function setup() {
	createCanvas(800, 700);
	background("grey");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Ground(400,100,400,50);
	ball1 = new paper (300,450,50,50);
	ball2 = new paper(350,450,50,50);
	ball3 = new paper (400,450,50,50);
	ball4 = new paper (450,450,50,50);
	ball5 = new paper (500,450,50,50);

	rope1 = new Chain(ball1.body,ground1.body, 0);
	rope2 = new Chain(ball2.body,ground1.body, 0);
	rope3 = new Chain(ball3.body,ground1.body, 0);
	rope4 = new Chain(ball4.body,ground1.body, 0);
	rope5 = new Chain(ball5.body,ground1.body, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
ground1.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

  drawSprites();
 
}



