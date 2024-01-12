import { useState } from "react";

export default function PlayerInfo({playerName,playerSign}){

// Lecture 74: Exercise time: 
    const [edit,setEdit] = useState(false); 
    const [name,setName] = useState(playerName);
    let Name = playerName; 
    let Sign = playerSign; 

    function setE(){
        // using function gurrantees to the react that you will work with the latest state value
        setEdit(editing => !editing); 
    }

    function handleChange(event){
        console.log(event); 
        setName(event.target.value);
    }

    let playerName1 = <span className="player-name">{name}</span>;  
    let buttonCaption = 'Edit';
    if(edit){
        playerName1 = <input type="text" required value={name} onChange={handleChange}/>; 
    }

    return(
        <li>
            <span className="player">
                {playerName1}
                <span className="player-symbol">{Sign}</span>
            </span>
            <button onClick={setE}>
                {edit ? 'Save' : 'Edit'}
            </button>
        </li>
    );
}