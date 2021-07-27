const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;
var gb ;
function preload(){
	gb=loadImage("gamingbackground2.png")
}

function setup() {
	createCanvas(1536, 600);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(100,550,4000,40);
    ball = new Ball(100,100,20)
	World.add(world, ground);

	Engine.run(engine);
	}
	function draw() {
	Engine.update(engine);
  background(gb);
  ground.display();
  ball.display();

	drawSprites();
	}function keyPressed()
	{if(keyCode===UP_ARROW)
	{
	Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:200})
	}
	{if(keyCode===LEFT_ARROW)
	{
	Matter.Body.applyForce(ball.body,ball.body.position,{x:-120,y:0})
	}
	{if(keyCode===RIGHT_ARROW)
	{
	Matter.Body.applyForce(ball.body,ball.body.position,{x:120,y:0})
	}}}}