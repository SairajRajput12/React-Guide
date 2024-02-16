import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from './QuestionTimer';
import QUESTIONS from '../Question'

export default function Question({index,onSelectAnswer,onSkipAnswer}){
    const [answer,setAnswer]  = useState({
        seletedAnswer:'',
        isCorrect:null,
    });
    let timer = 10000; 
    if(answer.seletedAnswer){
        timer = 1000; 
    }

    if(answer.isCorrect !== null){
        timer = 2000; 
    }

    console.log(parseInt(index)); 
    console.log(QUESTIONS[index])


    function handleSelectAnswer(answer){
        setAnswer({
            seletectedAnswer:answer,
            isCorrect:null
        })
        setTimeout(() => {
            setAnswer({
                seletedAnswer:answer,
                isCorrect: QUESTIONS[index].answers[0] === answer
            })

            setTimeout(() => {
                onSelectAnswer(answer); 
            },2000); 
        },1000)
    }

    let answerState = ''; 
    if(answer.seletedAnswer && answer.isCorrect !== null){
            answerState = answer.isCorrect ? 'correct' : 'wrong'; 
    }
    else if(answer.seletedAnswer){
            answerState = 'answered';
    }


    
    return(
        <div id="question">
            <QuestionTimer key={timer}  timeout={timer} onTimeout={answer.seletedAnswer === '' ? onSkipAnswer : null} mode={answerState} /> 
        <h2>{QUESTIONS[index].text}</h2>
            <Answers answers={QUESTIONS[index].answers} seletectedAnswer={answer.seletedAnswer} answerState={answerState} onSelect={handleSelectAnswer} />
        </div>
    )
}