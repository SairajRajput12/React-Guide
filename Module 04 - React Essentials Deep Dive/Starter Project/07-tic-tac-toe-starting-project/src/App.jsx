// My code

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

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAMEBOARD.map((array) => [...array])]; // => this is the deep copy
//let gameBoard = initial gameboard -> creates shallow copy which changes intial gameboard to..
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
    // console.log()
  }
  return gameBoard;
}


function deriveWinner(gameBoard,players){
  let winner; 
  console.log('winner function run'); 
  for(const winningcombi of WINNING_COMBINATIONS){
      const firstSquareSymbol = gameBoard[winningcombi[0].row][winningcombi[0].column]; 
      const SecondSquareSymbol = gameBoard[winningcombi[1].row][winningcombi[1].column]; 
      const ThirdSquareSymbol = gameBoard[winningcombi[2].row][winningcombi[2].column]; 
      console.log(gameBoard);
      if(firstSquareSymbol && firstSquareSymbol === SecondSquareSymbol && firstSquareSymbol === ThirdSquareSymbol){
        winner = players[firstSquareSymbol]; 
      }
  }
  return winner; 
}

function App() {
  // Lecture 81: 
  // For switiching the prop we will use lift the state up to the closest ancestor components that has access to all components that needs to work with that state 
  // const [activePlayer,setActivePlayer] = useState('X'); 
  const [players,setPlayers] = useState(PLAYERS);
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
    // console.log(winner);
    setPlayers((prePlayer) => {
      const updatedPlayerState = {...prePlayer,[symbol] : newName};
      console.log(updatedPlayerState); 
      return updatedPlayerState; 
    })
    // in line number 100 i am first adding the previous data of the players state then updating it using second argument

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

export default App;





// // instructor's code:

// import { useState } from 'react';
// import GameBoard from './components/GameBoard.jsx'; 
// import GameOver from './components/GameOver.jsx';
// import { WINNING_COMBINATIONS } from './components/winning-combinations.js';
// import PlayerInfo from './components/PlayerInfo.jsx';
// import Log from './components/Log.jsx';

// const PLAYERS = {
//   X: 'Player 1',
//   O: 'Player 2'
// };

// const INITIAL_GAME_BOARD = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

// function deriveActivePlayer(gameTurns) {
//   let currentPlayer = 'X';

//   if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
//     currentPlayer = 'O';
//   }

//   return currentPlayer;
// }

// function deriveGameBoard(gameTurns) {
//   let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

//   for (const turn of gameTurns) {
//     const { square, player } = turn;
//     const { row, col } = square;

//     gameBoard[row][col] = player;
//   }

//   return gameBoard;
// }

// function deriveWinner(gameBoard, players) {
//   let winner;

//   for (const combination of WINNING_COMBINATIONS) {
//     const firstSquareSymbol =
//       gameBoard[combination[0].row][combination[0].column];
//     const secondSquareSymbol =
//       gameBoard[combination[1].row][combination[1].column];
//     const thirdSquareSymbol =
//       gameBoard[combination[2].row][combination[2].column];

//     if (
//       firstSquareSymbol &&
//       firstSquareSymbol === secondSquareSymbol &&
//       firstSquareSymbol === thirdSquareSymbol
//     ) {
//       winner = players[firstSquareSymbol];
//     }
//   }

//   return winner;
// }

// function App() {
//   const [players, setPlayers] = useState(PLAYERS);
//   const [gameTurns, setGameTurns] = useState([]);

//   const activePlayer = deriveActivePlayer(gameTurns);
//   const gameBoard = deriveGameBoard(gameTurns);
//   const winner = deriveWinner(gameBoard, players);
//   const hasDraw = gameTurns.length === 9 && !winner;

//   function handleSelectSquare(rowIndex, colIndex) {
//     setGameTurns((prevTurns) => {
//       const currentPlayer = deriveActivePlayer(prevTurns);

//       const updatedTurns = [
//         { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
//         ...prevTurns,
//       ];

//       return updatedTurns;
//     });
//   }

//   function handleRestart() {
//     setGameTurns([]);
//   }

//   function handlePlayerNameChange(symbol, newName) {
//     setPlayers(prevPlayers => {
//       return {
//         ...prevPlayers,
//         [symbol]: newName
//       };
//     });
//   }

//   return (
//     <main>
//       <div id="game-container">
//         <ol id="players" className="highlight-player">
//           <PlayerInfo
//             playerName={PLAYERS.X}
//             playerSign="X"
//             isActive={activePlayer === 'X'}
//             onChangeName={handlePlayerNameChange}
//           />
//           <PlayerInfo
//             playerName={PLAYERS.O}
//             playerSign="O"
//             isActive={activePlayer === 'O'}
//             onChangeName={handlePlayerNameChange}
//           />
//         </ol>
//         {(winner || hasDraw) && (
//           <GameOver winner={winner} onRestart={handleRestart} />
//         )}
//         <GameBoard turns={gameTurns} currPlayer={activePlayer} fun={handleSelectSquare} board={gameBoard} />
//       </div>
//       <Log turns={gameTurns} />
//     </main>
//   );
// }

// export default App;