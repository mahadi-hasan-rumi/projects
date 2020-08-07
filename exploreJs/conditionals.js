//module-12.10-----------------------------


var biscuitPrice = 12
if(biscuitPrice < 10){
    console.log("i will eat biscuit");
}
else{
    console.log("khali cha is better");
}



var biscuitPrice = 8
if(biscuitPrice < 10){
    console.log("i will eat biscuit");
}
else{
    console.log("khali cha is better");
}


var biscuitPrice = 12
if(biscuitPrice == 10){
    console.log("i will eat biscuit");
}
else{
    console.log("khali cha is better");
}

var biscuitPrice = 12
if(biscuitPrice !=10){
    console.log("i will eat biscuit");
}
else{
    console.log("khali cha is better");
}

//module-12.11-----------------------------

//&& deya thakle condition duitai fill korte hobe..
var jobPaiso = true;
var savingsAmount = 5000;
if(jobPaiso == true && savingsAmount > 200000){ 
    console.log("aso tomar patri khuji")
}
else if (jobPaiso == true){
    console.log("accha koy din por dekhbo")
}
else{
    console.log("tor kopale biya nai")

}

var jobPaiso = true;
var savingsAmount = 5000;
if(jobPaiso == true || savingsAmount > 200000){   // || deya thakle condition ekta  fill korleo hobe..
    console.log("aso tomar patri khuji")
}
else if (jobPaiso == true){
    console.log("accha koy din por dekhbo")
}
else{
    console.log("tor kopale biya nai")

}