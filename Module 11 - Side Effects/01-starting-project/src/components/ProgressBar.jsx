import { useEffect, useState } from "react";

const TIMER = 3000; 
export default function ProgressBar(){
    const [remainingTime,setRemainingTime] = useState(TIMER); 
    useEffect(() => {
        setInterval(() => {
          setRemainingTime((prevTime) => prevTime-10);
        },10);
      },[])

    return(
        <progress value={remainingTime} max={TIMER} />
    );  
}