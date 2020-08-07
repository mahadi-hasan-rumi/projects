var student = {id: 121, phone: 124602, name:"abir"};
var student2 = {id: 111, phone: 124662, name:"rumi"};


var student = {id: 121, phone: 124602, name:"abir"};
var student2 = {id: 111, phone: 124662, name:"rumi"};
//object er kono propertyr value jante nimno motabek kaj korte hoy..
var phonePropName = "phone"
var phoneNo1 = student.phone;
var phoneNo2 = student['phone'];
var phoneNo3 = student[phonePropName]
var rumiCinema = "cinema"

// update phone number by three ways-- var er nam sathe property nam nimno akare diye property r new value add kora jay..
student2.phone = 123;
student2['phone'] = 321;
student2[phonePropName] = 1234;
// property update with value, 3 ways--var er nam sathe property = diye value add kore diye nimno akare new property  value soho add kora jay..
student2.cinema = "ogni22"
student2["cinema"] = "laltu"
student2[rumiCinema] = "kaltu"



console.log(student2);
console.log(phoneNo3)