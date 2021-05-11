class Log {
    constructor(x, y, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 25, height, options);
      this.height = height;

      Matter.Body.setAngle(this.body, angle);

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(7);
      stroke("purple");
      fill("violet");
      rect(0, 0, 15, this.height);
      pop();
    }
  };
  