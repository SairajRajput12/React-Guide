import { useEffect, useState } from "react"



export default function Timer({value,mode,onTimeout}){
    const [remainingTime,setRemainingTime] = useState(value); 

    useEffect(() => {
        console.log('SETTING TIMEOUT');
        const timer = setTimeout(onTimeout, value);
    
        return () => {
          console.log('cleared timer function');
          clearTimeout(timer);
        };
      }, [value, onTimeout]);

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
        <progress id="question-time" max={value} value={remainingTime} className={mode} />
    )
}