const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

var backgroundImage;

function preload(){

  ;

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

	log1 = new Log(810,260,10, 20);
	log2 = new Log(920,260,20, 10);
	log3 =  new Log(930,260,10,20);

    ball = new Ball(100,100);

}

function draw(){
	background(0);
    Engine.update(engine);
	ground.display();
	
	log1.display();
	log2.display();
    log3.display();
    ball.display();
}
 




