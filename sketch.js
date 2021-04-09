var dog,sadDog,happyDog, milkSpr, MilkImgCont, Milk;
var foodObj;
var foodstock, getFoodStock, updateFoodStock, deductFood;
var buttonAddFood, buttonFeedPet;
var database, firebase;
var foodS;

//AddFood, FeedPet , foodObj;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  MilkImgCont = loadImage ("Images/Milk.png");
  Milk = loadImage ("Images/MilkImage.png");

}

function setup() {
  createCanvas(1000,400);

  function update(state)
{
   readState=database.ref('gameState');
   readState.on("value",function(data){
     gameState=data.val();
   });
}
  

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodObj = new Food (200,200,30,30);

  milkSpr = createSprite(250,200,30,30);
  milkSpr.addImage(MilkImgCont);
  milkSpr.scale=0.15;

  milk = createSprite(300,200,30,30);
  milk.addImage(Milk);
  milk.scale=0.15;


  var title = createElement('h3');
        title.html("VIRTUAL PET");
        title.position(600,100);

        buttonAddFood = createButton('+');
        buttonFeedPet = createButton('FeedPet');

        buttonAddFood.position(900,150);
        buttonFeedPet.position(1000,150);

        buttonAddFood.mousePressed(AddFood);
        buttonFeedPet.mousePressed(FeedPet);

}

function draw() {
  background(46,139,87);
  drawSprites();
  var play;
  play = createButton('Play')


  foodObj.display();
  play.display();

 
}

//function to read food Stock
function AddFood(){
foodS++;
database.ref('/').update({Food:foodS})
};

function FeedPet(){


};

//function to update food stock and last fed time


//function to add food in stock


function update(state)
{
 database.ref('/').update({
   gameState:state })
}