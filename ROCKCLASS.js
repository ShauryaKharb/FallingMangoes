class ROCK{
    constructor(x,y,r){
        var options={
            isStatic:false , 
            restitution : 1
        }
        this.r = r;
        this.x = x;
        this.y = y;
        this.body=MyBodies.circle(x,y,r/2,options);
        MyWorld.add(world,this.body);
       
        this.image=loadImage("stone.png");

    }
    display(){
       
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        ellipseMode(RADIUS);
        imageMode(CENTER);

        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        //ellipse(0,0,this.radius,this.radius);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }
}