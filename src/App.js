/**
 * m = length
 * n = width
 * */
export const generateGrid = (gridLength, gridWidth) => {
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

export const addObstacleToGrid = (grid) => {
  const x = produceCoordinate(grid);
  const y= produceCoordinate(grid);
  console.log(`x = ${x}, y=${y}`)
  grid[x][y] = 1;
  return grid
};

const produceCoordinate = (grid) => Math.floor(Math.random() * grid.length);
