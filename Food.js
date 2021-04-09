class Food {
    constructor() {
        var foodstock;
    }
  
     preload() {
      Milkcont=loadImage("Images/Milk.png");
    }

    getFoodStock() {
    }

    updateFoodStock(){
    }

    deductMethod(){
    }
  
      display(){
    
      var x=80, y=100
        
    imageMode(CENTER);
    //image(this.Milkcont,720,220,70,70);
    image(Milkcont,900,220,70,70);

    if(foodstock!=0){
      for(var i=0; i<foodstock;i++){
        if(i%10==0){
          x=80;
          y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30
      }
    }
    }
    }
  