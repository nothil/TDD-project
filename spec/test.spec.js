var test_function=require('../src/basicCalculator.js');
   
describe("function for adding",function() {       
       it("add two number and return", function(){
        expect(test_function.add(0,0)).toEqual(0);
       });

       it("function for adding many number", function(){
        expect(test_function.add(1,2,3,4)).toEqual(10);
        });
   });



  describe("function for multyply",function() {       
    it("multyply two number and return", function(){
     expect(test_function.multiply(1,2)).toEqual(2);
    });

    it("multyply two number and return", function(){
        expect(test_function.multiply(1,2,3,4)).toEqual(24);
       });
   });
      

    


     
    

