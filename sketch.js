const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var wheel1,wheel2,wheel3,wheel4,owheel1,outercover,outercover1,shooter;

function setup(){
    var canvas = createCanvas(1350,655);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(680,650,1450,20);

    wheel1 = new wheels(160,607); 
    wheel2 = new wheels(225,607); 
    wheel3 = new wheels(290,607); 
    wheel4 = new wheels(355,607); 

    owheel1 = new Outerwheels(245,520);
    outercover = new cover(255,585,245,45);
    outercover1 = new cover(245,555,145,55);

    shooter = new shoot(290,500,100,30);
}

function draw(){
    background(255);
    Engine.update(engine);
    
    shooter.display();
    owheel1.display();
    outercover1.display();
    ground.display();
    wheel1.display();
    wheel2.display();
    wheel3.display();
    wheel4.display();
    outercover.display();

};