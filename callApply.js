
const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary:1500,
    getFullName:function(){     //when a function is declared in a object as a property then the function is called method object
        console.log(this.firstName,this.lastName);
    },
    chargeBill:function(amount){
        this.salary = this.salary-amount;
        return this.salary;
    }
}

// normalPerson.chargeBill(150);
// console.log(normalPerson.salary);

const heroPerson = {
    firstName:'hero',
    lastName:'balam',
}


