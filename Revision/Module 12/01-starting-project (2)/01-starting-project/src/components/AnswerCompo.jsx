import { useRef } from "react";


export default function AnswerCompo({answers,onSelect,answerState,selectedAnswer}){
    console.log('Hello i am your answer'); 

    const  shuffledAnswers = useRef(); 

    // const  shuffledAnswers = answers.sort(() => {
    //     return (Math.random()-0.5);
    // })


    if(!shuffledAnswers.current){
        console.log(shuffledAnswers.current); 
        shuffledAnswers.current = [...answers]; 
        shuffledAnswers.current.sort(()=>{
          // -1; // swapping of element takes place. 
          return (Math.random()-0.5); // shuffles answers
        }); // it will shuffle the ordering of answers 
     }


    return(
        <>
            <ul id="answers">
                {shuffledAnswers.current.map((value) => {
                    let cssClass = ''; 
                    const isSelected = selectedAnswer === value; 
                    
                    if(answerState === 'answered' && isSelected){ // means answer value matches with it.
                        cssClass='selected'; 
                    }

                    if((answerState === 'correct' || answerState === 'wrong') && isSelected){
                      cssClass = answerState; 
                  }


                    return(
                            <li key={value} className="answer">
                                <button onClick={() => onSelect(value)} className={cssClass} disabled={answerState !== ''} >{value}</button>
                            </li>
                    )
                })}
            </ul>
        </>
    )
}