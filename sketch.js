var dog,dogimg,dogHappy,foodStock,foods;
var database;
var food1;
var fedtime,lastfeed,foodObj

function preload(){
dogimg = loadImage("Dog.png");
dogHappy = loadImage("happydog.png");

}

function setup() {
  database = firebase.database();
  createCanvas(800, 700);
  
  foodObj = new Food();

  dog = createSprite(400,500,50,50);
  dog.addImage(dogimg);
  dog.scale = 0.3;
  
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
 
  feed=createButton("Feed the Dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)

  addFood=createButton("Add Food")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)

}


function draw() {
  background(46,139,87); 

 
 foodObj.display();

feedtime=database.ref('FeedTime')
feedtime.on("value",function(data){
lastfed=data.val();
});


fill (255,255,254)
textSize(20);
if(lastfeed>=12){
text("Last Feed :" + lastfeed % 12 + "PM",350,30);
}else if(lastfeed==0){
text("Last Feed : 12 AM",350,30)
}else
text("Last Feed :" + lastfeed + "AM",350,30)

  drawSprites();
 
}

function readStock(data){
  foods = data.val();
  console.log(foods)
  foodObj=updateFoodStock(foods)
}


function addFoods(){
  foods++;
database.ref('/').update({
Food:foods

});
}

function feedDog(){
dog.addImage(dogHappy);
foodObj=updateFoodStock(foodObj.getFoodStock()-1);
database.ref('/').update({
Food:foodObj.getFoodStock(),
feedtime:hour()

});
}