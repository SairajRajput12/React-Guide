import QUESTIONS from '../Question' 
import QuestionTimer from './QuestionTimer'
import Answers from './Answers'
import { useState } from 'react';


export default function Question({timer,index,onSelectAnswer,onSkipAnswer}){    


    

    return(
        <div id="question">
            <QuestionTimer key={index}  timer={timer} handleSkipAnswer={onSkipAnswer} /> 
            <h2>{QUESTIONS[index].text}</h2>
            <Answers index={index} onSelect={onSelectAnswer} answers={QUESTIONS[index].answers} />
        </div>
    )
}