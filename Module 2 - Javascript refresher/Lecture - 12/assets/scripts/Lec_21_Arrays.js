const hobbies = ["sairaj","saran","rajput","this is the best guy"]; 
console.log(hobbies[0]); 
console.log(hobbies[1]); 
hobbies.push("shreya saran"); 
console.log(hobbies); 

const index = hobbies.findIndex((item) => { // executed for each element on the array.
    return item === "saran"; 
}); 

// another way: 
const ind = hobbies.findIndex((item) => item === "saran"); 

// best way: 
const editedHobbies = hobbies.map((item) => item+":");
console.log(editedHobbies);
console.log(index); 

const tryeH = hobbies.map((items,index) => index+"]"+items+":"); 
console.log(tryeH);

// map function takes the function as an input which will get the input as the function. 

// returning the object using map methood:  
const firstObj = hobbies.map((item,index) => ({text:item,val:index})); 
console.log(firstObj);


const text21 = "sairaj"; 
export {text21};