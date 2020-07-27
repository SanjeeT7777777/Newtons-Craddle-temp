
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 = new Bob (200,600,20);
bob2 = new Bob (240,600,20);
bob3 = new Bob (280,600,20);
bob4 = new Bob (320,600,20);
bob5 = new Bob (360,600,20);

roof1 = new  Roof (270,350,180,20);

rope1 = new Rope (bob1.body,roof1.body);
rope2 = new Rope (bob2.body,roof1.body);
rope3 = new Rope (bob3.body,roof1.body);
rope4 = new Rope (bob4.body,roof1.body);
rope5 = new Rope (bob5.body,roof1.body);
//rope1 = new Rope (bob1.body,roof1.body,250,2);
	Engine.run(engine);
  
}


function draw() {
  background(255);
  Engine.update(engine);
  
  console.log(bob1);

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

 //rope1.display();
 roof1.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

}



