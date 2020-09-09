var ball,img,paddle;
var paddle_image;
var rEdge, lEdge, bEdge, tEdge;
var rand;

function preload() {
  /* preload your images here of the ball and the paddle */
  img = loadImage("ball.png");
  paddle_image = loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(50,200,50,50);
  paddle = createSprite(350,200,25,100);
  tEdge = createSprite(200,400,400,10);
  bEdge = createSprite(200,0,400,10);
  rEdge = createSprite(400,200,10,400);
  lEdge = createSprite(0,200,10,400);
        
  /* assign the images to the sprites */
  ball.addImage("ball",img);
  paddle.addImage("paddle",paddle_image);
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9;
  
  tEdge.visible = false;
  bEdge.visible = false;
  lEdge.visible = false;
  rEdge.visible = false;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(tEdge);
  ball.bounceOff(bEdge);
  ball.bounceOff(lEdge);
  
  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle,randomVelocity);

  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  paddle.collide(tEdge);
  paddle.collide(bEdge);
  
  if(keyDown(UP_ARROW)){
     /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y+20;
  }
  drawSprites();
  
}

function randomVelocity()
{
         rand = Math.round(random(1,6));
    console.log(rand);
    switch(rand) {
      case 1: ball.velocityY = 1;
        break;
      case 2: ball.velocityY = 3;
        break;
      case 3: ball.velocityY = 7;
        break;
      case 4: ball.velocityY = 9;
        break;
      case 5: ball.velocityY = 2;
        break;
      case 6: ball.velocityY = 6;
        break;
    }
  

  
   // ball.velocityY = rand;

}

