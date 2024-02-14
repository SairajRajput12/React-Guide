import { useCallback, useState } from "react";
import QUESTIONS from '../Question';
import Img from '../assets/quiz-complete.png'
import QuestionTimer from "./QuestionTimer";



export default function Quiz() {
  // this component is responsible for switching between questions and registering the user answers.
  const [useAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = useAnswers.length; // it can be derived from the userAnswersArray 
   
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length; 

  /*
        Here the userAnswers will store the answer of the user: 
            1. if there are 2 answers in the array then it means that the user has answered 2 questions  
               next question in 3 at index 2 due to 0 based indexing.

            2. activeQuestionIndex is derived from the userAnswer array.
    */

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
      setUserAnswers(
          (prevData) => {
              const data = [...prevData,selectedAnswer]; 
              return data;     
          }
      );  },[]);


  const handleSkipAnswer = useCallback(() =>{
    () => handleSelectAnswer(null)
  },[handleSelectAnswer]);

  if(quizIsComplete)
  {
    return(
        <div id="summary">
            <img src={Img} alt="quiz-completed" />
            <h2>Quiz completed!</h2>
        </div>
    )
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]; 
  shuffledAnswers.sort(()=>{
    // -1; // swapping of element takes place. 
    return (Math.random()-0.5); // shuffles answers
  }); // it will shuffle the ordering of answers 


  return (
    <div id="quiz">
      <div id="question">
            <QuestionTimer timeout={15000} onTimeout={handleSkipAnswer} /> 
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {shuffledAnswers.map((answer)=>{

                    return(
                        <li key={answer} className="answer" >
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    )
                })}
            </ul>
      </div>
    </div>
  );
}
