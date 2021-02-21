class Parent {
    constructor(){
        this.fatherName = "Schwerznegger";

    }

}



class Child extends Parent{
    constructor(name){
        super();
        this.name = name;

    }
}
const baby = new Child('jesse');
console.log(baby);