function factorial(num){
    var fact = 1;
    for(var i = 1; i<= num; i++){
        fact = fact * i;
        console.log(i, fact);
    }
    return fact;
}

var result = factorial(5)
console.log(result);

function factorialRecuesive(num){
    if(num == 1){
        console.log(num)
        return 1;
    }
    else{
        console.log(num, num - 1)
       return num * factorialRecuesive(num - 1);
    }
}
var recursive = factorialRecuesive(5)
console.log(recursive);