import QUESTIONS from '../Question' 
import QuestionTimer from './QuestionTimer'
import Answers from './Answers'
import { useState } from 'react';


export default function Question({index,onSelectAnswer,onSkipAnswer}){ 
    // i have added this component seprate to reduce the repeated mounting of the timer. 
    const [answer,setAnswer]  = useState({
        seletedAnswer:'',
        isCorrect:null,
    });

    let timer = 10000; 
    if(answer.seletedAnswer){
        timer  = 1000; 
    }

    if(answer.isCorrect !== null){
        timer  = 2000; 
    }


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
            <QuestionTimer key={index}  timer={timer}  handleSkipAnswer={answer.seletedAnswer === '' ? onSkipAnswer : null}  mode={answerState} /> 
            <h2>{QUESTIONS[index].text}</h2>
            <Answers index={index} answers={QUESTIONS[index].answers} seletectedAnswer={answer.seletedAnswer} answerState={answerState} onSelect={handleSelectAnswer} />
        </div>
    )
}