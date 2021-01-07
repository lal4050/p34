//Create variables here
var dogg,dog,food,happydog,foodstock;
var database;
var score=20;

function preload()
{
  //load images here
  doghappy=loadImage("images/dogImg1.png");
  dogg=loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250,330);
  dog.addImage(dogg);
  dog.scale=0.2;

  var foodstock = database.ref('Food');
  foodstock.on("value",readstoke);

}


function draw() {  
  background("white");
  if(keyWentDown(UP_ARROW)){
     writestoke(food);
    dog.addImage(doghappy);
    if(score>=1){
      score=score-1
    }else{
      score=score;
    }

  }

  drawSprites();
  //add styles here
  text("note: press up arrow key to feed dargo milk",200,20);
  text("reaming food: "+ score,200,200);


}

function readstoke(data){
  food=data.val();

}

function writestoke(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }

   database.ref('/').update({
     Food:x

   })

  }