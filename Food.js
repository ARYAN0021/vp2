class Food{
    constructor(){
        this.foodStock=0
        this.lastfeed
        this.image=loadImage("Milk.png");
    }
    getfoodStock(){
     return this.foodStock
    }
   
     updateFoodStock(foodStock){
        this.foodStock = foodStock
}

getFeedTime(lastfeed){
    this.lastfeed=lastfeed;
}

     deductFood(){
     if(this.foodStock>0){
        this.foodStock=this.foodStock-1
    }
}
display(){
    var x=80,y=100

    imageMode(CENTER)
    image(this.image,720,220,70,70);

     if(this.foodStock!=0){
for(var i=0;i<this.foodStock;i++){
    if(i % 10==0){
        x=80;
        y=y+50;
    }
    imageMode(CENTER)
    this.image(this.image,x,y,50,50);
      }
    }
  }
}