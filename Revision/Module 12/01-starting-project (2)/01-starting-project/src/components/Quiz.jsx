import { useCallback, useState } from "react"
import QUESTIONS from '../Question.js'
import QuestionCompo from "./QuestionCompo.jsx";
import Summary from "./Sumary.jsx";

export default function Quiz(){
    const [data,setData] = useState([]); 
    const currentIndex = data.length; 
    const quizIsComplete = currentIndex === QUESTIONS.length; 
    // console.log(data); 


    const onSelect = useCallback((value) => {
            // console.log(value); 
            setData((prevData) => {
                const d = [...prevData,value];
                // console.log(d); 
                return d; 
            }); 
    },[]); 

    const handleSkipAnswer = useCallback(
        () => onSelect(null)
     ,[onSelect]);

     /*
        when we moved to the next question then we will enter none as answer. 
     */

    if(quizIsComplete){
        return(
            <Summary userAnswers={data} />
        )
    }

    return(
        <div id="quiz">
            <QuestionCompo key={currentIndex} currentIndex={currentIndex} onSelect={onSelect} onSkip={handleSkipAnswer} /> 
        </div>
    )
}