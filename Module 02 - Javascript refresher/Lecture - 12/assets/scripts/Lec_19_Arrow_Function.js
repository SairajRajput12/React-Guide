var text = 'this is the tutorial of arrow function'; 
// Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax:

// Before Arrow:
// hello = function() {
//   return "Hello World!";
// } 

// With Arrow Function:
// hello = () => {
//   return "Hello World!";
// }

// It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
// Arrow Functions Return Value by Default:
// hello = () => "Hello World!";

const userName = () => {  console.log('jello'); }
userName(); 


const name = () => {
    console.log('line 24'); 
    console.log('line 25'); 
}

name();


/*

this is wrong: 

const test = () => if(x == 10){
    return 10; 
}
const test = () => return 10; 

*/

// const test = () =>{ return 10; } 
const test = () => {return 10; }
console.log(test());

const number = () => ({age:12, name:'sairaj bellic the picaso'});
console.log(number());
export {text}; 
