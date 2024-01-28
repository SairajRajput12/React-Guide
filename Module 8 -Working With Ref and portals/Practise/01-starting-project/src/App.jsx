import Player from './components/Player.jsx';
import TimeChallenge from './components/TimeChallenges.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges"> 
        <TimeChallenge title={'Easy'} targetTime={1}/> 
        <TimeChallenge title={'not easy'} targetTime={5}/> 
        <TimeChallenge title={'getting tough'} targetTime={10}/> 
        <TimeChallenge title={'Harder'}  targetTime={15}/> 
      </div>
    </>
  );
}

export default App;
