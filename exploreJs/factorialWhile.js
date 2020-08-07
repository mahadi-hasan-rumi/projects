// var i = 1;
// var factorial = 1;
// while (i <= 10) {
//     factorial = factorial * i;
//     console.log(i, factorial); //age console.log dite hobe then i++ na hole extra man dekhabe ar loop er vitore console korle loop akare ektar por ekta man ashbe but loop er bahire console korle just j man dibo shudu tar output ashbe sob gular na like 5 dile 5 er ta ar 6 dile 6 er ta..
//     i++;
  
// }
// console.log(factorial) nirdishto ekta maner jonne while loop diye korte hole evabe korte hobe 

// eta **itorative method** - ja kina for / while loop diye kora hoy..!

function factorial (n){
    var i = 1;
    var fact = 1;
    while (i <= n) {
        fact = fact * i; 
        i++;            
    }
    return fact;
}
var result = factorial(5)
console.log(result);    