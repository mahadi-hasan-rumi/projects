function getArraySum (numbers){
    var sum = 0;
for(var i = 0; i < numbers.length; i++){
    var element = numbers[i]
    sum = sum + element;
}
return sum;
}
var numbers = [42, 56, 66, 81, 92, 35, 23];
var result = getArraySum(numbers)
console.log("total of the numbers: ", result )

var total = getArraySum([12, 25, 32, 56, 96, 45])
console.log("total of the numbers: ", total )