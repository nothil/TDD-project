
module.exports = class calculator {
    constructor() {
        
        this.last_value = 0;
        this.slot = [];
        //this.slotNumber = /[0-9]/;
        
        
    }


    add(){
        let sum = 0;
        for( var i=0; i < arguments.length; i++){
            if(arguments[i] === "LAST"){
                arguments[i] = this.last_value;
               // sum = sum + arguments[i];
            };
            if(arguments[i] === "SLOT_1"){
                arguments[i] = this.get_slot(1);

            };

            sum += (arguments[i]);
            arguments[i] = this.last_value;
            this.last_value = sum
            

            
        
        };
        
        return sum;
    };

     
    multiply(){
       var product = 1;
        for( var i=0; i < arguments.length; i++){
            if(arguments[i] === "LAST"){
                arguments[i] = this.last_value;
                //product = product * arguments[i];
            };

            if(arguments[i] === "SLOT_2"){
                arguments[i] = this.get_slot(2);
            };

            product *= (arguments[i]);
            arguments[i] = this.last_value;
            this.last_value = product;
            
            
        }return product;
      
        };


        last(){

            return this.last_value;
        
        };

         
        set_slot(slotNumber){
            this.slot.push(this.last_value);
           return this.slot[slotNumber - 1]
        };



        get_slot(slotNumber){

            return this.slot[slotNumber - 1];

        };
        
};


 





    
// for testing 
     

    










