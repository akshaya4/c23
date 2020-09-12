
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var dustbinObj,world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,200,20)
	dustbinObj=new dustbin(1200,650);
	ground = new Ground(400, 600, 800, 10);
	
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
	background(0);

dustbinObj.display();
paper.display();
ground.display();

  
 
 
}

function keyPressed() {
	if (keyCode === UP_ARROW)

	Matter.Body.applyForce(paper.body, paper.body.position, {x: 85, y:-85})
}

