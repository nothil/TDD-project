var calculator=require('../src/basicCalculator.js');

let calculator_instance = new calculator;
   
describe("function for adding",function() {       
       it("add two number and return", function(){
        expect(calculator_instance.add(0,0)).toEqual(0);
       });

       it("function for adding many number", function(){
        expect(calculator_instance.add(1,2,3,4)).toEqual(10);
        });
   });



  describe("function for multyply",function() {       
    it("multyply two number and return", function(){
     expect(calculator_instance.multiply(1,2)).toEqual(2);
    });

    it("multyply two number and return", function(){
        expect(calculator_instance.multiply(1,2,3,4)).toEqual(24);
       });
   });
      

    


   console.log(calculator_instance.add(100,200));
     
   console.log(calculator_instance.add("LAST", 5));
   console.log(calculator_instance.set_slot(1));
   console.log(calculator_instance.get_slot(1));
   console.log(calculator_instance.add("SLOT_1", 5));
   
    

