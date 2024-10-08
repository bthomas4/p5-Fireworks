class Firework {
    constructor() {
      this.hu = random(255);
      this.firework = new Particle(random(width), height, this.hu, true);
      this.particles = [];
      this.exploded = false;
    }
  
    update() {
      if (!this.exploded) {
        this.firework.applyForce(gravity);
        this.firework.update();
  
        if (this.firework.vel.y >= 0) {
          this.exploded = true;
          this.explode();
        }
      }
      for (var i = this.particles.length - 1; i >= 0; i--) {
        this.particles[i].applyForce(gravity);
        this.particles[i].update();
        if (this.particles[i].done()) {
          this.particles.splice(i, 1);
        }
      }
    }
  
    done() {
      return this.exploded && this.particles.length == 0;
    }
  
    explode() {
      for (var i = 0; i < 100; i++) {
        var p = new Particle(
          this.firework.pos.x,
          this.firework.pos.y,
          this.hu,
          false
        );
        this.particles.push(p);
      }
    }
  
    show() {
      if (!this.exploded) {
        this.firework.show();
      }
      for (var i = this.particles.length - 1; i >= 0; i--) {
        this.particles[i].show();
      }
    }
  }
  