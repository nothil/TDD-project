function add(a,b){
    return a+b ;

}


    
function addBunchOfNumbers(){
    var sum = 0;
    for( var i=0; i < arguments.length; i++){
            sum = sum + arguments[i];
        }return sum;

}



function multiply(a,b){
    return a*b ;

}



function multiplyBunchOfNumbers(){
    var sum = 0;
    for( var i=0; i < arguments.length; i++){
            sum = sum * arguments[i];
        }return sum;

}



module.exports={
    add,addBunchOfNumbers,multiply,multiplyBunchOfNumbers

}
