import { generateGridOfZeroes } from './visualizations/visualizations';
/**
 The optional `obstacleCoordinates` parameter is not required to solve the
 kata alone, but it is required for unit testing. Having it also has the
 benefit of allowing the user to calculate unique paths when there are no
 obstacles present (i.e. no `obstacleCoordinates` value is passed in).
 **/

export const calculateUniquePaths = (rows, columns, obstacleCoordinates) => {
  const grid = generateGrid(rows, columns, obstacleCoordinates);
  const { firstCell, lastCell } = getFirstAndLastCells(grid, rows, columns,);
  if (entranceOrExitIsObstacle(firstCell, lastCell)) return 0;

  for (let i = 0; i < rows; i++){
    for (let j = 0; j < columns; j++){
      if (isAnObstacle(grid, i,j)) updateCurrentCell('X', grid, i, j);
      else if (isNotAlongLeftOrTopBorder(i, j)) {
        const [cellToTheLeft, theCellAbove] = [getCellToTheLeft(grid, i, j), getTheCellAbove(grid, i, j)];
        if (!isNaN(cellToTheLeft) && !isNaN(theCellAbove)) {
          const uniquePathsToThisCell = theCellAbove + cellToTheLeft;
          updateCurrentCell(uniquePathsToThisCell, grid, i, j);
        }
        else if (isNaN(cellToTheLeft)) {
          updateCurrentCell(theCellAbove, grid, i, j);
        } else { // i.e., if (isNaN(theCellAbove))
          updateCurrentCell(cellToTheLeft, grid, i, j);
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
      }
      else {
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

const getFirstAndLastCells = (grid, i, j) => {
  return {
    firstCell: grid[0][0],
    lastCell: grid[i - 1][j - 1]
  };
}

const entranceOrExitIsObstacle = (firstCell, lastCell) => (isNaN(firstCell) || isNaN(lastCell));

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

