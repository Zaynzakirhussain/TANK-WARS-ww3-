class Outerwheels {
    constructor(x, y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x, y, 55, options);
      this.radius = 55;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("green");
      strokeWeight(9);
      stroke("black")
      ellipse(0, 0, this.radius);
      pop();
    }
  };
