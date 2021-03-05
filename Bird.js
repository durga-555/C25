class Bird extends parentclass{ 
    constructor(x, y) {
      //we use super to transfer all the propertities of the parent class to child class throug parent class constructor
      super(x,y,50,50)
      this.image=loadImage("sprites/bird.png")
    }
    display(){
      this.body.position.x=mouseX
      this.body.position.y=mouseY
      super.display();
    }
  }