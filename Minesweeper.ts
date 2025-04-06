import { Board } from "./Board";
class Minesweeper{
    board: Board;
    constructor(rows: number, cols: number, numMines: number){
        this.board = new Board(rows, cols, numMines);
    }
    print(){
        console.log("Board:");
        this.board.toString(); 
        console.log("Mines:");
        console.log(this.board.getMines());
    }   
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
