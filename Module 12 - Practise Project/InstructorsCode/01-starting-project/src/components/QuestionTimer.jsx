import { useEffect, useState } from "react";

export default function QuestionTimer({timeout,onTimeout}){
    
    const [remainingTime,setRemainingTime] = useState(timeout); 
    useEffect(() =>{
        console.log('SETTING TIMEOUT'); // this function executed again
        setTimeout(onTimeout,timeout); 
    },[]); 

    useEffect(() => {
        console.log('SETTING INTERVAL'); 
        setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        } ,100);
    },[]); 


    return(
        <progress id="question-time" value={remainingTime}  max={timeout} />
    );
}