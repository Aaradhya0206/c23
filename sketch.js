const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2
var ground
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
ground =new Ground(50,350,600,30);
    box1 = new Box(200,100,50,80);
    box2 = new Box(230,190,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   ground.display();
   box2.display();
}