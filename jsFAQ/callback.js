function explain_callback(name, age, task){
     task();
     console.log('hello', name);
     console.log('your age', age);
     
}

function washHand(){
    console.log('wash hand with soup')
}
function takeShower(){
    console.log('take shower in the bathroom')
}
function scrollFacebook(){
    console.log('plz, scroll facebook')
}

explain_callback('sogir uddin', 17, washHand);
explain_callback('kogir uddin', 13, takeShower);
explain_callback('mugir uddin', 21, scrollFacebook);

// module-21.5.4---------------------------------
  
function welcomeGuest(name, greetHandler){
    greetHandler(name);

}
const actorName = 'tom hanks';
function greetMorning(name){
    console.log('good morning', name)
}
function greetEvening(name){
    console.log('good evening', name);
}
function greetAfternoon(name){
    console.log('greet afternoon', name);


}
welcomeGuest(actorName, greetMorning);
welcomeGuest('sakib', greetEvening);
welcomeGuest('rakib', greetAfternoon);
welcomeGuest('rakib', function(name){
    console.log('special welcome', name)
});
