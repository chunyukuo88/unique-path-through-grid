import { calculateUniquePaths } from './App';

describe('generateGridOfPaths()', ()=>{
  describe('WHEN: there are no obstacles, ', ()=>{
    describe('GIVEN: length and width both equal 4, ', ()=>{
      it('THEN: It tells the number of unique paths (20).', ()=>{
        const [ gridLength, gridWidth ] = [ 4, 4 ];

        const numberOfUniquePaths = calculateUniquePaths(gridLength, gridWidth);

        expect(numberOfUniquePaths).toEqual(20);
      });
    });
    describe('GIVEN: there is only one cell, ', ()=>{
      it('THEN: it returns 1.', ()=>{
        const [ gridLength, gridWidth ] = [ 1, 1 ];

        const numberOfUniquePaths = calculateUniquePaths(gridLength, gridWidth);

        expect(numberOfUniquePaths).toEqual(1);
      });
    });
    describe('GIVEN: length = 1, width = 1_000, ', ()=>{
      it('THEN: It tells the number of unique paths (1).', ()=>{
        const [ gridLength, gridWidth ] = [ 1, 1_000 ];

        const numberOfUniquePaths = calculateUniquePaths(gridLength, gridWidth);

        expect(numberOfUniquePaths).toEqual(1);
      });
    });
    describe('GIVEN: length = 3, width = 12, ', ()=>{
      it('THEN: It tells the number of unique paths (78).', ()=>{
        const [ gridLength, gridWidth ] = [ 3, 12 ];

        const numberOfUniquePaths = calculateUniquePaths(gridLength, gridWidth);

        expect(numberOfUniquePaths).toEqual(78);
      });
    });
  });
  describe('WHEN: there ARE obstacles, ', ()=>{
    describe('GIVEN: the first cell is an obstacle, ', ()=>{
      it('THEN: It returns 0, meaning there are no paths', ()=>{
        const [ gridLength, gridWidth ] = [ 6, 6 ];
        const obstacleCoordinates = { 1: [0,0] };

        const numberOfUniquePaths = calculateUniquePaths(gridLength, gridWidth, obstacleCoordinates);

        expect(numberOfUniquePaths).toEqual(0);
      });
    });
    describe('GIVEN: the last cell is an obstacle, ', ()=>{
      it('THEN: It returns 0, meaning there are no paths', ()=>{
        const [ gridLength, gridWidth ] = [ 6, 6 ];
        const obstacleCoordinates = { 1: [5,5] };

        const numberOfUniquePaths = calculateUniquePaths(gridLength, gridWidth, obstacleCoordinates);

        expect(numberOfUniquePaths).toEqual(0);
      });
    });
    describe('GIVEN: There is ostensibly only one path, ', ()=>{
      it('THEN: It returns 1.', ()=>{
        const [ gridLength, gridWidth ] = [ 6, 6 ];
        const obstacleCoordinates = {
          1: [1,4],
          2: [2,4],
          3: [3,4],
          4: [4,4],
          5: [5,4],
        };

        const numberOfUniquePaths = calculateUniquePaths(gridLength, gridWidth, obstacleCoordinates);

        expect(numberOfUniquePaths).toEqual(1);
      });
    });
    describe('GIVEN: There are ostensibly two paths, ', ()=>{
      it('THEN: It returns 2.', ()=>{
        const [ gridLength, gridWidth ] = [ 6, 6 ];
        const obstacleCoordinates = {
          1: [1,3],
          2: [2,4],
          3: [3,4],
          4: [4,4],
          5: [5,4],
        };

        const numberOfUniquePaths = calculateUniquePaths(gridLength, gridWidth, obstacleCoordinates);

        expect(numberOfUniquePaths).toEqual(2);
      });
    });
    describe('GIVEN: There is one obstacle in the lower-left corner, ', ()=>{
      it('THEN: It returns a number equal to (the number of unique paths with no obstacles) minus 1.', ()=>{
        const [ gridLength, gridWidth ] = [ 6, 6 ];
        const expectedResult = calculateUniquePaths(gridLength, gridWidth) - 1;
        const obstacleCoordinates = { 1: [5,0] };

        const numberOfUniquePaths = calculateUniquePaths(gridLength, gridWidth, obstacleCoordinates);

        expect(numberOfUniquePaths).toEqual(expectedResult);
      });
    });
  });
});
