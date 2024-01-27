import { useRef, useState } from "react";
import ResultModal from "./ResultModal";


// let time; -> not the solution
export default function TimerChallenge({title,targetTime}){
    const time = useRef(); 
    const dialog = useRef(); 
    /*
    Why using ref is the best solution ? 
        -> beacuse the refs is the instance dependent and each component has it's own instance and these are unique for unique component
        -> Ref is the instance specific 
        -> it works idpendent of the other components 
        -> while variable get reset or cleared when component reexcutes.
        -> while the react make sure that each ref get stored behind the scenes and ensures that they do not get lost. 
        -> in this way the refs work. 
    */
    const [timer,setTimer] = useState(false); 
    const [timerStarted,setTimerStarted] = useState(false);  

    function handleStart(){
        time.current = setTimeout(()=>{
            setTimer(true); 
            dialog.current.open(); // this is the builtin method. which is used to show the dialog tag
        },1000*targetTime); 

        setTimerStarted(true); 
    }

    function stopTimer(){
        clearTimeout(time.current); 
    }

    return(
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result="lost" /> 
            {/* Lecture 139: Forwarding the ref directly will give the error that we cannot forward the ref directly to the react component. we have to use the special function called the forward ref */} 
            
            <section className="challenge">
                <h1>{title}</h1>
                {timer && <p>You Lost</p>}
                <p className="challenge-time">
                    {targetTime} second {targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? stopTimer : handleStart}>
                        {timerStarted ? 'Stop ' : 'Start '} challenge
                    </button>
                </p>

                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Timer is running' : 'Timmer is inactive'}
                </p>
            </section>
        </>
    )
}