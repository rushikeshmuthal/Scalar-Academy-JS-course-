class Animal {
    sound (){
        console.log('animal makes different sounds');
    }
}
class Dog {
    sound (){
        console.log('Dog Barks');
    }
}
class Cat {
    sound (){
        console.log('Cat Mews');
    }
}
let animal1 = new Animal ()
let tommy = new Dog()
let perxy = new Cat()

animal1.sound()
tommy.sound()
perxy.sound()