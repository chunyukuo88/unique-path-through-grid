import { generateGridOfZeroes } from './visualizations/visualizations';
/**
 The optional `obstacleCoordinates` parameter is not required to solve the
 kata alone, but it is required for unit testing. Having it also has the
 benefit of allowing the user to calculate unique paths when there are no
 obstacles present (i.e. no `obstacleCoordinates` value is passed in).
 **/

export const calculateUniquePaths = (rows, columns, obstacleCoordinates) => {
  const grid = generateGrid(rows, columns, obstacleCoordinates);
  if (entranceOrExitIsAnObstacle(grid)) return 0;
  for (let i = 0; i < rows; i++){
    for (let j = 0; j < columns; j++){
      const gridProps = { grid, i, j };
      if (isAnObstacle(gridProps)) updateCurrentCell('X', gridProps);
      else if (isNotAlongLeftOrTopBorder(i, j)) updateCellWithinBorder(gridProps);
      else if (isAlongTheTopRow(i, j)) updateCellAlongTopRow(gridProps);
      else if (isAlongTheLeftColumn(i, j)) updateCellAlongLeftColumn(gridProps);
      else updateCurrentCell(1, gridProps);
    }
  }
  console.table(grid);
  return grid[rows - 1][columns - 1];
};

const updateCellAlongLeftColumn = (gridProps) => {
  const { grid, i, j } = gridProps;
  const theCellAbove = grid[i - 1][j];
  if (isNaN(theCellAbove)) {
    updateCurrentCell(0, gridProps);
  } else {
    updateCurrentCell(theCellAbove, gridProps);
  }
};

const updateCellAlongTopRow = (gridProps) => {
  const { grid, i, j } = gridProps;
  const cellToTheLeft = grid[i][j - 1];
  updateCurrentCell(cellToTheLeft, gridProps);
};

const updateCellWithinBorder = (gridProps) => {
  const { cellToTheLeft, theCellAbove } = getNeighboringCells(gridProps);
  if (neighborsAreNotObstacles(cellToTheLeft, theCellAbove)) {
    const uniquePathsToThisCell = theCellAbove + cellToTheLeft;
    updateCurrentCell(uniquePathsToThisCell, gridProps);
  }
  else if (isNaN(cellToTheLeft)) {
    updateCurrentCell(theCellAbove, gridProps);
  } else { // i.e., if (isNaN(theCellAbove))
    updateCurrentCell(cellToTheLeft, gridProps);
  }
};

const neighborsAreNotObstacles = (cellToTheLeft, theCellAbove) => !isNaN(cellToTheLeft) && !isNaN(theCellAbove);

const generateGrid = (rows, columns, obstacleCoordinates) => {
  const grid = generateGridOfZeroes(rows, columns);
  if (obstacleCoordinates) {
    for (let key in obstacleCoordinates) {
      addObstaclesToGrid(grid, key, obstacleCoordinates);
    }
  }
  return grid;
};

const entranceOrExitIsAnObstacle = (grid) => {
  const { firstCell, lastCell } = getFirstAndLastCells(grid);
  return (isNaN(firstCell) || isNaN(lastCell));
};

const getFirstAndLastCells = (grid) => {
  const gridLength = grid.length - 1;
  const gridWidth = grid[0].length - 1;
  return {
    firstCell: grid[0][0],
    lastCell: grid[gridLength][gridWidth]
  };
};

const updateCurrentCell = (newValue, gridProps) => {
  const { grid, i, j } = gridProps;
  grid[i][j] = newValue
};

const getNeighboringCells = ({ grid, i, j }) => {
  return {
    cellToTheLeft: grid[i][j - 1],
    theCellAbove: grid[i - 1][j]
  };
};

const addObstaclesToGrid = (grid, key, obstacleCoordinates) => {
  const row = obstacleCoordinates[key][0];
  const col = obstacleCoordinates[key][1];
  grid[row][col] = 'X';
};

const isAnObstacle = ({ grid, i, j }) => grid[i][j] === 'X';

const isNotAlongLeftOrTopBorder = (i, j) => (j > 0 && i > 0);

const isAlongTheTopRow = (i, j) => (j > 0 && i === 0);

const isAlongTheLeftColumn = (i, j) => (j === 0 && i > 0);
