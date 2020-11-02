class Log extends BaseClass {
    constructor(x, y, height, width) {

      super(x,y,20,height)
      
      Matter.Body.setAngle(this.body, width);
     
    }
    
  };