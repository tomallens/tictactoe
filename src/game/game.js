class Game {
  constructor() {
    this.grid = [[null, null, null],[null, null, null],[null, null, null]]
    this.symbol = 'X'
  }

  addSymbol(coords) {
    if (this.grid[coords[0]][coords[1]] != null) {throw new Error("Error, can't take turn in same position"); 
  } else {
    this.grid[coords[0]][coords[1]] = this.symbol
    return this.grid}
  }

  changeSymbol(currentSymbol) {
    if (currentSymbol === 'O') {
      this.symbol = 'X'
    } else {
      this.symbol = 'O'
    }
  } 

  takeTurn(coords) {
    this.changeSymbol(this.symbol)
    this.addSymbol(coords)
  }

  endGame() {
    if (this.grid.indexOf(null) === -1) {
    return 'Draw!' }
  }
} 

module.exports = Game;