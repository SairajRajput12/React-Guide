var x23 = 'This is the spread Operator function'; 
const sample = ['this is the sample','spread operator','tutorial']; 
const user = {
    name :  "sairaj", 
    age  : '21'
};


const ListToMergeWith = ['today is 29 december','complete module 2']; 
const MergedOperator = [...sample,...ListToMergeWith]; // this operator will pull out all elements of sample array 
// mergedOperator = [sample,ListToMergeWith] -> returns the merged array
console.log(MergedOperator); 

const extendedUser = {
    isAdmin:true,
    ...user
}


extendedUser.name = "sai"; 
console.log(user); 
console.log(extendedUser);

for(const x of MergedOperator){
    console.log(x); 
}
export {x23}; 