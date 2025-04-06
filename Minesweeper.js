"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Board_1 = require("./Board");
var Minesweeper = /** @class */ (function () {
    function Minesweeper() {
        this.rows = 8;
        this.cols = 8;
        this.numMines = 10;
        this.first = { row: 3, col: 3 };
        this.board = new Board_1.Board(this.rows, this.cols, this.numMines);
    }
    Minesweeper.prototype.print = function () {
        console.log("Board:");
        this.board.toString();
        console.log("Mines:");
        console.log(this.board.getMines());
    };
    return Minesweeper;
}());
;
var game = new Minesweeper();
game.print();
// Player clicks the cell at (3, 3)
//game.generateBoard({ row: 3, col: 3 });
// Output the board
//console.log("Generated Board:");
//console.table(game.board.grid);
