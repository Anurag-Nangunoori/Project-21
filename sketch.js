var  wall, thickness;
var bullet
var speed, weight;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight =   random(30,52);
  thickness = random(22,83)
  bullet = createSprite(400, 200, 50, 10);
  wall = createSprite(1200,200,thickness, height/2);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  wall.shapeColor = "white";
  
}

function draw() {
  background("black"); 
  
 
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
bullet.velocityX=0;
  }
var damage = 0.5 * weight * speed* speed/(thickness * thickness  * thickness );
if (damage>10)
{
  wall.shapeColor = "red"
} 
if(damage<10)
{
  wall.shapeColor = color = "green"
}
drawSprites();
  }