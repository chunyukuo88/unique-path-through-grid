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
