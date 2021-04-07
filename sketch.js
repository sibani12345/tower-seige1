const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;





function preload() {


}


function setup(){


    ground = new Base(100,200,60,60);
    stand1 = new Base(100,100,60,60);
    stand2 = new Base();
    //level1
    block1 = new Block(330,235);
    block2 = new Block(360,235);
    block3 = new Block(390,235);
    block4 = new Block(420,235);
    block5 = new Block(450,235);
    //level2
    block6 = new Block(360,195);
    block7 = new Block(390,195);
    block8 = new Block(420,195);
    //top
    block9 = new Block(390,155);
}

function draw(){
    background("black");
    
}