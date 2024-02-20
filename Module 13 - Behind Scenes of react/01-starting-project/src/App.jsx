import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';
import { useState } from 'react';

function App() {
  log('<App /> rendered');
  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount){
      setChosenCount(newCount); 
      setChosenCount(prevChosenCount => prevChosenCount + 1); 
      console.log(chosenCount);  // won't work you will not get changed state value. 
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount}  />
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount = {0} />
      </main>
    </>
  );
}

export default App;
