var x24 = 0; 
console.log('Meow'); 

function handleTimeout(){
    console.log('Timed out !'); 
}

const handleTimeout2 = () =>{
    console.log("Timed out again"); 
}

setTimeout(handleTimeout,2000); // if i add parenthesis it means the function will be executed immediately. - code with harry 

// another way 
setTimeout(() => {
    console.log('sairaj i am this is my first timedout function')
},1000);

function  kalakari(kalakarMax){
    kalakarMax(); 
}

kalakari(() => console.log("Yarr Tera max desi kalakar")); 

setTimeout(() => {console.log("this is my second function using the settimerdout ")},2000)

export {x24}; 