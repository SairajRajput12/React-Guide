import { useState } from "react";


export default function Players({playerName,playerSign,changePlayerName,isActive}){ 
    const [edit,setEdit] = useState(false); 
    const symbol = playerSign; 
    const [playerCurrName,setPlayerCurrName] = useState(playerName); 

    function editE(){
        setEdit(ed => !ed); 
        if(edit){
            changePlayerName(playerCurrName,symbol); 
        }
    }

    function handleChange(event){
        setPlayerCurrName(event.target.value);
    }

    let playerName2 = <span className="player-name">{playerCurrName}</span>; 
    if(edit){
        playerName2 = <input type="text" value={playerCurrName} onChange={handleChange} required/>
    }
    return(
        <li className={(isActive === true) ? 'active' : undefined}>
            <span className="player">
                 {playerName2}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editE}>
                 {edit ? 'Save' : 'Edit'}
            </button>
        </li>
    );
}