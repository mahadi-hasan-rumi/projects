function addNumbers(num1, num2){
    console.log(arguments[3]);
    console.log(arguments);
    sum = 0;
  for (let i = 0; i < arguments.length; i++) {
      const num = arguments[i];
      sum = sum + num;
    }
    return sum;
}
var result = addNumbers(4, 55, 14, 12, 9);
console.log(result); 



// module21.5.3-------------------

function getFullName(firstName, lastName){
  let fullName = ''; 
  // const result = arguments.join(' '); arguments is a array like object its have a property name(like array index)  and a value it covers with 2nd bracket like object. 
  // const result = [...arguments].join(' '); when we want to change  a object to array then we will code like that.

  for (let i = 0; i < arguments.length; i++) {
    const namePart = arguments[i];
    fullName = fullName + ' ' + namePart;
  }
  
  return fullName;

}
const name = getFullName('hanif', 'paribahan', 'mashrafee', 'bin', 'mortaza');
console.log(name);