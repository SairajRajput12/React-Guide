import { useState } from "react";


export default function TimerChallenge({title,targetTime}){
    const [timer,setTimer] = useState(false); 
    const [timerStarted,setTimerStarted] = useState(false); 
    let time; 
    function handleStart(){
        time = setTimeout(() => {
            setTimer(true); 
        },1000*targetTime); 
        setTimerStarted(true); 
    }

    function stopTimer(){
        clearTimeout(time); 
    }

    return(
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
    )
}