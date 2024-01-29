import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom";

const Result = forwardRef(function Result({onReset,timeRemaining,targetTime},ref){
    const userLost = timeRemaining <= 0; 
    const formattedRemainingTime = (timeRemaining/1000).toFixed(2); 
    const score = Math.round(1-timeRemaining/(targetTime*100)); 
    const dialog = useRef(); 

    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        };
    });

    return createPortal(
        <dialog ref={dialog} className="result-modal">
            {userLost && <h1>You Lost</h1> }
            {!userLost && <h1>You Stopped timer and score is : {score}</h1>}
            <p>Due To Mastrubation, isiliye padhai wadhai karo ias waias bano aur desh ko sambhalo</p>
            <p>The target time was <strong>{targetTime} seconds.</strong></p> 
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>  
            {/* this button closes the dialog */}
                <button>Close</button>
            </form>
        </dialog>
        ,document.getElementById('modal')
    )
})

export default Result; 