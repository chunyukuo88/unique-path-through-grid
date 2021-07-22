import { generateGridWithObstacles } from './App';

describe('App.js', ()=>{
  describe('generateGridWithObstacles()', ()=>{
    describe('WHEN: Given (gridLength, gridWidth), ', ()=>{
      const [ x, y ] = [ 5, 5 ];

      it('THEN: It produces a grid of that size', ()=>{
        const gridLength = generateGridWithObstacles(x, y).length;
        const gridWidth = generateGridWithObstacles(x, y)[0].length;

        expect(gridLength).toEqual(5);
        expect(gridWidth).toEqual(5);
      });
      it('AND: The grid contains an obstacle.', ()=>{
        const grid = generateGridWithObstacles(x, y);
        const flattenedGrid = grid.flat();

        const resultHasAnObstacleInIt = flattenedGrid.includes(1);

        expect(resultHasAnObstacleInIt).toEqual(true);
      });
    });
  });
});
