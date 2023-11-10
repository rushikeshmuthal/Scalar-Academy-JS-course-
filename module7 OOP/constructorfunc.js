function student_data (_name, _class, _rollno){
    this.name = _name
    this.class = _class
    this.rollno = _rollno;

    this.data = function (){
        console.log(`Hello, my name is ${this.name}, I am studying in ${this.class}th class, and my roll no is ${this.rollno}`);
    }
}

let student1 = new student_data('Pavan',8,23)
student1.data()
