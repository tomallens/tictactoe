class Game {
  constructor() {
    this.grid = [
      null, null, null,
      null, null, null,
      null, null, null,
    ];
    this.symbol = "X";
  }

  addSymbol(coords) {
    if (this.grid[coords] != null) {
      throw new Error("Error, can't take turn in same position");
    } else {
      this.grid[coords] = this.symbol;
      return this.grid;
    }
  }

  changeSymbol(currentSymbol) {
    currentSymbol === "O" ? (this.symbol = "X") : (this.symbol = "O")
  }

  takeTurn(coords) {
    this.changeSymbol(this.symbol);
    this.addSymbol(coords);
  }

  endGame() {

    const winningConditions = [
      [0, 1, 2],  //horizontal
      [3, 4, 5],  //horizontal
      [6, 7, 8],  //horizontal
      [0, 3, 6],  //vert
      [1, 4, 7],  //vert
      [2, 5, 8],  //vert
      [0, 4, 8],  //diagonal
      [2, 4, 6]   //diagonal
  ];


    if (this.grid.indexOf(null) === -1) {
      return "Draw!";
    } else { return "BLAH"}
  }
}

module.exports = Game;
