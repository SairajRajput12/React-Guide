const name = 'sairaj'; 
console.log(10 + 5); 
console.log(10/5); 
console.log(10*5); 
console.log("hello" + " world" + " " + "this is sairaj");
export {name};
// case 1: both the variables of the same datatype 
var x = 10; 
var y = 10; 
console.log(x===y);
console.log(x == y); 


// case 2: when both of the variable of the different datatype: 
// case 2.1 : let and var 
var x = 10; 
let m = 10; 

console.log(x == m); 
console.log(x === m); 


// case 2.2: let and const
const z = 10; 
console.log(z == m); 
console.log(z === m); 

// case 2.3: const and var 
console.log(x == z); 
console.log(x === z); 



// comparision operators will work good in case of same types of values but fails when we consider different types of values 
// e.g, x stores "10" and y stores 10 then they will give false in case of (===) else in case of (==) it returns true. in case of all types of the values

const z1 = "10"; 
console.log(z1 == m); 
console.log(z1 === m); // returns the false
console.log(x == z1); 
console.log(x === z1); // returns the false

console.log("(100 + 50) * 3 :",(100 + 50) * 3); 
console.log("100 + 50 * 3 :",100 + 50 * 3); 
console.log(" 100 / 50 * 3 :", 100 / 50 * 3);
console.log(" 100 * 50 / 3 :", 100 * 50 / 3);


// let x = 2; // 0010   --------> 2                                                            
// x <<= 3;   // 10000  --------> 16    // left shift increments the value.    


// let x = 512;  
// x >>= 6; // right shift shrinken the value. // 8
// document.write(x);


console.log(x ??= 0); // returns 10
let j; 
console.log(j ??= 0) // returns 0;