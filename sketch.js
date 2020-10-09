var helicopterIMG, helicopterSprite, packageSprite,packageIMG,packageOptions;
var packageBody,ground;

var boxL,boxL_ops,boxL_body;
var boxR,boxR_ops,boxR_body
var boxB,boxB_ops,boxB_body;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2,80,10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	packageOptions = {restitution : 0.7, isStatic : true}

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	boxL = createSprite((width/2)-110,590,20,100);
	boxL.shapeColor ="red";
	boxL_ops = {isStatic:true}
	boxR = createSprite((width/2)+110,590,20,100);
	boxR.shapeColor ="red";
	boxR_ops = {isStatic:true}
	boxB = createSprite(width/2,640,200,20);
	boxB.shapeColor ="red";
	boxB_ops = {isStatic:true}

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , packageOptions);
	World.add(world, packageBody);
	
	boxL_body = Bodies.rectangle((width/2)-110,590,20,100,boxL_ops);
	World.add(world,boxL_body);
	boxR_body = Bodies.rectangle((width/2)+110,590,20,100,boxR_ops);
	World.add(world,boxR_body);
	boxB_body = Bodies.rectangle(width/2,640,200,20,boxB_ops);
	World.add(world,boxB_body);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y;
  /*boxL.x = boxL_body.position.x;
  boxL.y = boxL_body.position.y;
  boxR.x = boxL_body.position.x;
  boxR.y = boxL_body.position.y;
  boxB.x = boxL_body.position.x;
  boxB.y = boxL_body.position.y;*/
  keyPressed(); 
  drawSprites();
 
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
    Matter.Body.setStatic(packageBody,false);
  }
}



