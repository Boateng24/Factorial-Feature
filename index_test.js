var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
      it('will test if the output of 5! is equal to 120', ()=> {
        // setup
        const inputNumber = 5;
        const expected = 120;
        // exercise
          const result = Calculate.factorial(inputNumber);
        // verify
        assert.equal(result, expected)
      });

      it('test for the factorial of 3', ()=> {
        // setup
        const inputNumber = 3;
        const expected = 6;
        // exercise
          const result = Calculate.factorial(inputNumber);
        // verify
        assert.equal(result, expected)
      });

      it('returns the value of 0!', ()=>{
        //setup
        const inputNumber = 0;
        const expected = 1
        // excercise
        const result = Calculate.factorial(inputNumber);
        // verify
        assert.equal(result, expected)
      })
  });
});