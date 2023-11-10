 class person{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;

    }

    welcome(){
        console.log(`hello, ${this.name}`);
    }
 }

 let person1 = new person("adam",'12')
 person1.welcome()