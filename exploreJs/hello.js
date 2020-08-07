//module-12.(1-5) basics--------------------------------------------------------------------

var electricBill = 4560;
console.log(electricBill);

var mosha = 353;
console.log (mosha);

var topic = "javscript";
console.log(topic);

var keyboard = "typing";
console.log(keyboard);

var working = true;
console.log(working);

var typingFast= false;
console.log(typingFast);

//module-12.6

var result = "your result not UP rising"
console.log(result.toUpperCase());

var promise = 'promise might be broken'
console.log(promise.indexOf('be'));

var splitExample= "do not be hunger it will break your goal"                
console.log(splitExample.split(' '));

var anotherSplit = " another example for split";
console.log(anotherSplit.split('for'));

//module-12.7----------------------------------------------------------------------------------
var number1 = 12;
var number2 =28.5;

console.log(number1+number2);

var number1 = '12.5';
var number2 = 13
number1 = parseFloat(number1);
console.log(number1+number2)

var number1= 11;
var number2='18.5';
number2 = parseInt(number2);
console.log(number1+number2);

var number1 = '9.5' ;
var number2= 25;
// number1 = +number1; (string k sonkhay rupantor korte eta kora hoy shortcut hisebe..)
console.log(number1 + number2);

var number1 = '9.5' ;
var number2= 25;
console.log(number2 + (+number1));

var number1 =7;
var number2 =9.5;
number1 =''+number1; //kono number k string a rupantor korte eta kora hoy empty string oi number er sathe jog kore dile seta string hoye jay.. 
console.log(typeof number1)

var number1 = .1;
var number2 = .2;
var total = number1 + number2
total = total.toFixed(3) //doshomiker joger khetre onek somoy extra man chole ashe tokhon jemon .30000004 arokom kichu tai doshomiker por koy ghor porjonto dekhate chai seta fixed kore dewa jay jemo 3 diye fixed kora holo
console.log(total);

//module-12.8-----------------------------------------------------------------------------

var price1 = 12;
var price2 = 16;
var total = price1 + price2
console.log(total);
 

var price1 = 12;
var price2 = 16;
var total = price1 - price2
console.log(total);
 

var price1 = 12;
var price2 = 16;
var total = price1 * price2
console.log(total);
 

var price1 = 32;
var price2 = 16;
var total = price1 / price2
console.log(total);


var price1 = 16;
var price2 = 12;
var total = price1 % price2 // % ei sign k js er vasay modulas, modulu ba remainder bola hoy..
console.log(total);


var price1 = 12;
var price2 = 16;
price1 = price1 + 1; //price1++ /(-- deoya jay komanor jonne) dileo 1 bere jabe
console.log(price1);


var price1 = 12;
var price2 = 16;
var price3 = price1 + 1;
console.log(price3);


 
var price1 = 12;
var price2 = 16;
price1++;
var total = price1 + price2
console.log(total);


var price1 = 12;
var price2 = 16;
price1--;
console.log(price1);

var price1 = 12;
var price2 = '16';
price1++;
var total = price1 + price2
console.log(total);

var price1 = 'jhon';
var price2 = 'snow';
var result = price1 + price2
console.log(result);

var price1 = 'jhon';
var price2 = 'snow';
var result = price1 + ' ' + price2;
console.log(result);

//module-12.9---------------------------------------------------------------------------------

var number = 5;
var absoluteNumber = Math.abs(number)
console.log(absoluteNumber);
  

var number = -5;
var absoluteNumber = Math.abs(number)
console.log(absoluteNumber);


var number = 5.458;
var result = Math.round(number)
console.log(result);


var number = 5.5001;
var result = Math.round(number)
console.log(result);

var number = 5.49999;
var result = Math.round(number)
console.log(result);


var number = 5.5000000;
var result = Math.round(number)
console.log(result);


var number = 5.00001;
var result = Math.ceil(number)
console.log(result);


var number = 5.4999;
var result = Math.ceil(number)
console.log(result);   



var number = 5.9999;
var result = Math.floor(number)
console.log(result);


var number = 5;
var result = Math.random(number)
console.log(result);



var number = Math.random() * 100;
var result = Math.round(number);
console.log(result);
// -----------------------------------------------------------------

var date = new Date('1971-12-16')
console.log(date)






