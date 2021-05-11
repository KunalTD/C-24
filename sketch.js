const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3,box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

function setup(){
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,360,70,70);
    box2 = new Box(900,360,70,70);
    box3= new Box(700, 240, 70,70);
    box4= new Box(900, 240, 70,70);
    box5= new Box(800, 120, 70,70);

    ground = new Ground(600,height,1200,20)

    pig1=new Pig(800,360);
    pig2=new Pig(800,240);

    log1=new Log(800, 260, 268, PI/2)
    log2=new Log(800, 140, 268, PI/2)
    log3=new Log(760, 120, 150, PI/8)
    log4=new Log(850, 120, 150, -PI/8)

    bird=new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}