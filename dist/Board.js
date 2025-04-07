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
        else if (mines <= 0) {
            console.log("Error: Number of mines must be greater than 0.");
            return;
        }
        this.rows = rows;
        this.cols = cols;
        this.numMines = mines;
        this.placedMines = false;
        this.mines = [];
        //this.mines = new Set<string>();
        //initalize board to be row x col of 0's
        //this.board =  new Array(rows).fill(null).map(() => new Array(cols).fill(0)); current ts version doesn't work
        this.board = [];
        for (var i = 0; i < rows; i++) {
            this.board[i] = [];
            for (var j = 0; j < cols; j++) {
                this.board[i][j] = "0";
            }
        }
    }
    //print out the board
    Board.prototype.toString = function () {
        var temp = "";
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.cols; j++) {
                temp += this.board[i][j] + " ";
            }
            console.log(temp);
            temp = "";
        }
    };
    //return number of mines
    Board.prototype.getMines = function () {
        if (this.placedMines) {
            return this.numMines;
        }
        return 0;
    };
    //place the mines 
    Board.prototype.placeMine = function (firstR, firstC) {
        //edge cases
        //check if placed Mines before finished game so not to accidentally replace the current progress 
        if (this.placedMines === true) {
            console.log("Error: Already placed Mines. Restart the game to replace.");
            return;
        }
        //also check if outside bounds
        if (firstR < 0 || firstR >= this.rows || firstC < 0 || firstC >= this.cols) {
            console.log("Error: First Clicked position not on board");
            return;
        }
        if (this.rows * this.cols === 1 || this.rows * this.cols === 0) {
            console.log("Only one space or no space in grid: no mines");
            return;
        }
        //start thelogic 
        this.placedMines = true;
        var n = firstR; //row coordinate of first clicked square
        var m = firstC; //col coordinate of first clicked square
        //place numMines number of mines
        for (var i = 0; i < this.numMines; i++) {
            var r = void 0;
            var c = void 0;
            do {
                // generate random row and column and truncate decimals
                r = Math.floor(Math.random() * this.rows);
                c = Math.floor(Math.random() * this.cols);
                //console.log(r +" " +c)
            } while ( //keep running when these issues are here
            (r === n && c === m) || // don't place a mine in the first clicked cell
                this.mines.indexOf("".concat(r, ",").concat(c)) !== -1 // don't place a mine in the same spot this.mines.has(`${r},${c}`) 
            );
            //add to mines string set
            //this.mines.add(`${r},${c}`);
            this.mines.push("".concat(r, ",").concat(c));
            //console.log(this.mines[0])
            //add to board
            this.board[r][c] = "X";
        }
    };
    Board.prototype.restart = function () {
        this.numMines = 0;
        this.placedMines = false;
        this.mines = [];
        //this.mines = new Set<string>();
    };
    return Board;
}());
exports.Board = Board;
