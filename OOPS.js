/**
 * Inheritance in JavaScript:
"Define a class Vehicle with properties like brand and type. Extend this class to create two subclasses, Car and Motorcycle, each with additional specific properties. Demonstrate how you would create instances of these subclasses and access their properties."

Polymorphism in JavaScript:
"Create a class Animal with a method makeSound(). Extend this class to create subclasses Dog and Cat which override the makeSound method to print 'Bark' and 'Meow', respectively. How would you call these methods on instances of the subclasses to demonstrate polymorphism?"

Encapsulation with Private Properties:
"Write a class Person in JavaScript that encapsulates the age of the person. 
Ensure that age cannot be accessed directly outside the class. 
Provide a method to set the age which also validates that the age provided is reasonable (e.g., between 0 and 120)."

Static Methods and Properties:
" Explain how to use static methods in a class by creating a class Calculator that has static 
 methods for basic operations like add, subtract, multiply, and divide. 
 Demonstrate how these methods can be called without creating an instance of the class. "

Composition Over Inheritance:
"Discuss the concept of composition over inheritance and provide an example in JavaScript where using composition would be more appropriate than inheritance. For instance, creating a gaming system where characters can have various abilities without forming a strict class hierarchy."
 * 
 * 
 * 
 * 
 */


class Person {
    constructor(name, age) { // constructor is a keyword.  
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }

    getAge() {
        return this.age;
    }

    setAge(newAge) {
        this.age = newAge;
    }
}


// let person1 = new Person("Alice", 25);
// console.log(person1.getName()); // Outputs: Alice
// person1.setAge(26);
// console.log(person1.getAge()); // Outputs: 26

// let person2 = new Person("Bob", 30);
// console.log(person2.getName()); // Outputs: Bob
// person2.setName("Robert");
// console.log(person2.getName()); // Outputs: Robert

class Vehicles {
    #height; // private variables cannot be accessed outside class 
    #weight;
    static owner = "Kamlesh";
    static ownerFunction(){
        return "Hida ddooooo!!!! " + this.owner 
    }
    constructor(brand, type, height=300){
        this.brand = brand; // public variables
        this.type = type;
        this.#height = height
      //  console.log("height ", this.#height)
    }
    brandAndType(){
        console.log(' owner is ',this.owner, Vehicles.ownerFunction());
        return "I have a car " + this.type + " of brand " + this.brand + " height " + this.#height; 
    }

}

class Car extends Vehicles {
    constructor(color, horsepower, brand, type){
        super(brand, type); // mandatory before any this keyword. We cannot access privates in inherited classes
        this.color = color;
        this.horsepower = horsepower;
    }
    callMe(){
        console.log(` My vehicle is color: ${this.color} and brand: ${this.brand}`);
    }
    brandAndT1ype(){
        return "There I have a car " + this.type + " of brand " + this.brand + " color " + this.color ; 
    }
}

class Motorcycle extends Vehicles {
    constructor(topSpeed, brand, type){
       // super(brand, type);
       super(brand, type);
        this.brand = brand + "y";
        this.topSpeed = topSpeed;
    }
    hearMe(){
        console.log(` My vehicle is color: ${this.topSpeed} and brand: ${this.brand}`);

    }
}

let b1 = new Car('red', '5000', 'Maruti', 'Sedan');
 // console.log('Accessing properties outisde',b1.brand, b1.type, b1.color, Vehicles.owner);
 console.log("Helelo ",b1.brandAndType());
 console.log('Accessing properties outisde',b1.brand, b1.type, b1.color, Vehicles.owner);

// b1.callMe();
// let cq1 = new Motorcycle('500', "Maruti", "Sports card");
// cq1.hearMe()

//#OOPSQ1
class aEmitter{
    constructor(){
        this.obj = {}; // you can only declare a public variable inside a function constructor
    }
    subscribe(eventName, callbackFunction){

        this.obj[eventName] = callbackFunction

    }
    emit(eventName, ...args){
        let func = this.obj[eventName];
        if(func){
        return  func(...args)
        } else return null;
    }
    }

    const emitter = new aEmitter()  
    emitter.subscribe('event 1', function(a, b){
        return a + b;
    });

    emitter.subscribe('event 2', function(a, b){
        return a - b;
    });

    let solution =  emitter.emit('event 2', 3,4);
    let solution_another =  emitter.emit('event 1', 3,4);
    let solution_yet_another =  emitter.emit('event 3', 3,4);

    console.log(`Solution   `, solution, solution_another, solution_yet_another);

// ============================ FUNCTIONAL PART OF THIS ==============================================


function Cart(brand, model, year) {
    // Properties using 'this' keyword
    this.brand = brand;
    this.model = model;
    this.year = year;
  
    // Method to display car information
    this.displayInfo = function() {
      return `Cart: ${this.brand} ${this.model} (${this.year})`;
    }
}

// Create new Car objects
const cart1 = new Cart("Ford", "Mustang", 2023);
const cart2 = new Cart("Toyota", "Camry", 2022);

console.log(cart1.displayInfo()); // Output: Car: Ford Mustang (2023)
console.log(cart2.displayInfo()); // Output: Car: Toyota Camry (2022)

Cart.prototype.displayNewInfo = function() {
    return `Cart: ${this.brand} ${this.model} (${this.year})`;
  };

const cart3 = new Cart("Ford", "Mustang", 2023);
const cart4 = new Cart("Toyota", "Camry", 2022);

console.log(cart1.displayNewInfo()); // Output: Car: Ford Mustang (2023)
console.log(cart2.displayNewInfo()); // Output: Car: Toyota Camry (2022)

//#StaticQ1
class JS1{
    static counter = 0;
    constructor(){
        JS1.counter++;
        console.log("Invoked", JS1.counter, " times");
    }
}
let obj1 = new JS1();
let obj2 = new JS1();
let obj3 = new JS1();

    /***
     * 1. What is the only prefixes allowed in a class methods
     * 2. What separates one function declaration to another ?
     * 3. Can we access private variables in it's inherited class ?
     * 4. How to call static function ? Can we use this keyword ?
     * 5. Abstarct classes vs interface
     * 
     *
     * 
     * 
     * 
     * 
     * 1. Async and Static
     * 2. No comma, no anything, nothing
     * 3.  No. 
     * 4. Only with the className.[FUNCTION_NAME], yes you can use the this keyword only if  when calling function is also static
     * 
    */
