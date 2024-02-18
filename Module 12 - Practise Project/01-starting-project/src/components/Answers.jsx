import { useRef } from "react";


export default function Answers({answers,onSelect,answerState,seletectedAnswer}){
    console.log('the answer component executed again ')

    const shuffledAnswers = useRef(); 

    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...answers]; 
        shuffledAnswers.current.sort(()=>{
          // -1; // swapping of element takes place. 
          return (Math.random()-0.5); // shuffles answers
        }); // it will shuffle the ordering of answers 
    }

    return(
        <ol id="answers">
            {shuffledAnswers.current.map((value,index) => {
                let cssClass = '' 
                const isSelected = seletectedAnswer === value;
                  if(answerState === 'answered' && isSelected){
                      cssClass = 'selected'; 
                  }

                  if((answerState === 'correct' || answerState === 'wrong') && isSelected){
                      cssClass = answerState; 
                  }

                return <li key={index} className={"answer"} ><button className={cssClass} onClick={() => onSelect(value)} disabled={answerState !== ''}>{value}</button></li>
            })}
        </ol>
    )
}

// here we have used the useRef only for shuffling the component values. 