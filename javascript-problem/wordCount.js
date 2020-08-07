// var speech = "you are a good person"
// console.log(speech[5])
var speech = "you  are a good     person."
var count = 0;
for (var i= 0; i< speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i-1] != " "){
        count++;
    }
}
count++;
console.log(count);