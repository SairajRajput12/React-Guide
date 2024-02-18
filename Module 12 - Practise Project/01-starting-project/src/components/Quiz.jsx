import { useCallback, useEffect, useRef, useState } from "react"; 
import QUESTIONS from '../Question'
import Question from "./Question";
import Summary from "./Sumary";

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
      // this is used to update the timer. 
       console.log(userAnswers);
     },[]);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null)
     ,[handleSelectAnswer]);

    

  

    if(quizComplete){
        return(
            <Summary userAnswers={userAnswers} />
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