import React, { useState } from 'react';
// don't change the Component name "App"
export default function App() {
    const [val,setVal] = useState(false); 
    
    function setV(){
        setVal((prevVal) => !prevVal);
    }
    return (
        <div>
            <p className={val ? 'active':undefined}>Style me!</p>
            <button onClick={setV}>Toggle style</button>
        </div>
    );
}
