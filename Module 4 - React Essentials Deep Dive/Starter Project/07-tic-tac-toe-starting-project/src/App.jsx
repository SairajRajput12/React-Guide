import { useState } from "react";
import GameBoard from "./components/GameBoard";
import PlayerInfo from "./components/PlayerInfo";


function App() {
  // Lecture 81: 
  // For switiching the prop we will use lift the state up to the closest ancestor components that has access to all components that needs to work with that state 
  const [activePlayer,setActivePlayer] = useState('X'); 
  function handleActivePlayer(){
      setActivePlayer((activePlayer) => (activePlayer === 'X' ? 'O' : 'X')); 
  }

  return (
      <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
               <PlayerInfo playerName='Player 1' playerSign='X' isActive={activePlayer === 'X'}/>
               <PlayerInfo playerName='Player 2' playerSign='O' isActive={activePlayer === 'O'}/>
               {/* Note from Lecture 75: when you are using or reusing the components then the react will always create a new instance for the component */}
               {/* due to this feacture you can built the super complex ui which consists of components which do not interfere with each other */}
            </ol> 
            <GameBoard currPlayer={activePlayer} fun={handleActivePlayer} />
        </div>
        {/*Lecture 82: Avoid intersecting states */} 
        LOG
      </main>
  );
}

export default App

/*
instructor's code:

import { useState } from 'react';

import PlayerInfo from './components/PlayerInfo.jsx';
import GameBoard from './components/GameBoard.jsx';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo playerName="Player 1" playerSign="X" isActive={activePlayer === 'X'} />
          <PlayerInfo playerName="Player 2" playerSign="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard fun={handleSelectSquare} currPlayer={activePlayer} />
      </div>
      LOG
    </main>
  );
}

export default App
*/