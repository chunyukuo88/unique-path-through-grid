import { generateGridOfZeroes } from './visualizations/visualizations';

/**
 * The optional `obstacleCoordinates` parameter is not required to solve the
 * problem alone, but it is required for unit testing. Having it also has the
 * benefit of allowing the user to calculate unique paths when there are no
 * obstacles present (i.e. no value is given).
 * */

export const calculateUniquePaths = (rows, columns, obstacleCoordinates) => {
  const grid = generateGrid(rows, columns, obstacleCoordinates);
  const [firstCell, lastCell] = [grid[0][0], grid[rows-1][columns-1]];
  if (entranceOrExitIsObstacle(firstCell, lastCell)) return 0;

  for (let i = 0; i < rows; i++){
    for (let j = 0; j < columns; j++){
      if (isAnObstacle(grid, i,j)) break;
      if (isNotAlongLeftOrTopBorder(i, j)) {
        const theCellAbove = getTheCellAbove(grid, i, j);
        const cellToTheLeft = getCellToTheLeft(grid, i, j);
        if (isNaN(cellToTheLeft)) {
          updateCurrentCell(theCellAbove, grid, i, j);
        } else if (isNaN(theCellAbove)) {
          updateCurrentCell(cellToTheLeft, grid, i, j);
        } else {
          const newValue = theCellAbove + cellToTheLeft;
          updateCurrentCell(newValue, grid, i, j);
        }
      } else if (isAlongTheTopRow(i, j)) {
        const cellToTheLeft = getCellToTheLeft(grid, i, j);
        updateCurrentCell(cellToTheLeft, grid, i, j);
      } else if (isAlongTheLeftColumn(i, j)) {
        const theCellAbove = getTheCellAbove(grid, i, j);
        if (isNaN(theCellAbove)) {
          updateCurrentCell(0, grid, i, j);
        } else {
          updateCurrentCell(theCellAbove, grid, i, j);
        }
      } else {
        updateCurrentCell(1, grid, i, j);
      }
    }
  }
  console.table(grid);
  return grid[rows - 1][columns - 1];
};

const generateGrid = (rows, columns, obstacleCoordinates) => {
  const grid = generateGridOfZeroes(rows, columns);
  if (obstacleCoordinates) {
    for (let key in obstacleCoordinates) {
      addObstaclesToGrid(grid, key, obstacleCoordinates);
    }
  }
  return grid;
};

const entranceOrExitIsObstacle = (firstCell, lastCell) => (isNaN(firstCell) || isNaN(lastCell));

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

const isAlongTheTopRow = (i, j) => (j > 0 && i === 0);

const isAlongTheLeftColumn = (i, j) => (j === 0 && i > 0);


/**
 [
  [  1,  1,  1,  1  ],
  [  1,  2,  3,  4  ],
  [  1,  3,  6,  10 ],
  [  1,  4,  10, 20 ]
 ]
 * */
