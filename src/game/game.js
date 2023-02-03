class Game {
  constructor() {
    this.grid = [[null, null, null],[null, null, null],[null, null, null]]
  }

  addSymbol(coords, symbol) {
    this.grid[coords[0]][coords[1]] = symbol
    return this.grid
  }

} 
module.exports = Game;

// input: [0,0]
// coords[0] = this.grid[0]
// coords[1] = this.grid[0][0]
// output: this.grid[0][0]
// [[symbol, null, null],[null, null, null],[null, null, null]]

// array = [a,b,c]

// array[0] = z

// [z,b,c]