import { createRef, useEffect, useState } from 'react';
import q from '../questions'; 
import Bar from './Bar';

const curr = 0; 
const timer = 5000; 

export default function Question(){
    const [currentQuestionId,setQuestionId] = useState(curr);  
    const [timer1,setTimer] = useState(timer); 
    const question = q[currentQuestionId];
    const answer = null; 
    const t = createRef();
    
        

        function handleSelectAnswer(){
            console.log(t.current.value);
        }

    return(
        <div key={question.id} id="question">
            <Bar timer={timer} timer1={timer1} setTimer={setTimer} setQuestionId={setQuestionId} />
            <h2>{question.text}</h2>
            <ul id="answers">
                {question.answers.map((id,value1) => {
                    return(
                        <li key={value1} className="answer">
                            <button ref={t} onClick={handleSelectAnswer} >{id}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}