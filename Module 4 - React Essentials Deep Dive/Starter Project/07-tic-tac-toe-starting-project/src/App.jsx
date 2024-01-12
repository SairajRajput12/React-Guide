import GameBoard from "./components/GameBoard";
import PlayerInfo from "./components/PlayerInfo";

function App() {
  return (
      <main>
        <div id="game-container">
            <ol id="players">
               <PlayerInfo playerName='Player 1' playerSign='X'/>
               <PlayerInfo playerName='Player 2' playerSign='O' />
               {/* Note from Lecture 75: when you are using or reusing the component then the react will always create a new instance for the component */}
               {/* due to this feacture you can built the super complex ui which consists of components which do not interfere with each other */}
            </ol> 
            <GameBoard />
        </div>
      </main>
  );
}

export default App
