class MANGO{
    constructor(x,y,r){
        var options={
            isStatic : true
        }   
        this.r = r;
        this.x=x;
        this.y=y
        this.body=MyBodies.circle(x,y,r,options);
        MyWorld.add(world,this.body);
     
        this.image=loadImage("mango.png");

    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        
        push();

        translate(pos.x,pos.y);
        rotate(angle);

        ellipseMode(RADIUS);
        imageMode(CENTER);

        //fill("white");
        //ellipse(0,0,this.radius,this.radius);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
        
    }
    
}