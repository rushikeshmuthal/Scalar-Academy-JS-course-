class Person {
    constructor(_name, _age){

        this.name = _name;
        this.age = _age;
    }
}

class Teacher extends Person {
    constructor(_name,_age,_classStrength){
        super(_name,_age); 
        this.classStrength = _classStrength
    }
}

class Student extends Person {
    constructor(_name,_age,_cgpa){
        super(_name,_age) ;
        this.cgpa=_cgpa;
    }
}

let person1 = new Person("adam",23)
console.log(person1);
//output- Person { name: 'adam', age: 23 }

let teacher1 = new Teacher("rahul",24, 50)
console.log(teacher1);
//output - Teacher { name: 'rahul', age: 24, classStrength: 50 }

let student1 = new Student('Pavan',16, 8.2)
console.log(student1);
//output - Student { name: 'Pavan', age: 16, cgpa: 8.2 }