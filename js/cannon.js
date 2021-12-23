class CannonBalls{
    constructor(x,y){
        this.r = 30;
        var options ={
            isStatic:true
        }
        

        this.trajectory = [];
        this.body = Bodies.circle(x, y, this.r, options);
        this.cannonImg = loadImage("Image/cannon.png");
        World.add(world, this.body);

        
    }

    shoot(){ 
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body,{x:30,y:-20});
        

    }

    

    display(){

        var pos = this.body.position;
        push();
        //translate(this.x, this.y);
        imageMode(CENTER);
        image(this.cannonImg,this.body.position.x,this.body.position.y,this.r,this.r);
        pop();

        if (this.body.velocity.x > 0 && pos.x > 10) {
            var position = [pos.x, pos.y];
            this.trajectory.push(position);
          }
      
          for (var i = 0; i < this.trajectory.length; i++) {
            image(this.cannonImg, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
          }
    }
}