const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground;
var stand1,stand2;
var ball;
var rope1;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  Box1 = new Boxes(300,275,30,40);
  Box2 = new Boxes(330,275,30,40);
  Box3 = new Boxes(360,275,30,40);
  Box4 = new Boxes(390,275,30,40);
  Box5 = new Boxes(420,275,30,40);
  Box6 = new Boxes(450,275,30,40);
  Box7 = new Boxes(480,275,30,40);
  Box8 = new Boxes(330,235,30,40);
  Box9 = new Boxes(360,235,30,40);
  Box10 = new Boxes(390,235,30,40);
  Box11 = new Boxes(420,235,30,40);
  Box12 = new Boxes(450,235,30,40);
  Box13 = new Boxes(360,195,30,40);
  Box14 = new Boxes(390,195,30,40);
  Box15 = new Boxes(420,195,30,40);
  Box16 = new Boxes(390,155,30,40);

  Boxs1 = new Boxes(640,175,30,40);
  Boxs2 = new Boxes(670,175,30,40);
  Boxs3 = new Boxes(700,175,30,40);
  Boxs4 = new Boxes(730,175,30,40);
  Boxs5 = new Boxes(760,175,30,40);
  Boxs6 = new Boxes(670,135,30,40);
  Boxs7 = new Boxes(700,135,30,40);
  Boxs8 = new Boxes(730,135,30,40);
  Boxs9 = new Boxes(700,95,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  rope1= new Rope(this.ball,{x:100,y:200});

}
function draw() {
  background("black"); 
 
  

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("yellow");
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Box6.display();
  Box7.display();
  fill("orange");
  Box8.display();
  Box9.display();
  Box10.display();
  Box11.display();
  Box12.display();
  fill("red");
  Box13.display();
  Box14.display();
  Box15.display();
  fill("blue");
  Box16.display();
  fill("skyblue");
  Boxs1.display();
  Boxs2.display();
  Boxs3.display();
  Boxs4.display();
  Boxs5.display();
  fill("turquoise");
  Boxs6.display();
  Boxs7.display();
  Boxs8.display();
  fill("pink")
  Boxs9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  rope1.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  rope1.fly();
}

function keyPressed(){
  if (keyCode === 32){
rope1.attach(this.polygon)
  }
}