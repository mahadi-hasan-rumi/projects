//module-19.1--------------------------------------------------------
function evenify_all(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
         if(num % 2 == 0){
            console.log(num, ':is even number');
        }
        else{
            console.log(num * 2, ':is odd number');
        }
    }
    
}


nums = [12, 254, 56, 45, 36, 68, 13, 96, 25, 89,];
// evenify_all(nums)


friends_age = [21, 22, 18, 19, 23, 20];
// evenify_all(friends_age)



//     if(age % 2 == 0){
//         console.log(age, ':is even number');
//     }
//     else{
//         console.log(age, ':is odd number');
//     }
//



// module-19.2---------------------------------------------------------------



function evenify(num){
    
    if(num % 2 == 0){
       return num;
    }
    else{
        return num * 2;
    };
}

var result = evenify(11);
var square = result * result;
console.log('square:-', square);

function evenify(num){
    var result;
    if(num % 2 == 0){
       result = num;
    }
    else{
        result = num * 2;
    }
    return result;
}

var result = evenify(11);
var square = result * result;
console.log('square:-', square);


function evenify_all(nums){
    var even_array = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result = evenify(num);
        even_array.push(result);
    }
    return even_array;
}
var nums = [12, 254, 56, 45, 36, 68, 13, 96, 25, 89,];
var nums_even = evenify_all(nums)
console.log(nums_even);


friends_age = [21, 22, 18, 19, 23, 20];
// evenify_all(friends_age)