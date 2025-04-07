import { Board } from "./Board";
/**
 * Represents a Minesweeper game.
 */
class Minesweeper{
    board: Board;

     /**
     * Initializes a new Minesweeper game with the given dimensions and number of mines
     * @param rows - Number of rows of the board
     * @param cols - Number of columns of the board
     * @param numMines - Number of mines to place
     */
    constructor(rows: number, cols: number, numMines: number){
        this.board = new Board(rows, cols, numMines);
    }

     /**
     * Prints the current state of the board and the mine locations
     */
    print(){
        console.log("Board:");
        this.board.toString(); 
        console.log("Mines:");
        console.log(this.board.getMines());
    }   

     /**
     * Places the mines on the board
     * @param firstR - Row index of first clicked space
     * @param firstC - Column index of first clicked space
     */
    placeMines(firstR:number, firstC: number){
        this.board.placeMine(firstR,firstC);
    }
};

//usage
const game = new Minesweeper(8, 8, 10);
game.print();
console.log("placing mines now")
game.placeMines(3, 3);
game.print();
