import React from 'react';

function App() {
    const [color, setColor] = React.useState("");

    let cssClass;

      if (color === 'green') {
        cssClass = 'highlight-green';
      } else if (color === 'red') {
        cssClass = 'highlight-red';
      }

    function handleColorChange(newColor) {
        setColor(newColor);
    }

    return (
        <div id="app">
            <h1 className={cssClass}>CSS is great!</h1>
            <menu>
                <li>
                    <button onClick={() => handleColorChange('green')}>Yes</button>
                </li>
                <li>
                    <button onClick={() => handleColorChange('red')}>No</button>
                </li>
            </menu>
        </div>
    );
}

export default App;
