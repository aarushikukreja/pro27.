
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
var rope1
var bobDiameter
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 roof= new Roof(400, 250, 300, 30)
 bobObject1= new Bob(400, 450, 30)
 rope1= new Rope(bobObject1.body, roof.body, bobDiameter*2, 0)

 bobObject2= new Bob(460, 450, 30)
 rope2= new Rope(bobObject2.body, roof.body, bobDiameter*2, 0)
	Engine.run(engine);

	bobObject3= new Bob(520, 450, 30)
 rope3= new Rope(bobObject3.body, roof.body, bobDiameter*2, 0)
	Engine.run(engine);

	bobObject4= new Bob(340, 450, 30)
	rope4= new Rope(bobObject4.body, roof.body, bobDiameter*2, 0)
	   Engine.run(engine);

	   bobObject5= new Bob(280, 450, 30)
	rope5= new Rope(bobObject5.body, roof.body, bobDiameter*2, 0)
	Engine.run(engine);
	 
  
}


function draw() {
	
  background("white");
  Engine.update(engine);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.Display();
  rope2.Display();
  rope3.Display();
  rope4.Display();
  rope5.Display();
  drawSprites();
}



