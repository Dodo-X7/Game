
function setup() {
  createCanvas(400,400);
  ball = createSprite (200, 200, 50, 50)
  edges = createEdgeSprites ()
}

function draw() 
{
  background(30);
  if (keyDown ("left")) {
    ball.velocityX = -3
  }

  if (keyDown ("right")) {
    ball.velocityX = 3
  }
  ball.bounceOff (edges)
drawSprites ()
}




