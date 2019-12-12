var calculator=require('../src/basic_Calculator.js');

let calculator_instance = new calculator;
   
describe("function for adding",function() {       
   it("add two number and return", function(){
      expect(calculator_instance.add(1,2)).toEqual(3);

            });
   it("function for adding many number", function(){
      expect(calculator_instance.add(1,2,3,4)).toEqual(10);
            });

   it("should return last result", function(){
      calculator_instance.add(1,2);
      expect(calculator_instance.last()).toEqual(3);
   }); 

   it("should multiply two numbers", function(){
      calculator_instance.multiply(3,5);
      expect(calculator_instance.last()).toEqual(15)


   });


   it("should allow last as a paremeter", function(){
      calculator_instance.add(1,2);
      expect(calculator_instance.add("LAST", 5)).toEqual(8)
   });
   
    
      it("should return  ",function(){
         calculator_instance.add(1, 2);
         calculator_instance.set_slot(1);
         expect(calculator_instance.get_slot(1)).toEqual(3);
        
    
      });

      it("should allow memory slot as a paremeter", function(){
         calculator_instance.add("LAST", 10);
         calculator_instance.add("SLOT_1,", 5);
         calculator_instance.multiply("SLOT_2", 2);
      });



   });

        
  
        

    
   
    

