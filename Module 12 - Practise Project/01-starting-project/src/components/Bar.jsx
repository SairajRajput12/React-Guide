import { useEffect, useState } from "react";

export default function Bar({timer1,timer,setTimer,setQuestionId}){
    useEffect(() => {
        console.log('SETTING TIMEOUT');
        const timer = setTimeout(
            () => {
                setQuestionId(prevId => prevId + 1);
            }   
        ,timer1);
    
        return () => {
          clearTimeout(timer);
        };
      }, [timer]);
    

    useEffect(() =>{
        const interval = setInterval(() => {
            setTimer((prevRemainingTime) => prevRemainingTime - 100);
          }, 100);
      
          return () => {
            clearInterval(interval);
          };
    },[]); 

    return(
        <progress value={timer1} max={timer} ></progress>
    )
}