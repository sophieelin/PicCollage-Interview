"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var Board = /** @class */ (function () {
    function Board(rows, cols, mines) {
        //edge case: more mines than spaces
        if (mines >= rows * cols) {
            console.log("Error: Too many mines for the grid size");
            return;
        }
        this.rows = rows;
        this.cols = cols;
        this.numMines = mines;
        //this.board =  new Array(rows).fill(null).map(() => new Array(cols).fill(0));
        this.board = [];
        for (var i = 0; i < rows; i++) {
            this.board[i] = [];
            for (var j = 0; j < cols; j++) {
                this.board[i][j] = "0"; // Initialize each element to 0
            }
        }
        this.mines = [];
    }
    Board.prototype.toString = function () {
        var temp = "";
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.cols; j++) {
                temp += "O ";
            }
            console.log(temp);
            temp = "";
        }
    };
    Board.prototype.getMines = function () {
        return this.mines.length;
    };
    Board.prototype.placeMines = function () {
        return 0;
    };
    return Board;
}());
exports.Board = Board;
