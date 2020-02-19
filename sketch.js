// You could have multiple flags like: start, launch to indicate the state of the game.
var ground;
var engine, world;

var tankBodyWidth;
var tankBodyHeight;

var circleY;

var tankHeadWidth;
var tankHeadHeight;

var tankHeadY;
var tankHeadX;

var angle;

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as const Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,375,400,50);
    cannon = new Cannon(50,387,40,80);
    x = 200;
    y = 200;
    speed = 6;

}

function draw() {
    background("white");
    Engine.update(engine);
// Remember to update the Matter Engine and set the background.
    ground.display();
    cannon.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}