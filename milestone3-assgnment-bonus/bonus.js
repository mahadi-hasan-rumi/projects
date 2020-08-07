let number = 59;
number = 79;
number = 119;
var name = 'asad';
console.log(number);
 


//for loop  -er vitor () bracket er moddhe 3ta part thake, 1.start/initiation/loop variable-eta jekono character diye lekha jay upercase lowercase  tobe commonly 'i' diye likha hoye thake..2.loop condition or stoping condition--er upor vitti kore loop cholbe ki cholbe na kototuk porjonto cholbe ta decide kore, change /modification--kono kichu change hole seta kivabe hobe ta bujhay.

var marks = [89, 97, 89, 68, 94, 86, 79];
for(var i = 0; i < marks.length; i++ ){   
    var element = marks[i];
    console.log(element);
}  



var rumi = ['mahadi'];
console.log(rumi)

function numbers (number1, number2){ // parameter- shunno perameter hote pare tobe 1/2/3/4/5/6/ perameter newa jay tobe 7 er beshi newa thik na 250 porjonto newa jay...
    var calculate = number1 + number2;
    return calculate;

}
    var total = numbers(12, 16);
    console.log(total);


    function largestNumbers (numbers){
        var larger = [0];
        for (let index = 0; index < numbers.length; index++) {
            const element = numbers[index];
            if( element > larger){
                larger = element;
            }
        }
        return larger;
    }

//var output = largestNumbers([45, 56, 68, 82, 96,]) ekhane evabeo output ana jay..
var numbers = [89, 97, 89, 68, 94, 86, 79];
var output = largestNumbers(numbers) 
console.log(output);
