import { useRef, useState } from "react";
import Result from "./Result";


export default function Player() {
  const [playerName,setPlayerName]  = useState(null);
  const name = useRef();
  
  
  function handleNameChange(){
      setPlayerName(name.current.value); 
  }
  
  return (
    <>
      
      <section id="player">
        <h2>Welcome {playerName ?? 'The Unknow Entity'}</h2>
        <p>
          <input ref={name} type="text" />
          <button onClick={handleNameChange} >Set Name</button>
        </p>
      </section>
    </>
  );
}
