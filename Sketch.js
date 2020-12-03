const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const MouseConstraint = Matter.MouseConstraint;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse

var engine, world,mConstraint;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var string1,string2,string3,string4,string5;

function setup(){
canvas = createCanvas(windowWidth / 2 , windowHeight / 1.5);
engine = Engine.create();
world = engine.world;

let canvasmouse = Mouse.create(canvas.elt)
canvasmouse.pixelRatio = pixelDensity();
let options = {
    mouse : canvasmouse
}

mConstraint = MouseConstraint.create(engine,options);
World.add(world,mConstraint);

pendulum1 = new Pendulum(200,350,"red");
pendulum2 = new Pendulum(260,350,"yellow");
pendulum3 = new Pendulum(320,350,"cyan");
pendulum4 = new Pendulum(380,350,"lime");
pendulum5 = new Pendulum(440,350,"brown");

string1 = new Sling(pendulum1.body,{x : 200 , y : 150});
string2 = new Sling(pendulum2.body,{x : 260 , y : 150});
string3 = new Sling(pendulum3.body,{x : 320 , y : 150});
string4 = new Sling(pendulum4.body,{x : 380 , y : 150});
string5 = new Sling(pendulum5.body,{x : 440 , y : 150});

}

function draw(){
background("black");
Engine.update(engine);

pendulum1.display();
pendulum2.display();
pendulum3.display();
pendulum4.display();
pendulum5.display();

string1.display();
string2.display();
string3.display();
string4.display();
string5.display();

}

function mouseDragged(){
Matter.Body.setPosition(pendulum1.body,{x : mouseX , y: mouseY});
}

