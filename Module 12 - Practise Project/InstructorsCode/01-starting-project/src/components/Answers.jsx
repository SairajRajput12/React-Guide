import { useRef } from "react";
import QUESTIONS from '../Question';

export default function Answers({answers,seletectedAnswer,answerState,onSelect}){
    const  shuffledAnswers = useRef(); 

    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...answers]; 
        shuffledAnswers.current.sort(()=>{
          // -1; // swapping of element takes place. 
          return (Math.random()-0.5); // shuffles answers
        }); // it will shuffle the ordering of answers 
     }

    return(
        <>
            <ul id="answers">
                {shuffledAnswers.current.map((answer)=>{
                  let cssClass = ''; 
                  const isSelected = seletectedAnswer === answer;
                  if(answerState === 'answered' && isSelected){
                      cssClass = 'selected'; 
                  }

                  if((answerState === 'correct' || answerState === 'wrong') && isSelected){
                      cssClass = answerState; 
                  }


                    return(
                        <li key={answer} className="answer" >
                            <button onClick={() => onSelect(answer)} className={cssClass} disabled={answerState !== ''}>{answer}</button>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}