function sayLoveYou (){
    console.log('jan 0 baby');
    console.log("bill baby .. koi tumi")
}

sayLoveYou(); //function k call kora holo.. jotobar iccha call kora jay but output show korbe console er vitorer ta..

var date = 14;
var place = "restaurent"; 
sayLoveYou();

// module-13.9-------------------------------related to (Q-4)11:30


function doubleIt(num){
    var result = num * 2;
    return result
}

var numberOne = doubleIt(5);
numberTwo = doubleIt(500); 
console.log(numberOne, numberTwo)


// dont work this if u want to output then comment the return function
// jodi onek line comment korte hoy tahole " /** jesob line comment korte chai sesob line then seshe */"

function doubleIt(num){
    var result = num * 2;
    return result;
}
var first = doubleIt(5);
var second = doubleIt(50);
var total = first + second;
console.log(total);
  


function add(num1, num2){
    var result = num1 + num2;
    return result ; 
}
var sum = add(15, 17);
console.log(sum);
