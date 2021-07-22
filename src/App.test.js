import { generateGrid, generateObstacle } from './App';

describe('App.js', ()=>{
  describe('generateGrid()', ()=>{
    describe('WHEN: Given (gridLength, gridWidth), ', ()=>{
      it('THEN: It produces a grid of that size', ()=>{
        const [ gridLength, gridWidth ] = [ 3, 3 ];
        const expectedResult = [
          [ 0, 0, 0 ],
          [ 0, 0, 0 ],
          [ 0, 0, 0 ],
        ];

        const result = generateGrid(gridLength, gridWidth);

        expect(result).toEqual(expectedResult);
      });
    });
  });

  describe('generateObstacle()', ()=>{
    describe('WHEN: Given (grid), ', ()=>{
      it('THEN: It randomly adds an obstacle (1) to the grid.', ()=>{
        const grid = [
          [ 0, 0, 0 ],
          [ 0, 0, 0 ],
          [ 0, 0, 0 ],
        ];

        const result = generateObstacle(grid);
        const flattenedResult = result.flat();
        const resultHasAnObstacleInIt = flattenedResult.includes(1);

        expect(resultHasAnObstacleInIt).toEqual(true);
      });
    });
  });
});
