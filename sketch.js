const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var divisionHeight = 300;
var particles = [];
  var divisions = [];
  var plinkos = []
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,790,480,10);
  for(var k = 0;k <= width;k = k + 80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for(var j = 40;j <=width;j=j+50){
    plinkos.push(new Plinko(j,75,10))
  }
  for(var j = 15;j <=width-10;j=j+50){
    plinkos.push(new Plinko(j,175,10))
  }
  for(var j = 40;j <=width;j=j+50){
    plinkos.push(new Plinko(j,275,10))
  }
  for(var j = 15;j <=width-10;j=j+50){
    plinkos.push(new Plinko(j,375,10))
  }
  

}

function draw() {
  background("black");
  Engine.update(engine);  
  drawSprites();
  text(mouseX,100,200)
  text(mouseY,150,200)
  ground.display();
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }


  for(var k = 0;k< divisions.length;k++){
    divisions[k].display();
  }
  for(var i = 0;i< plinkos.length;i++){
    plinkos[i].display();
  }
  for(var m = 0;m< particles.length;m++){
    particles[m].display();
  }
}