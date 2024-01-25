import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [butto,setbutto] = React.useState(false);
    
    function changeClick(){
        setbutto((b) => !b); 
    }    
    return (
        <div>
            <p style={{color:(butto == true) ? 'red' : 'white'}}>Style me!</p>
            <button  onClick={changeClick}>Toggle style</button>
        </div>
    );
}
