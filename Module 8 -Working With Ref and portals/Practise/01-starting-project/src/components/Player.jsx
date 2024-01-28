import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  const [playerName,setPlayerName] = useState(null); 
  const name = useRef(); 

  function handleSubmit(){
    setPlayerName(name.current.value); 
    name.current.value = ""; 
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : 'The Unknown Entity'}</h2>
      <p>
        <input ref={name} type="text"/>
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
