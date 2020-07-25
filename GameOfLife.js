class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
    this.Neighbors = this.livingNeighbors;
  }


  /**u
   * Returns a 2D Array
   */

  makeBoard(height, width) {
    // TODO: Create and return an 2D Array
    // with `this.heigh` as rows and `this.width` as cols.
    // For example, given a height of 4 and a width of 3, it will generate:
    // [
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    // ]
    height = this.height
    width = this.width
    let arr = [];
    for (let i = 0; i < height; i++) {
      let row = [];
        for (let j = 0; j < width; j++) {
          row.push(0)
        }
        arr.push(row)
    }
    return arr;
  }

  getCell(row, col) {
    let board = this.board; // why not this.arr wouldnt it return just a function value and not the actual
    let cell = board[row][col]
    return cell
  }

  setCell(val, row, col) {
    let board = this.board
    board[row][col] = val
    console.log(board)
  }

  toggleCell(row, col) {
    let board = this.board 
    if(board[row][col] === 0) {
      board[row][col] = 1
    } else {
      board[row][col] = 0
    }
  }


  


  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    // TODO: Return the count of living neighbors.
    let board = this.board;
  
    
    for(let i = 0; i < col; i++) {
      for(let j = 0; j < row; j++) {

        let sum = 0;
        let neighbors = countNeighbors(this.board, i , j);
    //  // 0 0 0 
        // 0 0 0 
        // 0 0 0
        
        // count += board[i][j]; // count self
        // count += board[i - 1][j - 1]; // bottom left
        // count += board[i][j - 1]; // bottom
        // count += board[i + 1][j - 1]; // bottom right
        // count += board[i + 1][j]; //right
        // count += board[i + 1][j + 1]; //top right
        // count += board[i][j + 1]; // top
        // count += board[i - 1][j + 1]; //top left
        // count += board[i - 1][j]; //left
        // count--; // subtract self
      }
    }

  }

  

  /**
   * Given the present board, apply the rules to generate a new board
   * 
   *  tick function is responsible for producing the next iteration of the game.
   *  First, it makes a new board of cells. Then, it should loop over each 
   * cell in the current board, count it's livingNeighbors, and, based on 
   * the Game of life rules, change the cells in the newBoard to their future status.

   */

  tick() {
    const newBoard = this.makeBoard();
    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board
    // (the next iteration of the game)
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors

    // let board = this.board
    // for(i = 0; i < board; i++) {
    //   for(j = 0; j < )

    // }
    

    this.board = newBoard;
  }

   countNeighbors(board, x, y) {

    let sum = 0;

    for(let i = -1; i < 2; i++) {
      for(let j = -1; j < 2; j++) {
        sum += board[i][j];
      }
    }
    sum -= board[i][j];
    return sum;
  }


}
