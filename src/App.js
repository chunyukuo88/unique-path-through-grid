import { generateGrid } from './visualizations/visualizations';

export const calculateUniquePaths = (rows, columns, obstacleCoordinates) => {
  const grid = generateGrid(rows, columns);
  if (obstacleCoordinates) {
    for (let key in obstacleCoordinates) {
      addObstaclesToGrid(grid, key, obstacleCoordinates);
    }
  }
  for (let i = 0; i < rows; i++){
    for (let j = 0; j < columns; j++){
      if (isAnObstacle(grid, i,j)) break;
      if (isNotAlongLeftOrTopBorder(i, j)) {
        const theCellAbove = getTheCellAbove(grid, i, j);
        const cellToTheLeft = getCellToTheLeft(grid, i, j);
        if (isNaN(cellToTheLeft) && theCellAbove) {
          updateCurrentCell(theCellAbove, grid, i, j);
          break;
        }
        if (isNaN(theCellAbove) && cellToTheLeft) {
          updateCurrentCell(cellToTheLeft, grid, i, j);
          break;
        }
        const newValue = theCellAbove + cellToTheLeft;
        updateCurrentCell(newValue, grid, i, j);
      } else if (isAlongTheTopBorder(i, j)) {
        const cellToTheLeft = getCellToTheLeft(grid, i, j);
        updateCurrentCell(cellToTheLeft, grid, i, j);
      } else if (isAlongTheLeftBorder(i, j)) {
        const theCellAbove = getTheCellAbove(grid, i, j);
        updateCurrentCell(theCellAbove, grid, i, j);
      } else {
        updateCurrentCell(1, grid, i, j);
      }
    }
  }
  console.table(grid);
  return grid[rows - 1][columns - 1];
};


const displayCellInfo = (grid, i, j) => {
  console.log(
    `Current cell: ${grid[i][j]}\nLeft: ${grid[i][j - 1]}\nAbove: ${grid[i-1][j]}`
  );
}

const updateCurrentCell = (newValue, grid, i, j) => grid[i][j] = newValue;

const getCellToTheLeft = (grid, i, j) => grid[i][j - 1];

const getTheCellAbove = (grid, i, j) => grid[i - 1][j];

const addObstaclesToGrid = (grid, key, obstacleCoordinates) => {
  const row = obstacleCoordinates[key][0];
  const col = obstacleCoordinates[key][1];
  grid[row][col] = 'X';
};

const isAnObstacle = (grid, i, j) => grid[i][j] === 'X';

const isNotAlongLeftOrTopBorder = (i, j) => (j > 0 && i > 0);

const isAlongTheTopBorder = (i, j) => (j > 0 && i === 0);

const isAlongTheLeftBorder = (i, j) => (j === 0 && i > 0);


/**
 [
  [  1,  1,  1,  1  ],
  [  1,  2,  3,  4  ],
  [  1,  3,  6,  10 ],
  [  1,  4,  10, 20 ]
 ]
 * */
