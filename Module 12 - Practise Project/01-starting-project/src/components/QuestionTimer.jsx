import { useEffect, useState } from "react";


export default function QuestionTimer({timer,handleSkipAnswer,mode}){ 
    console.log('the quiz timer component executed again ')

    

    const [remainingTime, setRemainingTime] = useState(timer);
    useEffect(() => {
        console.log('SETTING TIMEOUT');
        const timer1 = setTimeout(handleSkipAnswer, timer);
    
        return () => {
          clearTimeout(timer1);
        };
      }, [timer, handleSkipAnswer]);
    
      useEffect(() => {
        console.log('SETTING INTERVAL');
        const interval = setInterval(() => {
          setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);
    
        return () => {
          clearInterval(interval);
        };
      }, []);


    return(
        <progress id="question-time" max={timer} value={remainingTime} className={mode} />
    )
}