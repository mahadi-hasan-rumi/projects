// eta **itorative method** - ja kina for / while loop diye kora hoy..!

function factorial(n){   //nirdishto kono maner jonne function diye factorial ber kora jay
    var fact = 1;
    for (var i = 1; i <= n; i++ ){ 
        fact = fact * i;
    }
    return fact;
}
result = factorial(10);
console.log(result);



//ar jodi ek sathe onk gulo maner loop akare  factorial korte chai tokhon for loop diye kora jay.. uporer niyome function diye nirdisto songkhar jonne kora hoy.. 
    
var fact = 1;    
for (var i = 1; i <= 5; i++ ){
        fact = fact * i;
        console.log(fact , i)
    }    

