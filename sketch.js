var dog, happyDog, database, foodS, foodStock
var dogImg, dogHappyImg;
var dogfood, dogfoodImg;



function preload()
{
  dogImg = loadImage("Dog.png");
  dogHappyImg = loadImage("happydog.png");
  dogfoodImg = loadImage("dogfood.png");
  

}

function setup() {
  database = firebase.database();
  createCanvas(500, 400);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.15;

  emo = createSprite(200,200,1,1);
  
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  foodStock.set(50);
  
  dogfood = createSprite(140,335,10,10);
  dogfood.addImage(dogfoodImg);
  dogfood.scale = 0.050;

  dogfood1 = createSprite(210,280,10,10);
  dogfood1.addImage(dogfoodImg);
  dogfood1.scale = 0.050;
  dogfood1.visible = false;


  for (var i = 5; i < 500; i=i+10) 
{

var dot = createSprite(i, 5, 3, 3);
dot.shapeColor = "brown";

}
for (var i = 5; i < 500; i=i+10) 
{

var dot1 = createSprite(i, 395, 3, 3);
dot1.shapeColor = "red";

}
for (var i = 5; i < 500; i=i+10) 
{

var dot1 = createSprite(495,i, 3, 3);
dot1.shapeColor = "blue";

}
for (var i = 5; i < 500; i=i+10) 
{

var dot1 = createSprite(5,i, 3, 3);
dot1.shapeColor = "green";

}
}


function draw() {  
  background("orange")


  if(foodS !== 0){
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappyImg);
    dogfood1.visible = true;

     
  }

  if(keyWentUp(DOWN_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg);
    dogfood1.visible = false;
  }
}

if(foodS == 0){
  
  dog.addImage(dogImg);
  foodS = 50 ;

}




  drawSprites();
  textSize(17);
  fill("black");
  text("I am your little pet dog sandy..😍 pls feed me i am so hungry😋",20,150);
  fill("black");
  text("Long Press up arrow key to feed your pet Dog sandy..😍",50,50);
  fill("black");
  text("dogfood Remaining : "+foodS,170,340);
  fill("black");
  text("press the down arrow key to get your dog in normal position..😍",15,100);
}

//function to read values from DB
function readStock(data)
{

  foodS = data.val();
}

//function to write values in DB
function writeStock(x){

  if(x<=0){
    x = 0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}

