const xz = 'The given tutorial is of lecture 18: Functions'; 
console.log('tutorial number 18 succesfully loaded'); 

/* 
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
Function parameters are listed inside the parentheses () in the function definition.
Function arguments are the values received by the function when it is invoked.
*/



/*Local Variables

Variables declared within a JavaScript function, become LOCAL to the function.

Local variables can only be accessed from within the function.
 */

// code here can NOT use carName
// const car = {type:"Fiat", model:"500", color:"white"};  
// // alert(car);
// console.log(car)
// It is a common practice to declare objects with the const keyword. 




// function calling using constructor: 
// This is a function constructor:
// function myFunction(arg1, arg2) {
//   this.firstName = arg1;
//   this.lastName  = arg2;
// }

// // This creates a new object
// const myObj = new myFunction("John", "Doe");

// // This will return "John"
// myObj.firstName;

// // function rest parameter: 
// function sum(...args) {
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// }

// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);


// function call() methood: 
// With the call() method, you can write a method that can be used on different objects.
// If a function is not a method of a JavaScript object, it is a function of the global object (see previous chapter).

// it is predefined methood. 
// it is used to invoke the method with an owner object and as an parameter. 

   
   
function print(name = 'rajput'){
    console.log(name); 
}

print('sairaj');
print(); // it will not throw an error because i have passed the default value. 


function funreturnval(){
    return 'this function returns the value has been called when you are printing on the console'; 
}

console.log(funreturnval);


   
   
   
   
   
   
   

export {xz}; 