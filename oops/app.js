const stud1 = {
    name: "Aditya",
    age: 18,
    city: "Mau",
    getAge: () => {
        return this.age;
    }
}
const stud2 = {
    name: "Pradeep",
    age: 19,
    city: "UP",
    getAge: () => {
        return this.age;
    }
}
const stud3 = {
    name: "Mohit",
    age: 17,
    city: "Churu",
    getAge: () => {
        return this.age;
    }
}

let arr = [1, 3, 4, 5];
console.log(arr);

arr.__proto__.push1 = (n) => {  //using this will change the actual prototype object
    console.log("pushing number :", n);
}

arr.push1(4);

let arr2 = [1, 5, 3, 2];
arr2.push(6);


console.log(arr2);


console.log(Array.prototype);
console.log(String.prototype);


//Object.create()

let Person = {
    name: "Aditya",
    age: 18
}

let student = Object.create(Person);
console.log(student);
console.log(student.name);
console.log(student.age);

//or we can use 
// Object.setPrototypeOf(Student,Person);



//factory Function

function personMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`hi, my name is ${this.name}`);
        }
    }

    return person;
}

let per1 = personMaker("Aditya", 18);
console.log(per1);
per1.talk();


//new operator
//--don't return anything & start with capital letter.(but we can do)

function Student(name, age) {
    this.name = name;
    this.age = age;
}
Student.prototype.talk = function () {
    console.log(`hi, my name is ${this.name}`);
}

let s1 = new Student("Aditya", 18) //this new object are called "instance"
let s2 = new Student("Pradeep", 19) //this new object are called "instance"

console.log(s1);
console.log(s1.name);

//classes in JS

class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

let st1 = new Student("Aditya", 18) //this new object are called "instance"
let st2 = new Student("Pradeep", 19)
console.log(st1);
st1.talk();

//Inheritance

class stud extends Person1 {
    constructor(name, age,marks){
        super(name,age);
        this.marks = marks;
    }
    getMarks(){
        console.log(`${this.name} got ${this.marks}`);
    }
}

let studd1 =new stud("Aditya", 18, 98);
console.log(studd1);
studd1.getMarks();