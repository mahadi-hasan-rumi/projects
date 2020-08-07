var n = 122;
// for (i = 2; i < n; i++){
//     // console.log(i, n % i)
//     if(n % i == 0){
//         console.log('not a prime')
//         break
//     }
// }

// console.log('is a prime number')

function isPrime (n){
    for (i = 2; i < n; i++){
        if(n % i == 0){
           return 'not a prime'
        }
    }
    
   return'is a prime number'
}

var result = isPrime(97);
console.log(result);