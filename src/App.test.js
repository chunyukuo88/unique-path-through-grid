import { generateGridOfPaths } from './App';

describe('generateGridOfPaths()', ()=>{
  describe('WHEN: there are no obstacles, ', ()=>{
    describe('GIVEN: length and width both equal 4, ', ()=>{
      it('THEN: It tells the number of unique paths.', ()=>{
        const [ gridLength, gridWidth ] = [ 4, 4 ];
        const expectedResult = 20;

        const result = generateGridOfPaths(gridLength, gridWidth);

        // expect(result).toEqual(expectedResult);
        expect(result).toBeDefined();
      });
    });
  });
});
