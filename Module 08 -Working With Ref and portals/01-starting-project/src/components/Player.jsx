// import { useState } from "react";

// export default function Player() {
//   const [name,editName] = useState(null); 
//   const [submitted,setSubmitted] = useState(false); 
  
//   function handleNameChange(name1){
//     setSubmitted(false); 
//     editName(name1); 
//   }

//   function handleSubmit(){
//     setSubmitted(true); 
//   }

//   return (
//     <section id="player">
//       <h2>Welcome {submitted ? name : 'The Unkown Entity'}</h2>
//       <p>
//         <input onChange={(event => handleNameChange(event.target.value))} value={name} type="text" />
//         <button onClick={handleSubmit} >Set Name</button>
//       </p>
//     </section>
//   );
// }


// what is the best way instead of usign key strokes ?? 

import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  const playerName = useRef(); 
  const [name,editName] = useState(null); 
  

  function handleSubmit(){
    editName(playerName.current.value);
    playerName.current.value = ""; 
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? 'The Unkown Entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button  onClick={handleSubmit} >Set Name</button>
      </p>
    </section>
  );
}
