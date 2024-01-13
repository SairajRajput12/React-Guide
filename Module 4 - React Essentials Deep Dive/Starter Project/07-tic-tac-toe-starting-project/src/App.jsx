import { useState } from "react";
import GameBoard from "./components/GameBoard";
import PlayerInfo from "./components/PlayerInfo";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/winning-combinations";
import GameOver from "./components/GameOver";

const PLAYERS = {
  X : 'Player 1', 
  O : 'Player 2'
}

const INITIAL_GAMEBOARD = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
]


function deriveActivePlayer(gameTurns){
  let curActivePlayer = 'X'; 
  if( gameTurns.length > 0 && gameTurns[0].player === 'X'){
      curActivePlayer = 'O'; 
  }

  return curActivePlayer; 
}

function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAMEBOARD.map((array)=>[...array])]; 
    for(const turn of gameTurns){
        const {square,player} = turn; // object destructuring. 
        const {row,col} = square; // object destructuring. 
        gameBoard[row][col] = player;  
        // we are producing deriving states. 
  }
  return gameBoard;
}

function deriveWinner(gameBoard,players){
  let winner; 
  for(const winningcombi of WINNING_COMBINATIONS){
      const firstSquareSymbol = gameBoard[winningcombi[0].row][winningcombi[0].column]; 
      const SecondSquareSymbol = gameBoard[winningcombi[1].row][winningcombi[1].column]; 
      const ThirdSquareSymbol = gameBoard[winningcombi[2].row][winningcombi[2].column]; 

      if(firstSquareSymbol !== null && firstSquareSymbol === SecondSquareSymbol && firstSquareSymbol === ThirdSquareSymbol){
        winner = players[firstSquareSymbol]; 
      }
  }
  return winner; 
}

function App() {
  // Lecture 81: 
  // For switiching the prop we will use lift the state up to the closest ancestor components that has access to all components that needs to work with that state 
  // const [activePlayer,setActivePlayer] = useState('X'); 
  const [players,setPlayers] = useState({
    PLAYERS
  })
  const [gameTurns,setGameTurns] = useState([]);  // this is the main state which is controlling our game.
  // const [hasWinner,setHasWinner] = useState(false);  -> if i use this then the app will get updated on each turn
  const activePlayer = deriveActivePlayer(gameTurns); 
  // let gameBoard = [...initialGameBoard.map(array=> [...array])]; // creating deep copy  
  // checking for the winner 
  const gameBoard = deriveGameBoard(gameTurns); 
  const winner = deriveWinner(gameBoard,players); 
  const hasDraw = gameTurns.length === 9 && !winner; 
  

  

  function handleActivePlayer(rowIndex,colIndex){
      // setActivePlayer((activePlayer) => (activePlayer === 'X' ? 'O' : 'X')); 
      setGameTurns((prevTurns) => {
        // Lecture 83: 
        // approach of updated turns is not optimal beacuse you are merging two active states.  
        let curActivePlayer = deriveActivePlayer(prevTurns); 
        const updatedTurns = [{square:{row:rowIndex,col:colIndex},player:curActivePlayer},...prevTurns];  // adding previous turns to the array
        return updatedTurns;
      }); 
      
      // set game turns now we will get the information about turn that took place  
      // adding new state which will store the information same kind just with the little bit of the data 
      // this thing should be avoid. 
  }

  function handleRestart(){
    setGameTurns([]); 
  }
  

  function handleNameChange(symbol,newName){
    setPlayers(prePlayers => {
      return{
        ...prePlayers, 
        [symbol] : newName
      };
    });
  }

  return (
      <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
               <PlayerInfo playerName={PLAYERS.X} playerSign='X' isActive={activePlayer === 'X'} onChangeName={handleNameChange}/>
               <PlayerInfo playerName={PLAYERS.O} playerSign='O' isActive={activePlayer === 'O'} onChangeName={handleNameChange}/>
               {/* Note from Lecture 75: when you are using or reusing the components then the react will always create a new instance for the component */}
               {/* due to this feacture you can built the super complex ui which consists of components which do not interfere with each other */}
            </ol> 
            {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
            <GameBoard currPlayer={activePlayer} fun={handleActivePlayer} turns={gameTurns} board={gameBoard}/>
        </div>
        <Log turns={gameTurns}  />
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