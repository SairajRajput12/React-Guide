import Player from './components/Player.jsx';
import TimeChallenge from './components/TimeChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges"> 
          <TimeChallenge title={'Level 1'} targetTime={1}/>
          <TimeChallenge title={'Level 2'} targetTime={5}/>
          <TimeChallenge title={'Level 3'} targetTime={10} />
          <TimeChallenge title={'Level 4'} targetTime={15}/>

      </div>
    </>
  );
}

export default App;
