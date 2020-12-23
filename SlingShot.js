class String{
    constructor(bodyA,pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.01,
            length : 10
        }
        this.string=Constraint.create(options);
        MyWorld.add(world,this.string);
        this.pointB=pointB;
    }
    fly(){
        this.string.bodyA=null;
    }
    attach(body){
        this.string.bodyA = body;
    }
    display(){
        if(this.string.bodyA){
        var BodyA=this.string.bodyA.position;
        //var BodyB=this.string.pointB.position;
        push();
        strokeWeight(7);
        stroke("black");
        fill("white");
        line(BodyA.x,BodyA.y,this.string.pointB.x,this.string.pointB.y);
        pop();
        }
    }
    
    }