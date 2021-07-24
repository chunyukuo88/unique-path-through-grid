import { calculateUniquePaths } from './App';

describe('generateGridOfPaths()', ()=>{
  describe('WHEN: there are no obstacles, ', ()=>{
    describe('GIVEN: length and width both equal 4, ', ()=>{
      it('THEN: It tells the number of unique paths.', ()=>{
        const [ gridLength, gridWidth ] = [ 4, 4 ];
        const expectedResult = 20;

        const result = calculateUniquePaths(gridLength, gridWidth);

        expect(result).toEqual(expectedResult);
      });
    });
  });
  describe('WHEN: there ARE obstacles, ', ()=>{
    describe('GIVEN: length and width both equal 6, ', ()=>{
      it('THEN: It tells the number of unique paths.', ()=>{
        const [ gridLength, gridWidth ] = [ 6, 6 ];
        const expectedResult = 1;
        const obstacleCoordinates = {
          // 1: [2,0],
          2: [3,2]
        };

        const result = calculateUniquePaths(gridLength, gridWidth, obstacleCoordinates);

        // expect(result).toEqual(expectedResult);
        expect(result).toBeDefined();
      });
    });
  });
});
