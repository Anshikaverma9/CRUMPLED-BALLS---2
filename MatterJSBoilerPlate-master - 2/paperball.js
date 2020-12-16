class Paperball {
    constructor(x, y) {
        var options = {
          'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
            
        }
        this.body = Bodies.circle(x,y,30, options);
        this.r = 30;
        
        this.addImage()
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        ellipseMode(CENTER);
        fill("pink");
        ellipse(0, 0, this.r, this.r);
        pop();
    
      }
}