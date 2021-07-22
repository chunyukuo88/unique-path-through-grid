/**
 * m = length
 * n = width
 * */
const generateGrid = (gridLength, gridWidth) => {
  const result = [];
  for (let i = 0; i < gridLength; i++){
    const innerArray = [];
    for (let j = 0; j < gridWidth; j++){
      innerArray.push(0);
    }
    result.push(innerArray);
  }
  console.log(result);
  return result;
};

const generateObstacle = (grid) => {
  const x =
  grid[x][y]
};

export { generateGrid, generateObstacle };
