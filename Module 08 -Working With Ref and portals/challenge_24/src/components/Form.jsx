import React from 'react'; 

const Form = React.forwardRef(function Form({},ref) {
  
  const changeIn = React.useRef(); 
  React.useImperativeHandle(ref,()=>{
            return{
                clear(){
                   changeIn.current.reset(); 
                }
            }     
       });
  
  return (
    <form ref={changeIn}>
      <p>
        <label>Name</label>
        <input type="text" />
      </p>

      <p>
        <label>Email</label>
        <input type="email" />
      </p>
      <p id="actions">
        <button>Save</button>
      </p>
    </form>
  );
})

export default Form; 
