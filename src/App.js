import { generateGrid } from './visualizations/visualizations';

export const generateGridOfPaths = (rows, columns) => {
  const grid = generateGrid(rows, columns);
  for (let i = 0; i < rows; i++){
    for (let j = 0; j < columns; j++){
      if (j > 0 && i > 0) {
        const theCellAbove = grid[i - 1][j];
        const cellToTheLeft = grid[i][j - 1];
        grid[i][j] = theCellAbove + cellToTheLeft;
      } else if (j > 0 && i === 0) {
        const cellToTheLeft = grid[i][j - 1];
        grid[i][j] = cellToTheLeft;
      } else if (j === 0 && i > 0) {
        const theCellAbove = grid[i - 1][j];
        grid[i][j] = theCellAbove;
      } else {
        grid[i][j] = 1;
      }
    }
  }
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
