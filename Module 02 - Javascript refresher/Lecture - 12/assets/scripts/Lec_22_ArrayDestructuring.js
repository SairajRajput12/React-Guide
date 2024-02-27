var x22 = 0; 

const userName = ['sairaj','sai','raj','raj']; 

// standard methood: 
// const m  = userName[0]; 
// const n  = userName[1]; 
// const o  = userName[2]; 
// const p  = userName[3]; 

// another methood: 
const [x,y,z,w] = userName; 
console.log(x); 
console.log(y); 
console.log(z); 
console.log(w); 

// now destructuring the object

const {name,div:age,prn_number,roll_number} = {
    name:'sairaj', 
    div : 'A', 
    prn_number: 22111025,
    roll_number: 331049 
}

console.log(name); 
console.log(prn_number);
console.log(age); 
console.log(roll_number)
const userName1 = ['sairaj','sai','raj','raj']; 


// you can also destructure the object in the function parameter list when you are passing the object to it 
// e.g, 
function HowBoysWrite(userName1){
    console.log(userName1[0]); 
    console.log(userName1[1]); 
    console.log(userName1[2]); 
    console.log(userName1[3]);    
}

const myFirstObject = {
    name:'sairaj', 
    div : 'A', 
    prn_number: 22111025,
    roll_number: 331049 
}


HowBoysWrite(userName1); 

function HowSigmaWrite([x,y,z,w]){
    console.log(x); 
    console.log(y); 
    console.log(z); 
    console.log(w);
}

HowSigmaWrite(userName1); 
function HowBoysWrite1(obj){
    console.log(obj.name); 
    console.log(obj.div); 
    console.log(obj.prn_number); 
    console.log(obj.roll_number);    
}
function HowSigmaWrite1({name,div,prn_number,roll_number}){
    console.log(name); 
    console.log(div); 
    console.log(prn_number); 
    console.log(roll_number);    
}
HowBoysWrite1(myFirstObject); 
HowSigmaWrite1(myFirstObject); 








export {x22};