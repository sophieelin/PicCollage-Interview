"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Board_1 = require("./Board");
var Minesweeper = /** @class */ (function () {
    function Minesweeper(rows, cols, numMines) {
        this.board = new Board_1.Board(rows, cols, numMines);
    }
    Minesweeper.prototype.print = function () {
        console.log("Board:");
        this.board.toString();
        console.log("Mines:");
        console.log(this.board.getMines());
    };
    Minesweeper.prototype.placeMines = function (firstR, firstC) {
        this.board.placeMine(firstR, firstC);
    };
    return Minesweeper;
}());
;
//usage
var game = new Minesweeper(8, 8, 10);
game.print();
console.log("placing mines now");
game.placeMines(3, 3);
game.print();
