var text20 = 'This is little revisiting tutorial for objects and classes'; 
console.log('welcome to the lecture number 20'); 

const myFirstObject = {
    name:'sairaj', 
    div : 'A', 
    prn_number: 22111025,
    roll_number: 331049 
}

console.log(myFirstObject); 
// now printing it's attributes 
console.log(myFirstObject.name); 
console.log(myFirstObject.div); 
console.log(myFirstObject.prn_number); 
console.log(myFirstObject.roll_number);


/*
JavaScript variables can be objects. Arrays are special kinds of objects.
Because of this, you can have variables of different types in the same Array

// javascript primitives: 
//      A primitive value is a value that has no properties or methods.
//      A primitive data type is data that has a primitive value.
/*
Types of primitive data: 
    string
    number
    boolean
    null
    undefined
    symbol
    bigint
Primitive values are immutable (they are hardcoded and cannot be changed).
*/ 


// JavaScript variables can also contain many values.
// Objects are variables too. But objects can contain many values.
// Object values are written as name : value pairs (name and value separated by a colon).
// A JavaScript object is a collection of named values
// It is a common practice to declare objects with the const keyword.
// The named values, in JavaScript objects, are called properties.
/*
    Methods are actions that can be performed on objects.
    Object properties can be both primitive values, other objects, and functions.
    An object method is an object property containing a function definition.
*/

// JavaScript objects are containers for named values, called properties and methods.



// creating the javascript object: 
/*
With JavaScript, you can define and create your own objects.
There are different ways to create new objects:

Create a single object, using an object literal.
Create a single object, with the keyword new.
Define an object constructor, and then create objects of the constructed type.
Create an object using Object.create().
*/



// writing the function into the object: 
const user = {
    name:'sairaj', 
    age:21,
    greet(){
        console.log('This is the sairaj!!'); 
    }, 
    another_function(){
        console.log(`this is the another methood which is seprated from it's previous using semicolon`); 
    }
}

user.greet(); 
user.another_function(); 

// creating class 
class User1{
    // class name should stat with the capital case characte 

    constructor(name,age){
        console.log('this is the consturctor'); 
        this.name = name; 
        this.age = age; 
    }

    greet(){
        console.log('Name : ',this.name);  // must use this keywords else it throws an error that name is not defined 
        console.log('Age: ',this.age); // same goes in this line as in line 94 if this is not used. 
        console.log('pura nagar ka king ban chuka hai bhai.jindagi mein sabkuch ukhada hai.'); 
    }
}

const u1 = new User1('sairaj',21); 
console.log(u1); 
u1.greet(); 



// javascript object's are mutable: 
//      Objects are mutable: They are addressed by reference, not by value.

const m = u1; // value pass nahi hota direct reference pass hota hai. 
m.name = 'sai'; 
console.log(m); 
console.log(u1); 


/*
The syntax for accessing the property of an object is:

    objectName.property      // person.age -----> dot property accessor 
                            // You can use the dot property accessor in a chain to access deeper properties: object.prop1.prop2. 
    or

    objectName["property"]   // person["age"]

    or

    objectName[expression]   // x =  "age"; person[x]
*/


// deleting the property: 
console.log(myFirstObject); // before deletion; 
delete myFirstObject.prn_number; 
console.log(myFirstObject); // after deletion; 

//JavaScript methods are actions that can be performed on objects.
// A JavaScript method is a property containing a function definition.
// Accessing Object Methods
// You access an object method with the following syntax:
// objectName.methodName()
// You will typically describe fullName() as a method of the person object, and fullName as a property.
// The fullName property will execute (as a function) when it is invoked with ().
// This example accesses the fullName() method of a person object:


/*
objectName.methodName()
You will typically describe fullName() as a method of the person object, and fullName as a property.

The fullName property will execute (as a function) when it is invoked with ().

*/


/****************************Object display ******************************/
// Displaying a JavaScript object will output [object Object].
//Displaying Object Properties: 
/*
// directly accessing the properties of the object. 
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

document.getElementById("demo").innerHTML =
person.name + "," + person.age + "," + person.city;

*/


/*
Why Using Getters and Setters?
It gives simpler syntax
It allows equal syntax for properties and methods
It can secure better data quality
It is useful for doing things behind-the-scenes
*/

// Object.defineProperty()
// The Object.defineProperty() method can also be used to add Getters and Setters:

// Define object
const obj = {counter : 0};

// // Define setters and getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});

Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});

Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});

Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});

Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// // Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

console.log(obj)


export {text20};