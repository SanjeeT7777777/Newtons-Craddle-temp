class Bob {
    constructor(x,y){
      var options = {
        isStatic: true
      }
      this.body = Bodies.circle(x,y,20,options) ;
      this.radius =20;
      
      World.add(world , this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 20);
      
    }
}