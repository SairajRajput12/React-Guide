import React, { forwardRef, useImperativeHandle, useRef, useEffect } from "react";
import { createPortal } from 'react-dom'; 

const Result = forwardRef(function Result({ targetTime, timeRemaining, onReset }, ref) {
    const dialog = useRef();
    const formattedRemainingTime = (timeRemaining/1000).toFixed(2); 
    const score = Math.round(1-timeRemaining/(targetTime*100)); 
    const userLost = timeRemaining <= 0; 

    
    useImperativeHandle(ref,() => {
        return{
            open(){
                dialog.current.showModal(); 
            }
        };
    }); 

    return createPortal (
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>Score: {score} </h2>}
            <p>The target time was <strong>{targetTime} seconds.</strong></p> 
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                {/* this button closes the dialog */}
                <button>Close</button>
            </form>
        </dialog>,document.getElementById('modal')
    );
});

export default Result;
