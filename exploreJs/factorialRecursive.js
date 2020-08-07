// recursive method 
// 5! = 1*2*3*4*5
// 6! = 5!*6
// n! = (n-1)!*n

for(var i = 10; i >= 1; i--){

}
var i = 10;       //ager gulay i = 1 kore 1 theke 10 porjonto i ++ akare bariye loop kora hoyechilo kintu evabe 10 theke 1 porjonto i-- kore loop kora jay..
while(i>=1){
    i--;
}
   


function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n - 1); //kono ekta function er vitor theke oi function kei call korak recursive boleja kina ei recursive method a hoyeche
    }
} 
 var result =  factorial(5)
 console.log(result)