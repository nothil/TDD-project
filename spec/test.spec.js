var calculator=require('../src/basicCalculator.js');

let calculator_instance = new calculator;
   
describe("function for adding",function() {       
   it("add two number and return", function(){
      expect(calculator_instance.add(1,2)).toEqual(3);

            });
   it("function for adding many number", function(){
      expect(calculator_instance.add(1,2,3,4)).toEqual(10);
            });

   it("multyply two number and return", function(){
      expect(calculator_instance.multiply(1,2,3,4)).toEqual(24);
    });

   it("multyply two number and return", function(){
      expect(calculator_instance.multiply(1,2)).toEqual(2);
         });

         it("should give the sane answer for multiplication and get slot", function() {
            expect(calculator_instance.multiply(1, 2)).toEqual(2);
            expect(calculator_instance.get_slot());
             });
      
         
       it('should take the last value and add 5', function() {
        calculator_instance.map.add("last", 3);
         calculator_instance.multiply(1,3);
           expect(calculator_instance.add( calculator_instance.map.get("MULTIPLY_SLOT")  ,5)).toEqual(8);



      });

      it("should take slot",function(){
        expect(calculator_instance.map.add("SLOT_1", 3).toEqual(11));
         
      });



   });

        
  
        

    
   
    

