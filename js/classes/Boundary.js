// defines what a boundary is
class Boundary {
  static width = 48;
  static height = 48;
  constructor({ position }) {
    this.position = position;
    this.width = 48;
    this.height = 48;
  }

  draw() {
    c.fillStyle = `rgba(255, 0, 0, ${config.dev.showBoundaries ? "0.3" : "0"})`;
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
