
module.exports = class calculator {
    constructor() {
        
        this.last_value = 0;
        this.slot_array = [];
    
    }


    add(){
    
        let sum = 0;
       
        for( var i=0; i < arguments.length; i++){
            
           if(typeof arguments[i] == "string"){
            if(arguments[i] == "LAST"){
                sum += this.last();
            }else{
                let reg = /\d/g;
                let regvalue = reg.exec(arguments[i]);
                sum += this.get_slot(parseInt(regvalue[0]));
            }
           
           }else{
            sum += (arguments[i]);
           } 
        } 
        this.last_value = sum;
        return sum;
    };

    multiply(){
    
        let product = 1;
       
        for( var i=0; i < arguments.length; i++){
            
           if(typeof arguments[i] == "string"){
            if(arguments[i] == "LAST"){
                product *= this.last();
            }else{
                let reg = /\d/g;
                let regvalue = reg.exec(arguments[i]);
                product *= this.get_slot(parseInt(regvalue[0]));
            }
           
           }else{
            product *= (arguments[i]);
           } 
        } 
        this.last_value = product;
        return product;
    };

    last(){
        return this.last_value;
    };

         
    set_slot(slotNumber){
        this.slot_array.push(this.last_value);
    };

    get_slot(slotNumber){
        return this.slot_array[slotNumber - 1];
    };
        
};


 





    

     

    










