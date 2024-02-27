import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom'; 

// create portal is used to teleport the html code to the different place at the dom 
// 
const ResultModal = forwardRef(function ResultModal({targetTime,timeRemaining,onReset},ref){
    const dialog = useRef(); 

    const userLost = timeRemaining <= 0; 
    const formattedRemainingTime = (timeRemaining/1000).toFixed(2); 
    const score = Math.round(1-timeRemaining/(targetTime*100)); 
    useImperativeHandle(ref,() => {
        return{
            open(){
                dialog.current.showModal(); 
            }
        };
    }); 

    return createPortal(
        // Lecture 139: Forwarding ref prop to the result modal component 
        // we cannot forward the refs to component directly so we have to use the methood called forward refs 
        // forward refs always accepts 2 parameters 
        <dialog ref={dialog}  className="result-modal" onClose={onReset}> 
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>Your Scroe: {score}</h2>}
            <p>The target time was <strong>{targetTime} seconds.</strong></p> 
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>  
            {/* this button closes the dialog */}
                <button>Close</button>
            </form>
        </dialog>,document.getElementById('modal')
    );
})

export  default ResultModal; 