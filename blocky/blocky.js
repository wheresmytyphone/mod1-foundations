function Block(x, y, a, b) {
      this.x = x;
      this.y = y;
      this.height = a;
      this.width =  b;

    if (a === undefined) {
      this.height = 100;
    }

    if (b === undefined) {
      this.width = 100;
    }

    Block.prototype.moveRight = function() {
      this.x++;
    }

    Block.prototype.moveLeft = function() {
      this.x--;
    }

    Block.prototype.moveDown = function() {
      this.y++;
    }

    Block.prototype.moveUp = function() {
      this.y--;
    }

}

module.exports = Block;
