import { useCallback, useEffect, useRef, useState } from "react"; 
import QUESTIONS from '../Question'
import Img from '../assets/quiz-complete.png'
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import Question from "./Question";

const timer = 15000; 
export default function Quiz(){
    const [userAnswers,setUserAnswers] = useState([]); 
    console.log(userAnswers); 
    console.log('the quiz component executed again ')
    const quizComplete = (userAnswers.length === QUESTIONS.length); 
    const currentActiveIndex = userAnswers.length; 


    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
       setUserAnswers(
           (prevData) => {
               const data = [...prevData,selectedAnswer]; 
               return data;     
           }
       );  
       console.log(userAnswers);
     },[]);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null)
     ,[handleSelectAnswer]);

    

  

    if(quizComplete){
        return(
            <div id="summary">
                <h2>Quiz completed</h2>
                <img src={Img} alt="quiz is completed"></img>
            </div>
        )
    }

    return(
        <>
            <div id="quiz">
                <div id="question">
                    {/* <QuestionTimer key={currentActiveIndex}  timer={timer} handleSkipAnswer={handleSkipAnswer} /> 
                    <h2>{QUESTIONS[currentActiveIndex].text}</h2>
                    <Answers key={currentActiveIndex} index={currentActiveIndex} onSelect={handleSelectAnswer} answers={QUESTIONS[currentActiveIndex].answers} /> */}
                    <Question timer={timer} key={currentActiveIndex} index={currentActiveIndex}  onSelectAnswer={handleSelectAnswer} onSkipAnswer={handleSkipAnswer} />
                </div>
            </div>
        </>
    )
}