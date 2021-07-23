import { uniqueGridPaths, generateGridWithObstacles } from './App';

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

  describe('uniqueGridPaths()', ()=>{
    describe('WHEN: there are no obstacles, ', ()=>{
      describe('GIVEN: length and width both equal 3, ', ()=>{
        it('THEN: It tells the number of unique paths.', ()=>{
          const [ gridLength, gridWidth ] = [ 3, 3 ];
          const expectedResult = 6; // derived by drawing

          const result = uniqueGridPaths(gridLength, gridWidth);

          expect(result).toEqual(expectedResult);
        });
      });
      describe('GIVEN: length = 3, width = 6, ', ()=>{
        it('THEN: It tells the number of unique paths.', ()=>{
          const [ gridLength, gridWidth ] = [ 3, 6 ];
          const expectedResult = 21; // derived by drawing

          const result = uniqueGridPaths(gridLength, gridWidth);

          expect(result).toEqual(expectedResult);
        });
      });
      describe('GIVEN: length and width both equal 5, ', ()=>{
        it('THEN: It tells the number of unique paths.', ()=>{
          const [ gridLength, gridWidth ] = [ 5, 5 ];
          const expectedResult = 70; // derived by drawing

          const result = uniqueGridPaths(gridLength, gridWidth);

          expect(result).toEqual(expectedResult);
        });
      });
    });
  });
});
