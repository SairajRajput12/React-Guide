import { useEffect, useState } from "react";

export default function QuestionTimer({timeout,onTimeout}){
    
    const [remainingTime,setRemainingTime] = useState(timeout); 
    useEffect(() =>{
        console.log('SETTING TIMEOUT'); // this function executed again
        const timer = setTimeout(onTimeout,timeout); 
        
        return () => {
            clearTimeout(timer); 
        }
    },[]); 

    useEffect(() => {
        console.log('SETTING INTERVAL'); 
        const intervale = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
            // due to react strict mode there are 2 running intervals which leads to complete the progress bar in half of the time. 
        } ,100);

        return() => {
            clearInterval(intervale); 
        }
    },[]); 

    // Why the timer not get restarted ?? 
    // beacuse this given component does not get restarted beacuse it was not the part of dom before and now. 
    


    return(
        <progress id="question-time" value={remainingTime}  max={timeout} />
    );
}