import { generateGrid } from './visualizations/visualizations';

export const generateGridOfPaths = (rows, columns) => {
  const grid = generateGrid(rows, columns);
  for (let i = 0; i < rows; i++){
    for (let j = 0; j < columns; j++){
      if (isNotAlongLeftOrTopBorder(i, j)) {
        const theCellAbove = grid[i - 1][j];
        const cellToTheLeft = grid[i][j - 1];
        grid[i][j] = theCellAbove + cellToTheLeft;
      } else if (isAlongTheTopBorder(i, j)) {
        const cellToTheLeft = grid[i][j - 1];
        grid[i][j] = cellToTheLeft;
      } else if (isAlongTheLeftBorder(i, j)) {
        const theCellAbove = grid[i - 1][j];
        grid[i][j] = theCellAbove;
      } else {
        grid[i][j] = 1;
      }
    }
  }
  console.table(grid);
  return grid[rows - 1][columns - 1];
};

const isNotAlongLeftOrTopBorder = (i, j) => j > 0 && i > 0;

const isAlongTheTopBorder = (i, j) => j > 0 && i === 0;

const isAlongTheLeftBorder = (i, j) => j === 0 && i > 0;


/**
 [
  [  1,  1,  1,  1  ],
  [  1,  2,  3,  4  ],
  [  1,  3,  6,  10 ],
  [  1,  4,  10, 20 ]
 ]
 * */
