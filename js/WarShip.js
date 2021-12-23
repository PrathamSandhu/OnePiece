class WarShip{
    constructor(x,y,w,h,p){
       /* var options = {
            restituion : 0.8,
            friction : 0.02,
        }
        */

        this.body = Bodies.rectangle( x, y, w, h);
        this.width = w;
        this.height = h;
        this.boatPosition = p;
        this.image = loadImage("Images/warShip");

        World.add(world,this.body);

    }
    display(){

        var angle = this.body.angle;
        var pos = this.body.position;

        push();

        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,this.boatPosition,this.width,this.height)



        pop();



    }

    
    }