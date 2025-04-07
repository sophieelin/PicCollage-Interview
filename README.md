**Installation Instructions**
Cd to the Minesweepr folder and compile the Typescript files using the following command in Terminal
```ts compile
tsc Minesweeper.ts
```
Then, run the file using the following command, 
```ts run command
npx ts-node Minesweeper.ts
```
To create a game with a specific the grid size or number of mines, you can do so by creating a new instance of the Minesweeper class. The parameters are (num of rows, num of columns, num of mines).
The following is an 8x8 grid with 10 mines.
```create new instance of class
const game = new Minesweeper(8, 8, 10);
```
To place the mines, enter the first clicked square in the form of (row, col), to the two parameters, respectively. The following command places mines where the first clicked square is located at (3, 3).
```place mines
game.placeMines(3, 3);
```
To print out the current grid and current number of mines, use the print() method.
```print method
game.print();
```
