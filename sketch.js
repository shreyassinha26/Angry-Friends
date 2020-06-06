const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingshot;
var score = 0;
var sizeBird = 1;

function preload() {

    getTime();
    
    
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(280,130);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new Slingshot(bird.body,{x:300 , y:130});
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
        Engine.update(engine);
        strokeWeight(4);
        if(keyCode === 49){
            sizeBird = 1;

        }
        else if(keyCode === 50){
            sizeBird = 1.2;
        }
        //console.log(bird.body.position);
        box1.display();
        box2.display();
        ground.display();
        pig1.display();
        log1.display();
        
        box3.display();
        box4.display();
        pig3.display();
        log3.display();
    
        box5.display();
        log4.display();
        log5.display();
        
        platform.display();
        //log6.display();
        slingshot.display(); 
        bird.display(sizeBird);  
        increaseScore(pig1.visibility);
        increaseScore(pig3.visibility);
        textSize(12);
        text("Score : " + score , 1000 , 20);
    }
    else{
        textSize(60);
        text("Loading" , 600 , 200);
    }
    
   
    
}
function mouseDragged(){
    if(mouseX<290 && bird.gamestate == bird.SERVE){
        Matter.Body.setPosition(bird.body , {x : mouseX , y:mouseY});
    }
    
}

function mouseReleased(){
    bird.gamestate = bird.PLAY;
    Matter.Body.setStatic(bird.body , false);
}
function keyPressed(){
    if(keyCode == 32  && bird.gamestate == bird.PLAY){
        Matter.Body.setPosition(bird.body , {x : 280 , y:130});
        bird.body.angle = 0;
        slingshot.attach(bird.body);
        bird.gamestate = bird.SERVE;
        Matter.Body.setStatic(bird.body , true);
        bird.location = [];
    }
}
async function getTime(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/asia/kolkata" );
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var time = datetime.slice(11 , 13);
    console.log(time);
    if(time>=6 && time<=19){
        backgroundImg = loadImage("sprites/bg.png");
    }
    else{
        backgroundImg = loadImage("sprites/bg2.jpg");
    }
    
        
    
}
function increaseScore(visibility){
    if(visibility<0&& visibility>-1005){
        score++;
    }
}

