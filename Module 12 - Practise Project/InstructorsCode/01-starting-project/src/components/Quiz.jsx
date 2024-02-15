import { useCallback, useState } from "react";
import QUESTIONS from '../Question';
import Img from '../assets/quiz-complete.png'
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import Question from "./Question";



export default function Quiz() {
  // this component is responsible for switching between questions and registering the user answers.
  const [useAnswers, setUserAnswers] = useState([]);
  const [answerState,setAnswerState] = useState(''); 
  const activeQuestionIndex = answerState === '' ? useAnswers.length : useAnswers.length-1; // it can be derived from the userAnswersArray 
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length; 
  
  /*
        Here the userAnswers will store the answer of the user: 
            1. if there are 2 answers in the array then it means that the user has answered 2 questions  
               next question in 3 at index 2 due to 0 based indexing.

            2. activeQuestionIndex is derived from the userAnswer array.
    */

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
      setAnswerState('answered');
      setUserAnswers(
          (prevData) => {
              const data = [...prevData,selectedAnswer]; 
              return data;     
          }
      );  
      
      setTimeout(() => {
        if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
              setAnswerState('correct'); 
        }
        else{
              setAnswerState('wrong');
        }

        setTimeout(() => {
          setAnswerState(''); 
        },2000); 

      },1000)


    },[]);


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

 

  return (
    <div id="quiz">
     <Question key={activeQuestionIndex} questionText={QUESTIONS[activeQuestionIndex].text} answers={QUESTIONS[activeQuestionIndex].answers} onSelectAnswer={handleSelectAnswer} seletedAnswer={useAnswers[useAnswers.length-1]} answerState={answerState} onSkipAnswer={handleSkipAnswer} />
    </div>
  );
}
