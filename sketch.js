
const MyEngine = Matter.Engine;
const MyWorld = Matter.World;
const MyBodies = Matter.Bodies;
const MyBody = Matter.Body;
const Constraint=Matter.Constraint;

var mango1;

function preload(){
  boyI=loadImage("boy.png");
  treeI=loadImage("tree.png");
}

function setup() {
	createCanvas(1500, 1000);


	engine = MyEngine.create();
	world = engine.world;

	//Create the Bodies Here.
  mango1=new MANGO(770,400,30);
  mango2=new MANGO(1070,380,30);
  mango3=new MANGO(900,470,30);
  mango4=new MANGO(1150,230,30);
  mango5=new MANGO(970,260,30);
  mango6=new MANGO(1240,400,30);
  mango7=new MANGO(1390,450,30);

	rock = new ROCK(145+75,740,100);

	string= new String(rock.body,{x : 145+75,y:740});
  
}


function draw() {
  rectMode(CENTER);
  MyEngine.update(engine);
  background(200);

  imageMode(CENTER);
  image(boyI,325,840,350,400);
  image(treeI,1080,550,850,850)

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  string.display();
  rock.display();

  detectcollision(rock,mango1);
  detectcollision(rock,mango2);
  detectcollision(rock,mango3);
  detectcollision(rock,mango4);
  detectcollision(rock,mango5);
  detectcollision(rock,mango6);
  detectcollision(rock,mango7);
  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  string.fly();
}

function keyPressed(){
  if (keyCode === 13){
    Matter.Body.setPosition(rock.body,{x: 220 , y : 740})
    string.attach(rock.body);
  }
}

function detectcollision(lstone,lmango){
   /*var collision = Matter.SAT.collides(lstone,lmango); 
   if(collision.collided){ console.log("collided");
   Matter.Body.setStatic(lmango,false); 
   }*/

     mangoBodyPosition=lmango.body.position;
     stoneBodyPosition=lstone.body.position;

     var distance = dist (stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
     //console.log(distance);
     console.log(lmango.r+lstone.r);
     if(distance<=lmango.r+lstone.r){ 
       //console.log(distance);
        Matter.Body.setStatic(lmango.body,false); 
      } 
}