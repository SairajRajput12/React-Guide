// it is all about data and values.  
console.log("This is the string value: Hello world"); 
var x = 1; 

export {x}; 

// why to use the variable ?? 
// 1. reusability 
// 2. readability 

let useName = 'I am Batman'; 
console.log(useName); 
var name = 'I am Venginience'; 
console.log(name); 
useName = 'Hello'; 
console.log(useName); 
var name = 'this is sairaj'; 
console.log(name); 
// let useName = 'Sairaj is here';  => throws error (only declared once)
console.log(useName); 

// const val = ''; 
const val = 'sairaj is the best';  // declaration, initialisation and assignment must be done simultaneously else it throws an error
console.log(val)


/*
4 Ways to Declare a JavaScript Variable:
    i. Using var
    ii. Using let
    iii. Using const
    iv. Using nothing


1. LET: 
    The let keyword was introduced in ES6 (2015).
    Variables defined with let can not be redeclared.
    Variables defined with let must be declared before use.
    Variables defined with let have block scope.

Demonstration: 
        let name = "sai";  // no error will be thrown
        console.log(name); // empty string will be written
        {
            let name  = "sairaj"; 
            console.log(name); 
        }
        // let name = "sai";  // error will be occuered
        console.log(name); // empty string will be written

*/ 

/*
2.VAR: 
    demonstration with "var" variable: 
    Redeclaring a variable with let, in another block, IS allowed: 
    you can redeclare the variable with var datatype at any block whether in the same block or in the different block. 
    Variables defined with var are hoisted to the top and can be initialized at any time.
    Meaning: You can use the variable before it is declared:



    */
    console.log(naam); // returns the undefined. 
    {
        var naam = "sairaj"; 
    }
    console.log(naam); // can be accesed outside the block. 
    
    //         So, in summary, the memory allocated for the variable naam will be freed at the end of the program execution or when the function that encloses the block completes execution.

/*
3. CONST: 
    Always declare a variable with const when you know that the value should not be changed.
    just declaring the const variable is not allowed. 
    
    e.g, 
    // const val = ''; 
    const val = 'sairaj is the best';  // declaration, initialisation and assignment must be done simultaneously else it throws an error
    console.log(val)

    Use const when you declare:
        A new Array
        A new Object
        A new Function
        A new RegExp

    You can change the elements of a constant array
*/


console.log('..END: Lecture 16 - Please refer the comments ..'); 
