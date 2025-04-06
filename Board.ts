export class Board{
    private rows: number;
    private cols: number;
    private numMines: number;
    private board: string [][];
    private mines: string[];
    private placedMines: boolean; //ensures that mines can only be placed once at the start 
     
    constructor (rows: number, cols: number, mines: number){
        //edge case: more mines than spaces
        if (mines>= rows*cols){
            console.log("Error: Too many mines for the grid size");
            return;
        }
        this.rows = rows;
        this.cols =cols;
        this.numMines = mines;
        this.placedMines = false; 
        this.mines = [];
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
    //print out the board
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
    //return number of mines
    getMines(){
        if (this.placedMines){
            return this.numMines;
        }
        return 0;
    }
    //place the mines 
    placeMine(firstR: number, firstC:number){
        //check if placed Mines before finished game so not to accidentally replace the current progress 
        //also check if outside bounds
        if (this.placedMines === true || firstR <0 || firstR >= this.rows ||firstC <0 || firstC >= this.cols ){
            return;
        }
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
                this.mines.indexOf(`${r},${c}`) !== -1 // don't place a mine in the same spot
            )
            //add to mines string set
            this.mines.push(`${r},${c}`);
            //console.log(this.mines[0])
            //add to board
            this.board[r][c] = "X";
        }
    }

}