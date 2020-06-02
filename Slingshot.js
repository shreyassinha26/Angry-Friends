class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.25,
            length: 10
        }
        this.chain = Constraint.create(options);
        
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA != null){
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.pointB;
            push();

            strokeWeight(4);
            stroke(48 , 22 , 8);
            
            line(pointA.x-25, pointA.y, pointB.x, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x-30, pointB.y-3);
            pop();
            image(this.sling3 , pointA.x-25 , pointA.y-10 , 15 , 30 );
            if(this.chain.stiffness !=0 && pointA.x >= 300){
                this.chain.bodyA = null;
            }
            
        }
        
        image(this.sling1 , 280 , 100 , 25 , 125 );
        image(this.sling2 , 262 , 100 , 25 , 70);
        
        
    }
    attach(bodyA){
        this.chain.bodyA = bodyA;
    }
    
    
}
