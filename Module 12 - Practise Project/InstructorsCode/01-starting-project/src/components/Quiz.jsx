import { useCallback, useState } from "react";
import QUESTIONS from '../Question';
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import Question from "./Question";
import Summary from "./Summary";



export default function Quiz() {
  // this component is responsible for switching between questions and registering the user answers.
  const [useAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex =  useAnswers.length; // it can be derived from the userAnswersArray 
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length; 
  
  /*
        Here the userAnswers will store the answer of the user: 
            1. if there are 2 answers in the array then it means that the user has answered 2 questions  
               next question in 3 at index 2 due to 0 based indexing.

            2. activeQuestionIndex is derived from the userAnswer array.
    */

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
    console.log('the handle select answer exeuted again')
      setUserAnswers(
          (prevData) => {
              const data = [...prevData,selectedAnswer]; 
              return data;     
          }
      );  
      console.log(useAnswers);
    },[]);


  const handleSkipAnswer = useCallback(
     () => handleSelectAnswer(null)
  ,[handleSelectAnswer]);

  if(quizIsComplete)
  {
    return(
        <Summary userAnswers={useAnswers} />
    )
  }

  console.log(activeQuestionIndex)

 

  return (
    <div id="quiz">
     <Question key={activeQuestionIndex} index={activeQuestionIndex}  onSelectAnswer={handleSelectAnswer} onSkipAnswer={handleSkipAnswer} />
    </div>
  );
}
