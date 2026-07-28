class Animal{

    constructor(name){
        console.log("This is an Animal constructor",name);
    }

    eat()
    {
        console.log("animal is eating");
    }
    
    work(){
        console.log("working");
    }
    sound()
    {
        console.log("animal is making sound");
    }
}
class Cat extends Animal{

    constructor(name){
        super(name);
        console.log("This is an Animal ",name);
    }
    sound()
    {
        super.work();
        console.log("cat is making sound");
    }
}

let cat = new Cat("tommy");
cat.eat();



