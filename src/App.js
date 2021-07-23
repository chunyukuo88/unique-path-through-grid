import { generateGrid } from './visualizations/visualizations';

export const generateGridOfPaths = (rows, columns) => {
  const grid = generateGrid(rows, columns);
  for (let i = 0; i < rows; i++){
    if (i === 0) {
      for (let j = 0; j < columns; j++){
        grid[i][j] = 1;
      };
    };
    for (let j = 0; j < columns; j++){
      if (j === 0) {
        grid[i][j] = 1;
        break;
      }
      let cellToTheLeft = grid[i][j-1];
      console.log(cellToTheLeft)
      let theCellAbove = grid[i-1][j];
      console.log(theCellAbove)
      grid[i][j] = cellToTheLeft + theCellAbove;
    }
  }
  console.log(grid);
  return grid[rows - 1][columns - 1];
};

/**
 [
  [  1,  1,  1,  1  ],
  [  1,  2,  3,  4  ],
  [  1,  3,  6,  10 ],
  [  1,  4,  10, 20 ]
 ]
 * */
