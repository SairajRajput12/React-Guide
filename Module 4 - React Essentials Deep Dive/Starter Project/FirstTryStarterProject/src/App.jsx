import React, { useState } from "react"; 
import Players from "./components/players";
import GameBoard from "./components/GameBoard";
import { WINNING_COMBINATIONS } from "./components/winning-combination";
import GameOver from "./components/GameOver";
import Log from "./components/Log";


const PLAYERS = {
  X:'Player 1', 
  O:'Player 2'
}
 
const initial_board = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

function handleGameBoard(gameTurns){
  let gameBoard = [...initial_board.map(array => [...array])]; // => this is the deep copy
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveActivePlayer(gameTurns){
  let curActivePlayer = 'X'; 
  if( gameTurns.length > 0 && gameTurns[0].player === 'X'){
      curActivePlayer = 'O'; 
  }

  return curActivePlayer; 
}

function deriveWinner(gameBoard,players){
  let winner; 
    for(const combination of WINNING_COMBINATIONS){
       let firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]; 
       let secondSquareSymbol =  gameBoard[combination[1].row][combination[1].column]; 
       let ThirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];  
      //  console.log(firstSquareSymbol); 
      //  console.log(secondSquareSymbol); 
      //  console.log(ThirdSquareSymbol)
      if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === ThirdSquareSymbol){
        winner = players[firstSquareSymbol];
        // console.log() 
      }
    }

    if(winner){
      console.log('winner deriving function works correctly and we got our winner as ',winner); 
    }
  return winner;
}

function App() {
  
  const [playerData,setPlayerData] = useState(PLAYERS); 
  const [gameTurns,setGameTurns] = useState([]);
  const gameBoard = handleGameBoard(gameTurns); 
  const winner = deriveWinner(gameBoard,playerData); 
  const hasDraw = gameTurns.length === 9 && !winner; 
  const activePlayer = deriveActivePlayer(gameTurns); 

  function updatePlayerName(updatedName,playerSign){ 
      setPlayerData((prevData) => {
          const updatedData = {...prevData,[playerSign]:updatedName};  
          // if i do not use [] in [playerSign] then it will treat playerSign key and will not update the symbol with the player name  
          return updatedData;
      });
  }

  console.log('app component executed ');

  

  function handleButtonClick(rowIndex,colIndex){
    console.log('the button from the button is clicked'); 
    console.log(rowIndex); 
    console.log(colIndex);
      setGameTurns((prevTurns) => {
          let curActivePlayer = deriveActivePlayer(prevTurns); 
          const updatedData = [{square:{row:rowIndex,col:colIndex},player:curActivePlayer}, ...prevTurns]; 
          return updatedData; 
      })
  }

  function handleRestart() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players playerName={PLAYERS.X} isActive={activePlayer === 'X'} playerSign={'X'} changePlayerName={updatePlayerName}/>
          <Players playerName={PLAYERS.O} isActive={activePlayer === 'O'} playerSign={'O'} changePlayerName={updatePlayerName}/>
        </ol> 
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard  handleButtonClick={handleButtonClick} gameBoard={gameBoard}/>
      </div>
      <Log turns={gameTurns}  />
    </main>
  )
}

export default App;