class Particle {
    constructor(x, y, hu, firework) {
      this.pos = createVector(x, y);
      this.lifespan = 255;
      this.hu = hu;
      this.acc = createVector(0, 0);
      this.firework = firework;
      if (this.firework) {
        this.vel = createVector(0, random(-12, -8));
      } else {
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(1, 5));
      }
    }
  
    applyForce(force) {
      this.acc.add(force);
    }
  
    update() {
      if (!this.firework) {
        this.vel.mult(0.95);
        this.lifespan -= random();
      }
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
  
    done() {
      return this.lifespan < 0;
    }
  
    show() {
      colorMode(HSB);
      if (!this.firework) {
        strokeWeight(2);
        stroke(this.hu, 255, this.lifespan);
      } else {
        stroke(this.hu, 255, 255);
      }
      point(this.pos.x, this.pos.y);
    }
  }
  