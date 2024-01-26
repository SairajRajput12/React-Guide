import React from 'react'

function App() {
  const name = React.useRef(); 
  
  function handleClick(){
      console.log("I am batman"); 
      name.current.click(); 
  }
  
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input ref={name} data-testid="file-picker" type="file" accept="image/*" />
        <button onClick={handleClick}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;
