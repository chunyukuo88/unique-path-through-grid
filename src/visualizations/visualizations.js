export const uniqueGridPaths = (gridLength, gridWidth, thereAreObstacles = false) => {
  return (thereAreObstacles)
    ? getPathsIfObstaclesPresent(gridLength, gridWidth)
    : getPathsIfNoObstacles(gridLength, gridWidth);
};

const getPathsIfObstaclesPresent = (gridLength, gridWidth) => {
  const grid = generateGridWithObstacle(gridLength, gridWidth);
  let numberOfPaths = 0;
  for (let i = 0; i < gridLength; i++){
    for (let j = 0; j < gridLength; j++){
      if (grid[i][j] === 0) {
        const slotAbove = grid[i-1][j] ? grid[i-1][j]: 0;
        const slotToTheLeft = grid[i][j-1] ? grid[i][j-1] : 0;
        numberOfPaths += (slotAbove + slotToTheLeft);
      }
    }
  }
  return 0
};

const getPathsIfNoObstacles = (gridLength, gridWidth) => {
  const grid = generateGridOfZeroes(gridLength, gridWidth);
  for (let i = 0; i < gridLength; i++) {
    for (let j = 0; j < gridWidth; j++) {
      populateGrid(i, j, grid);
    }
  }
  const uniquePathsToEnd = grid[gridLength - 1][gridWidth - 1];
  return uniquePathsToEnd;
};

const populateGrid = (i, j, grid) => {
  if (atLeftOrTopBoundary(i, j)) {
    grid[i][j] = 1;
  } else {
    const slotAbove = grid[i-1][j];
    const slotToTheLeft = grid[i][j-1];
    grid[i][j] = slotAbove + slotToTheLeft;
  }
};

const atLeftOrTopBoundary = (i, j) => {
  return (i === 0 || j === 0);
};

export const generateGridWithObstacle = (gridLength, gridWidth) => {
  const grid = generateGridOfZeroes(gridLength, gridWidth);
  const gridWithObstacle = addObstacleToGrid(grid);
  return gridWithObstacle;
};

const generateGridOfZeroes = (gridLength, gridWidth) => {
  const result = [];
  for (let i = 0; i < gridLength; i++){
    generateInnerArrays(result, gridWidth);
  }
  return result;
};

const generateInnerArrays = (outerArray, outerArrayWidth) => {
  const innerArray = [];
  for (let j = 0; j < outerArrayWidth; j++){
    innerArray.push(0);
  }
  outerArray.push(innerArray);
};

const addObstacleToGrid = (grid) => {
  const x = produceRandomCoordinate(grid);
  const y= produceRandomCoordinate(grid);
  grid[x][y] = 1;
  return grid;
};

const produceRandomCoordinate = (grid) => Math.floor(Math.random() * grid.length);

export { generateGridOfZeroes };
