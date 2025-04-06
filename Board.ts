export class Board{
    private rows: number;
    private cols: number;
    private numMines: number;
    private board: string [][];
    private mines: string[];
     
    constructor (rows: number, cols: number, mines: number){
        //edge case: more mines than spaces
        if (mines>= rows*cols){
            console.log("Error: Too many mines for the grid size");
            return;
        }
        this.rows = rows;
        this.cols =cols;
        this.numMines = mines;

        //initalize board to be row x col of 0's
        //this.board =  new Array(rows).fill(null).map(() => new Array(cols).fill(0)); current ts version doesn't work
        this.board = [];
        for (let i = 0; i < rows; i++) {
            this.board[i] = [];
            for (let j = 0; j < cols; j++) {
                this.board[i][j] = "0";  
            }
        }
        this.mines = []; 
    }
    //print out 
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
    getMines(){
        return this.mines.length;
    }
    placeMines(first: number[]){
        return 0;
    }
}