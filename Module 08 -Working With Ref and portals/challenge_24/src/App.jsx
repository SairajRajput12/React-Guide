import React from 'react'; 
import Form from './components/Form';

// Don't change the name of the 'App' 
// function and keep it a named export

export default function App() {
  const inp = React.useRef(); 
  function handleRestart() {
      inp.current.clear(); 
  }
  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <Form ref={inp} />
    </div>
  );
}

