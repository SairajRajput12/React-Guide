import { useEffect, useState } from "react"



export default function Timer({timeout,mode,onTimeout}){
    const [remainingTime,setRemainingTime] = useState(timeout); 

    useEffect(() => {
        console.log('SETTING TIMEOUT');
        const timer = setTimeout(onTimeout, timeout);
    
        return () => {
          console.log('cleared timer function');
          clearTimeout(timer);
        };
      }, [timeout, onTimeout]);

      useEffect(() => {
        console.log('SETTING INTERVAL');
        const interval = setInterval(() => {
          setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);
    
        return () => {
          // it will prevent the previous timer 
          console.log('cleared interval function');
          clearInterval(interval);
        };
      }, []);


    return(
        <progress id="question-time" max={timeout} value={remainingTime} className={mode} />
    )
}