var number = Math.random() * 10000 ;
var result = Math.round(number.toFixed(4));

console.log(result);



var studentsMark = [["hasan", 98], ["fahim", 78], ['rasel', 85], ['sarmin', 73], ['jessy', 89]];

var avgMarks = 0;
for (let i = 0; i < studentsMark.length; i++) {
     avgMarks = avgMarks + studentsMark[i][1];
    var avg = avgMarks/studentsMark.length;
}
 
// console.log('Average Grade:' + avg)

if(avg < 60){
    console.log('grade : f')
}
else if(avg < 70){
    console.log('Grade : D')
}
else if(avg<80){
    console.log('Grade : C')
}
else if (avg < 90){
    // console.log('Grade : B')

}
else if(avg < 100){
    console.log('Grade: A')
}
var date = new Date()
// console.log(date);