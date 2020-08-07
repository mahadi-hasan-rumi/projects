function isLeapYear(year){
   
    const remainder = year % 4;
    
    if(remainder == 0){
        return true; // test ba check korte chaile shudu console use kora jete pare nochet return use kora valo
    }
    else{
        return false;

    }
}
const leap2020 = isLeapYear(1700)
console.log(leap2020)


// ekta equal sign dile man ta set kore nibe but 2 ta eqaual dile man ta variable er sathe check kore nibe.. 


const year = 2020;
const remainder = year % 4;
if (remainder == 0){
    console.log('leap year')

}
else{
    console.log('not leap year');

}