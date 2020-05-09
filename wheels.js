class wheels {
    constructor(x, y) {
      var options = {
        isStatic: true
      }
      this.body = Bodies.circle(x, y, 30, options);
      this.radius = 30;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("grey");
      strokeWeight(9);
      stroke("black")
      ellipse(0, 0, this.radius);
      pop();
    }
  };
  