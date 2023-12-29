var x26 = 0; 
let user = 'sairaj'; 
user = user.concat(' Hello ') // it adds new value 
console.log(user); 

const x = [1,2,3,4]; 
x[0] = 5; 
console.log(x); 
x.push(6);
console.log(x); 
const y = x; 
console.log(y); 
y[0] = 1; 
y.push(7); 
console.log(x); 
console.log(y); 

// array's are mutable while the variables are not the mutalbe beacuse when we are making changes then the new value is created instead of changing it 
// arrays are passed as a reference

export {x26}; 