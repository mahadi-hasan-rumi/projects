//module-13.2-----------------------------------------------------------

var friendsAge = [ 15, 17, 14, 16];
var sonaliAge = friendsAge [2]
var positin = friendsAge.indexOf(14);
console.log(positin)


var friendsAge = [ 15, 17, 14, 16];
console.log(friendsAge [3])




var friendsAge = [ 15, 17, 14, 16];
friendsAge[1] = 21;
console.log(friendsAge)

//module-13.3-----------------------------------------------------------


var friendsAge = [15, 16, 17, 18];
friendsAge.push(15);
friendsAge.push(25);
console.log(friendsAge)
console.log(friendsAge.length)
friendsAge.pop()
console.log(friendsAge)

var friendsAge = [ 15, 17, 14, 16];
console.log(friendsAge.length)


var friendsAge = [ 15, 17, 14, 16];
friendsAge.pop(14);
console.log(friendsAge)


var friendsAge = [ 15, 17, 14, 16];
friendsAge.shift();
console.log(friendsAge)


var friendsAge = [ 15, 17, 14, 16];
friendsAge.unshift(25);
console.log(friendsAge)


var tealine = ['a', 'b', 'c', 'd', 'e', 'f'];

var part = tealine.slice(2);
var part2 = tealine.slice(2, 4);

console.log(tealine );
console.log(part );
console.log(part2 );



