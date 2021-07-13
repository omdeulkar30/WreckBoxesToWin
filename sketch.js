const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(1250, 800);
  engine = Engine.create();
  world = engine.world;
ground= new Ground(600, 600, 1200, 20)
ground2= new Ground(600, 10, 1200, 20)
ground3= new Ground(10, 400, 20, 800)
ground4= new Ground(1200, 400, 20, 800)
wreckingBall=new WreckingBall(500, 50, 80, 80)
car1=new Car (100, 100, 70, 70)
car2=new Car (100, 100, 70, 70)
car3=new Car (100, 100, 70, 70)
car4=new Car (100, 100, 70, 70)
car5=new Car (100, 100, 70, 70)
car6=new Car (100, 100, 70, 70)
car7=new Car (800, 100, 70, 70)
car8=new Car (800, 100, 70, 70)
car9=new Car (800, 100, 70, 70)
car10=new Car (800, 100, 70, 70)
car11=new Car (800, 100, 70, 70)
car12=new Car (800, 100, 70, 70)
car13=new Car (700, 100, 70, 70)
car14=new Car (700, 100, 70, 70)
car15=new Car (700, 100, 70, 70)
car16=new Car (700, 100, 70, 70)
car17=new Car (700, 100, 70, 70)
car18=new Car (700, 100, 70, 70)
car19=new Car (700, 100, 70, 70)
car20=new Car (700, 100, 70, 70)

chain=new Chain(wreckingBall.body,{x:500, y:50})
}

function draw() {
  background(255,255,255); 
  Engine.update(engine) 
  wreckingBall.display()
 ground.display()
 ground2.display()
 ground3.display()
 ground4.display()
 car1.display()
 car2.display()
 car3.display()
 car4.display()
 car5.display()
 car6.display()
 car7.display()
 car8.display()
 car9.display()
 car10.display()
 car11.display()
 car12.display()
 car13.display()
 car14.display()
 car15.display()
 car16.display()
 car17.display()
 car18.display()
 car19.display()
 car20.display()
 chain.display()
 if(car1.x>1250&&car1.y>800&&
    car2.x>1250&&car2.y>800&&
    car3.x>1250&&car3.y>800&&
    car4.x>1250&&car4.y>800&&
    car5.x>1250&&car5.y>800&&
    car6.x>1250&&car6.y>800&&
    car7.x>1250&&car7.y>800&&
    car8.x>1250&&car8.y>800&&
    car9.x>1250&&car9.y>800&&
    car10.x>1250&&car10.y>800&&
    car11.x>1250&&car11.y>800&&
    car12.x>1250&&car12.y>800&&
    car13.x>1250&&car13.y>800&&
    car14.x>1250&&car14.y>800&&
    car15.x>1250&&car15.y>800&&
    car16.x>1250&&car16.y>800&&
    car17.x>1250&&car17.y>800&&
    car18.x>1250&&car18.y>800&&
    car19.x>1250&&car19.y>800&&
    car20.x>1250&&car20.y>800){
   fill("hotPink")
   textSize(30)
   text("You Win! Because you cleared all the blocks!(YOU GLITCHED THE GAME LOL)",200, 400)
 }
}
function mouseDragged(){
  Matter.Body.setPosition(wreckingBall.body, {x:mouseX, y:mouseY})
}