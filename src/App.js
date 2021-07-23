export const uniqueGridPaths = (gridLength, gridWidth) => {
  const grid = generateGrid(gridLength, gridWidth);
  for (let i = 0; i < gridLength; i++) {
    for (let j = 0; j < gridWidth; j++) {
      if (i === 0 || j === 0) {
        grid[i][j] = 1;
      } else {
        const slotAbove = grid[i-1][j];
        const slotToTheLeft = grid[i][j-1];
        grid[i][j] = slotAbove + slotToTheLeft;
      }
    }
  }
  const uniquePathsToEnd = grid[gridLength - 1][gridWidth -1];
  return uniquePathsToEnd;
};

export const generateGridWithObstacles = (gridLength, gridWidth) => {
  const grid = generateGrid(gridLength, gridWidth);
  const gridWithObstacle = addObstacleToGrid(grid);
  return gridWithObstacle;
};

const generateGrid = (gridLength, gridWidth) => {
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
  const x = produceCoordinate(grid);
  const y= produceCoordinate(grid);
  grid[x][y] = 1;
  return grid;
};

const produceCoordinate = (grid) => Math.floor(Math.random() * grid.length);
