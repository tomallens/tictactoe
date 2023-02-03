const Game = require('../game/game');

describe('Game', () => {
  describe('Turn one', () => {
    it('Adds a nought to the grid top left', () => {
      const game = new Game();
      game.addSymbol([0,0]);

      expect(game.grid).toEqual([['X', null, null],[null, null, null],[null, null, null]]);
    })

    it('Adds a cross to the grid bottom left', () => {
      const game = new Game();
      game.addSymbol([2,0]);

      expect(game.grid).toEqual([[null, null, null],[null, null, null],['X', null, null]]);
    })
  })

  describe('Turn two', () => {
    it('Doesn`t allow another turn in same grid position', () => {
      const game = new Game();

      game.addSymbol([0,0]);

      expect(() => game.addSymbol([0,0], 'X')).toThrow(Error)
    })
  })

  describe('Automatically switch between O & X', () => {
    it('changes after each turn', () => {
      const game = new Game();
      game.takeTurn([0,0]);
      game.takeTurn([2,0]);
      game.takeTurn([2,2]);

      expect(game.grid).toEqual([['O', null, null],[null, null, null],['X', null, 'O']]);
    })
  })
})





// const Frame = require('../lib/frame');

// describe('Frame', () => {
//   describe('#addRolls', () => {
//     it('adds 2 rolls to rolls array', () => {
//       const frame = new Frame();
//       frame.addRolls(6);
//       frame.addRolls(1);
//       expect(frame.frameArr()).toEqual([6, 1]);
//     });
//     it("doesn't add 3rd roll into frame", () => {
//       const frame = new Frame();
//       frame.addRolls(6);
//       frame.addRolls(1);
//       frame.addRolls(1);
//       expect(frame.frameArr()).toEqual([6, 1]);
//     });
//   });

//   describe('#sumRolls', () => {
//     it('sums rolls in a frame to return a raw score', () => {
//       const frame = new Frame();
//       frame.addRolls(6);
//       frame.addRolls(1);
//       expect(frame.sumRolls()).toEqual(7);
//     });
//   });

//   describe('#isSpare', () => {
//     it('returns true if sum = 10', () => {
//       const frame = new Frame();
//       frame.addRolls(9);
//       frame.addRolls(1);
//       expect(frame.isSpare()).toEqual(true);
//     });
//     it('returns false if sum != 10', () => {
//       const frame = new Frame();
//       frame.addRolls(6);
//       frame.addRolls(1);
//       expect(frame.isSpare()).toEqual(false);
//     });
//     it('returns false if first roll = 10', () => {
//       const frame = new Frame();
//       frame.addRolls(10);
//       expect(frame.isSpare()).toEqual(false);
//     });
//   });

//   describe('#isStrike', () => {
//     it('returns first roll = 10', () => {
//       const frame = new Frame();
//       frame.addRolls(10);
//       expect(frame.isStrike()).toEqual(true);
//     });
//     it('returns false if first roll != 10', () => {
//       const frame = new Frame();
//       frame.addRolls(9);
//       frame.addRolls(1);
//       expect(frame.isStrike()).toEqual(false);
//     });
//     it('returns false if second roll = 10', () => {
//       const frame = new Frame();
//       frame.addRolls(0);
//       frame.addRolls(10);
//       expect(frame.isStrike()).toEqual(false);
//     });
//   });

//   describe('#isComplete', () => {
//     it('is true if frame has two rolls', () => {
//       const frame = new Frame();
//       frame.addRolls(6);
//       frame.addRolls(1);
//       expect(frame.isComplete()).toEqual(true);
//     });
//     it('is false if frame has one roll <10', () => {
//       const frame = new Frame();
//       frame.addRolls(6);
//       expect(frame.isComplete()).toEqual(false);
//     });
//     it("is true if frame's 1st roll = 10", () => {
//       const frame = new Frame();
//       frame.addRolls(10);
//       expect(frame.isComplete()).toEqual(true);
//     });
//   });
// });