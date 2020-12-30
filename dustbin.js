class Dustbin {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 200;
        this.h = 200;
        this.t = 20;
        this.angle = 0;
        this.bBody = Bodies.rectangle(this.x, this.y, this.w, this.t, this.h, {isStatic : true});
        this.lBody = Bodies.rectangle(this.x - this.w/2,this.y - this.h/2, this.t, this.h, {isStatic : true});
        Matter.Body.setAngle(this.lBody, this.angle);

        this.rBody = Bodies.rectangle(this.x + this.w/2, this.y + this.h/2, this.t, this.h, {isStatic : true});
        Matter.Body.setAngle(this.rBody, (-1)*this.angle);
        World.add(world, lBody);
        World.add(world, rBody);
        World.add(world, bBody);
      }
    display(){
        posB = this.bBody.position;
        posL = this.lBody.position;
        posR = this.rBody.position;
        push();
        translate(posL.x,posL.y);
        rectMode(CENTER);
        angleMode(RADIANS); 
        stroke(255);
        fill(255);
        rotate(this.angle);
        rect(0,0, this.t, this.h)
        pop();
        
        push();
        translate(posR.x, posR.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        stroke(255);
        fill(255);
        rotate((-1)*this.angle)
        rect(0,0,this.t,this.h)
        pop()

        push();
        translate(posB.x,posB.y)
        rectMode(CENTER);
        angleMode(RADIANS);
        stroke(255);
        fill(255);
        rect(0,0,this.w,this.t);
        pop();


    }
    }
