class Bird extends BaseClass {
  constructor(x,y) {
    super(x,y,50,50);
    this.image = loadImage("sprites/boy-png-clipart-2.png");
    Matter.Body.setStatic(this.body , true);
    this.trailImg = loadImage("sprites/smoke.png");
    this.location = [];
    this.PLAY = 0;
    this.SERVE = 1;
    this.gamestate = this.SERVE;
  }
  
  display() {
    
    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>300){
      var position = [this.body.position.x , this.body.position.y];
      this.location.push(position);
    
    }
    
    for(var i = 0; i<this.location.length ; i++){
      image(this.trailImg , this.location[i][0] , this.location[i][1] );
      
    }
  }
  
}

