class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
    this.Neighbors = this.livingNeighbors;
  }


  /**
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
          row.push(1)
        }
        arr.push(row)
    }
    return arr;
  }

  getCell(row, col) {
    let board = this.board
    let cell = board[row][col]
    return cell
  }

  setCell(val, row, col) {
    let board = this.board
    board[row[col]] = val
    console.log(board)
  }

  toggleCell(row,col) {
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
  
    // let count = 0;
    // for(let i = 0; i < col; i++) {
    //   for(let j = 0; j < row; j++) {

    //     let sum = 0;
    //     let neighbors = count(this.board, i , j);
    //     // 0 0 0 
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
    //   }
    // }
    // return count;
  }



  /**
   * Given the present board, apply the rules to generate a new board
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
}


