import { useState } from 'react';
import QUESTIONS from '../Question.js'
import AnswerCompo from './AnswerCompo.jsx'
import Timer from './Timer.jsx';

export default function QuestionCompo({currentIndex , onSelect,onSkip}){
    console.log('Hello i am your question component'); 
    let time = 10000; 
    const [answer,setSelectAnswer] = useState({ // this state is created for whether the user has selected the answer or not if selected then it will check whether the answer is correct or not. with the help of this state. 
        selectedAnswer:'',
        isCorrect:null
    })

    if(answer.selectedAnswer){
        time = 1000; 
    }

    if(answer.isCorrect !== null){
        time = 2000; 
    }

    function handleSelectAnswer(answer){
        setSelectAnswer({
            selectedAnswer:answer, 
            isCorrect:null
        })

        setTimeout(() => {
            // it will run after 2 seconds and we will check whetther the answer is correct or not
            setSelectAnswer({
                selectedAnswer:answer, 
                isCorrect:(answer === QUESTIONS[currentIndex].answers[0])
            });

            setTimeout(() => {
                onSelect(answer); 
            },2000)
        },1000); 
    }

    let answerState = ''; 
    if(answer.selectedAnswer && answer.isCorrect !== null){
            answerState = answer.isCorrect ? 'correct' : 'wrong'; 
    }
    else if(answer.selectedAnswer){
            answerState = 'answered';
    }

    return(
        <div id="question">
            <h1>{QUESTIONS[currentIndex].text}</h1>
            <Timer key={time} value={time} onTimeout={answer.selectedAnswer === '' ? onSkip : null} mode={answerState} /> 
            <AnswerCompo selectedAnswer={answer.selectedAnswer} answers={QUESTIONS[currentIndex].answers} answerState={answerState} onSelect={handleSelectAnswer} />
        </div>
    )
}