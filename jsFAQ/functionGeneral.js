// Function-DECLARATION..................

function toDo(task) {
    //this is a local variable.........................
    const addNewElement = document.createElement('li');
}

var name = 'sam'; //global variable..............
function addUser(){
    var nam = 'SMsam';
    console.log(nam);
    // return nam;
}
console.log(name);
// console.log(nam);

addUser();
//  var result = addUser(nam);


// console.log(result);

//IIFE-immediately invoking function EXPRESSION........................

(function /*addUsers*/() {
    var localVar = 'IIFE-immediately invoking function' 
    console.log(localVar);
})()
// addUsers()


// FUNCTION-Expression..................... 
var myToDo = function(task){

}


