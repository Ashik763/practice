const person = { name:'ankita Ghosh', age:8,job:'student',class:7,food:['ice-cream','butter','mutton']};
const person2 = [ 'ice-cream','butter','mutton','chicken','beef','pork','lamb'];
console.log(person);
console.log(person.food[2]);

const { name,age,job} = person;
console.log(age,job,name);

const[a,b,...c]=person2;
console.log(c);


//ways of declaring function

const doubleIt = num => num*2;
const add = (x,y) => x+y;
const give5 = ()=>5;
const doMath = (x,y)=>{
    const sum = x+y;
    const diff = x-y;
    const result = sum*diff;
    return result;
}