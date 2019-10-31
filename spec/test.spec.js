var test_function=require('../src/basicCalculator.js');
   
describe("function for adding",function() {       
       it("add two number and return", function(){
        expect(test_function.add(0,0)).toEqual(0);
       });
   });
   
   
  

  describe("function that add a bunch of numbers",function(){
      it("function for adding many number", function(){
          expect(test_function.addBunchOfNumbers(1,2,3,4)).not.toEqual();

      });
  });



  describe("function for multyply",function() {       
    it("multyply two number and return", function(){
     expect(test_function.multiply(1,2))
    });
});
    


describe("function for multyply",function() {       
    it("multyply two number and return", function(){
     expect(test_function.multiplyBunchOfNumbers(1,2,3,4))
    });
});
   

