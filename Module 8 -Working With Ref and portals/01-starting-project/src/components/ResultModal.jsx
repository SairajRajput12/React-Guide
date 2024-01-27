import { forwardRef, useImperativeHandle, useRef } from "react";


const ResultModal = forwardRef(function ResultModal({targetTime,result},ref){
    const dialog = useRef(); 

    useImperativeHandle(ref,() => {
        return{
            open(){
                dialog.current.showModal(); 
            }
        };
    }); 

    return(
        // Lecture 139: Forwarding ref prop to the result modal component 
        // we cannot forward the refs to component directly so we have to use the methood called forward refs 
        // forward refs always accepts 2 parameters 
        <dialog ref={dialog} className="result-modal"> 
            <h2 >Your {result} </h2> 
            <p>The target time was <strong>{targetTime} seconds.</strong></p> 
            <p>You stopped the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">  
            {/* this button closes the dialog */}
                <button>Close</button>
            </form>
        </dialog>
    );
})

export  default ResultModal; 