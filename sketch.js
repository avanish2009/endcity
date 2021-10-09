
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball







function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  var ball_options={
	  isStatic:false,
    restitution:0.3,
	friction:0,
    density:1.2
  }

ball = Bodies.circle(310,100,60/2.6,ball_options)
World.add(world,ball);

ground=new Ground(width/2,670,width,20);
leftSide = new Ground(1100,600,10,120);
rightSide = new Ground(1270,600,10,120);
bottomSide = new Ground(1190,650,150,20);

  Engine.run(engine)







	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
ellipse(ball.position.x,ball.position.y,40,40)

  ground.display()
  leftSide.display()
  rightSide.display()
  bottomSide.display()



imageMode(CENTER);




}
function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:100,y:-110});

    }
  }