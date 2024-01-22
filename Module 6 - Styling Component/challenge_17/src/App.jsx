/*
Your task is to help out a colleague and style a h1 element dynamically (with inline styles) depending on which button was pressed.

If the "Yes" button is pressed, the h1 element should receive color: "green" as an inline style. If the "No" button is pressed, color: "red" should be applied.

Initially, when no button has been clicked yet, the color should be set to "white".

Important: You must use these specific colors ("green", "red", "white") - don't use any hex code or slight variations of these colors!

In addition, this Udemy exercise workspace does not support the direct usage of React Hooks - instead, import React from 'react' and then use Hooks like this: React.useState().


*/

import React from 'react';

function App() {
    const[color,setColor] = React.useState("");
    
    function handleColorChange(Newcolor){
        setColor(Newcolor); 
    }
        
    return (
    <div id="app">
      <h1 style={{color:(color === "") ? 'white' : color}}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={()=>handleColorChange('green')}>Yes</button>
        </li>
        <li>
          <button onClick={()=>handleColorChange('red')} >No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
