import { useRef, useState } from "react";
import Result from "../components/Result"

export default function TimeChallenge({title,targetTime}){
    const [timeRemaining,setTimeRemaining] = useState(targetTime*1000); 
    const isActive = timeRemaining < targetTime*1000 && timeRemaining > 0; 
    const timer = useRef(); 
    const dialog = useRef(); 

    function startTimer(){
        console.log('in start timer function')
        timer.current = setInterval(() => {
            console.log('getting in set interval')
            setTimeRemaining((prevTime) => (prevTime - 10)); 
        },10); 
    }

    function stoptimer(){
        // how i will stop timer i will use the ref 
        clearInterval(timer.current); 
        console.log('timer stopped succesfully'); 
        // handleReset(); 
        dialog.current.open(); 
    }

    // case 1: when user unable to stop the timer then it will reset automatically 
    if(timeRemaining <= 0){
        clearInterval(timer.current); 
        // handleReset(); 
        dialog.current.open(); 
    }

    function handleReset(){
        setTimeRemaining(targetTime*1000); 
    }


    return(

    <>
        <Result ref={dialog} onReset={handleReset} timeRemaining={timeRemaining} targetTime={targetTime}/>
            <section className="challenge">
                <h1>{title}</h1>
                <p>{targetTime} second{targetTime > 1 ? 's' : ''}</p>
                <p>
                    <button onClick={isActive ? stoptimer : startTimer} >{isActive ? 'Stop' : 'Start'} Timer</button>
                </p>
                <p className={isActive ? 'active' : undefined}>
                    Timer is {isActive ? 'Running' : 'Inactive'}
                </p>
        </section>
    </>
    );
}