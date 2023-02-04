const Game = require("../game/game");

describe("Game", () => {
  describe("Turn one", () => {
    it("Adds a nought to the grid top left", () => {
      const game = new Game();
      game.addSymbol([0]);

      expect(game.grid).toEqual(
        ["X", null, null,
        null, null, null,
        null, null, null]
      );
    });

    it("Adds a cross to the grid bottom left", () => {
      const game = new Game();
      game.addSymbol([6]);

      expect(game.grid).toEqual(
        [null, null, null,
        null, null, null,
        "X", null, null]
      );
    });
  });

  describe("Turn two", () => {
    it("Doesn`t allow another turn in same grid position", () => {
      const game = new Game();

      game.addSymbol([0]);

      expect(() => game.addSymbol([0])).toThrow(Error);
    });
  });

  describe("Automatically switch between O & X", () => {
    it("changes after each turn", () => {
      const game = new Game();
      game.takeTurn([0]);
      game.takeTurn([6]);
      game.takeTurn([8]);

      expect(game.grid).toEqual([
        "O", null, null,
        null, null, null,
        "X", null, "O"
      ]);
    });

    it("allows a player to have a second attempt after an illegal move", () => {
      const game = new Game();
      game.takeTurn([0]);
      expect(() => game.taketurn([0])).toThrow(Error);
      game.takeTurn([1]);

      expect(game.grid).toEqual([
        "O", "X", null,
        null, null, null,
        null, null, null
      ]);
    });
  });

  describe("Game ends", () => {
    describe("when grid is full", () => {
      it("announces a draw", () => {
        const game = new Game();
        game.takeTurn([0]);
        game.takeTurn([1]);
        game.takeTurn([2]);
        game.takeTurn([3]);
        game.takeTurn([4]);
        game.takeTurn([6]);
        game.takeTurn([5]);
        game.takeTurn([8]);
        game.takeTurn([7]);

        expect(game.grid).toEqual([
          "O", "X", "O",
          "X", "O", "O",
          "X", "O", "X"
        ]);
        console.log(game.grid);
        expect(game.endGame()).toEqual("Draw!");
      });
    });

      it("doesn't announce a draw if <9 moves", () => {
        const game = new Game();
        game.takeTurn([0]);
        game.takeTurn([1]);
        game.takeTurn([2]);
        game.takeTurn([3]);
        game.takeTurn([4]);
        game.takeTurn([6]);
        game.takeTurn([5]);
        game.takeTurn([8]);

        expect(game.grid).toEqual([
          "O", "X", "O",
          "X", "O", "O",
          "X", null, "X"
        ]);
        console.log(game.grid);
        expect(game.endGame()).not.toEqual("Draw!");
      });

    describe("when a player wins (horizontally)", () => {
      it("announces a win and stops play", () => {
        const game = new Game();
        game.takeTurn([0]);
        game.takeTurn([3]);
        game.takeTurn([1]);
        game.takeTurn([4]);
        game.takeTurn([2]);

        expect(game.endGame()).toEqual("O wins!");
      });
    });
  });
});
