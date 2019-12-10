
module.exports = class calculator {
    constructor() {
        
        this.last_value = 0;
        // this.slot = [];
        this.slot =0;
        
        this.map = new Map();
        
    }


    add(){
    
        let sum = 0;
       
        for( var i=0; i < arguments.length; i++){
            
            if(arguments[i] === "LAST"){
                arguments[i] = this.last_value;
               sum = sum + arguments[i];
            };
            if(arguments[i] === "SLOT_1"){
                arguments[i] = this.get_slot(1);

            };

            sum += (arguments[i]);
            arguments[i] = this.last_value;
            this.last_value = sum
               
        
        };
        
        this.set_slot(sum);
        this.map.set("ADD_SLOT", sum);
        return sum;
    };

     
    multiply(){
       var product = 1;
        for( var i=0; i < arguments.length; i++){
            if(arguments[i] === "LAST"){
                arguments[i] = this.last_value;
                product = product * arguments[i];
            };

            if(arguments[i] === "SLOT_2"){
                arguments[i] = this.get_slot(2);
            };

            product *= (arguments[i]);
            arguments[i] = this.last_value;
            this.last_value = product;
            
            this.set_slot(product);

            this.map.set("MULTIPLY_SLOT", product);

             this.map.set("MULTILY_SLOT", product);
        }return product;
      
        };



     last(){

            
            return this.last_value;

        };

         
        set_slot(slotNumber){
            this.slot = slotNumber;
        };

        get_slot(){
            return this.slot;
        };
        
};


 





    

     

    










