import { Board } from "./Board";
class Minesweeper{
    rows = 8;
    cols = 8;
    numMines = 10;
    board: Board;
    constructor(){
        this.board = new Board(this.rows, this.cols, this.numMines);
    }
    print(){
        console.log("Board:");
        this.board.toString(); 
        console.log("Mines:");
        console.log(this.board.getMines());
    }   
    placeMines(first: number[]){
        this.board.placeMines(first)
    }
};
const game = new Minesweeper();
const first = [3,3];
game.placeMines(first)
game.print()

// Player clicks the cell at (3, 3)
//game.generateBoard({ row: 3, col: 3 });

// Output the board
//console.log("Generated Board:");
//console.table(game.board.grid);
