class CannonBalls{
    constructor(x,y){
        this.r = 30;
        this.x = x;
        this.y = y;
        this.cannonImg = loadImage("Image/cannon.png");
        
    }
    display(){

        push();
        translate(this.x, this.y);
        imageMode(CENTER);
        image(this.cannonImg,0,0,this.r,this.r);
        pop();
    }
}