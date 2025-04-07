/**
 * Represents the game board for Minesweeper.
 */
export class Board{
    private rows: number;
    private cols: number;
    private numMines: number;
    private board: string [][];
    //private mines: Set<string>; for ts e2015 or later
    private mines: string[];
    private placedMines: boolean; //ensures that mines can only be placed once at the start 
    
    
    /**
     * Creates a new board with the specified dimensions and number of mines
     * @param rows - Number of rows
     * @param cols - Number of columns
     * @param mines - Number of mines
     */
    constructor (rows: number, cols: number, mines: number){
        //edge case: more mines than spaces
        if (mines>= rows*cols){
            console.log("Error: Too many mines for the grid size");
            return;
        }
        else if(mines <= 0) {
            console.log("Error: Number of mines must be greater than 0.");
            return;
        }
        this.rows = rows;
        this.cols =cols;
        this.numMines = mines;
        this.placedMines = false; 
        this.mines = [];
        //this.mines = new Set<string>();

        //initalize board to be row x col of 0's
        //this.board =  new Array(rows).fill(null).map(() => new Array(cols).fill(0)); current ts version doesn't work
        this.board = [];
        for (let i = 0; i < rows; i++) {
            this.board[i] = [];
            for (let j = 0; j < cols; j++) {
                this.board[i][j] = "0";  
            }
        }
    }
    

    /**
     * Prints the current state of the board
     */
    toString(){
        let temp: string = "";
        for (let i = 0; i < this.rows;i++){
            for( let j = 0; j < this.cols; j++){
                temp += this.board[i][j]+" ";
            }
            console.log(temp);
            temp = "";
        }
    }
     /**
     * Returns the number of mines on the board
     * @returns Number of mines 
     */
    getMines(){
        if (this.placedMines){
            return this.numMines;
        }
        return 0;
    }
    
      /**
     * Randomly places the given number of mines on the board, avoiding the first clicked cell
     * @param firstR - Row index of the first clicked cell
     * @param firstC - Column index of the first clicked cell
     */
    placeMine(firstR: number, firstC:number){
        //edge cases
        //check if placed Mines before finished game so not to accidentally replace the current progress 
        if (this.placedMines === true ){
            console.log("Error: Already placed Mines. Restart the game to replace.");
            return;
        }
           //also check if outside bounds
        if (firstR <0 || firstR >= this.rows ||firstC < 0 || firstC >= this.cols ){
            console.log("Error: First Clicked position not on board");
            return;
        }
        if (this.rows*this.cols === 1 || this.rows*this.cols === 0){
            console.log("Only one space or no space in grid: no mines");
            return;
        }

        //start thelogic 
        this.placedMines = true; 
        let n: number = firstR //row coordinate of first clicked square
        let m: number = firstC //col coordinate of first clicked square
        //place numMines number of mines
        for (let i = 0; i < this.numMines; i++) {
            let r: number;
            let c: number;
            do {
                // generate random row and column and truncate decimals
                r = Math.floor(Math.random() * this.rows);
                c = Math.floor(Math.random() * this.cols);

                //console.log(r +" " +c)
            } while ( //keep running when these issues are here
                (r === n && c === m) || // don't place a mine in the first clicked cell
               this.mines.indexOf(`${r},${c}`) !== -1 // don't place a mine in the same spot this.mines.has(`${r},${c}`) 
            )
            //add to mines string set
            //this.mines.add(`${r},${c}`);
            this.mines.push(`${r},${c}`);

            //console.log(this.mines[0])
            //add to board
            this.board[r][c] = "X";
        }
    }

     /**
     * Resets the game board state for a new game
     */
    restart(){
        this.numMines = 0;
        this.placedMines = false; 
        this.mines = [];
        //this.mines = new Set<string>();
    }

}