import { useRef, useState } from "react"
import Result from "./Result";



export default function TimeChallenge({title,targetTime}){
    const [timeRemaining,setTimeRemaining] = useState(targetTime*1000); 
    const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime*1000; 
    const time = useRef();
    const dialog = useRef(); 

    if(timeRemaining <= 0){
        clearInterval(time.current);
        dialog.current.open() 
    }


    function handleStart(){
        time.current = setInterval(() => {
            setTimeRemaining((prevTime) => (prevTime - 10)); 
        },10); 
        console.log('timer has been started'); 
    }

    function handleStop(){
        clearInterval(time.current); 
        console.log('the timer has been closed');  
        dialog.current.open(); 
    }

    function handleReset(){
        setTimeRemaining(targetTime*1000);  
    }

    return(
        <>
                <Result ref={dialog} targetTime={targetTime} timeRemaining={timeRemaining} onReset={handleReset} />
                <section className="challenge">
                    <h1 style={{color:'black'}}>{title}</h1> 
                    <p className="challenge-time">
                            {targetTime} second{targetTime > 1 ? 's' : ''}
                    </p>
                    <p>
                        <button onClick={timeIsActive ?  handleStop : handleStart}>
                            {timeIsActive ? 'stop' : 'start'} Challenge
                        </button>
                    </p>
                    <p className={timeIsActive ?  'active' : undefined}>
                        {timeIsActive ?  'Timer is running' : 'Timer is inactive'}
                    </p>
                </section>
        </>
    )
}