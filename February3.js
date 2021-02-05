// //destructure

// const person = {name:'jack',age:17,job:'facebooker',phone:'018773736' } ;

// const { name,age,phone}=person;

// console.log(name,age,phone);

//another example
// const complexObject = {
//     name : 'jonny',
//     info:{
//         address:'kola bagan',
//         leader:'tiger leader'
//     }
// }
// const {name,info}=complexObject;
// console.log(name,info);

// const {leader}=complexObject.info;
// console.log(leader);


//constructor

// class student{
//     constructor(sId,sName){
//         this.id = sId;
//         this.name = sName;
//         this.school='kolimunnesa'
//     }
// }

// const student1 = new student(23,'shuvo');
// console.log(student1);

//undefined vs Null

// let pakhi;
// console.log(pakhi);



//map ,filter,find

let numbers = [1,2,3,4,5,6,7];


const result1 = numbers.map(function(element){
    return element*element;
})
const result2 = numbers.filter(function(element){
    return element>5;
})


const result3 = numbers.find(function(element){
    return element>5;
})

console.log(result3);