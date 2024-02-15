import Answers from "./Answers";
import QuestionTimer from './QuestionTimer';


export default function Question({questionText,answers,onSelectAnswer,seletedAnswer,answerState,onSkipAnswer}){
    return(
        <div id="question">
            <QuestionTimer  timeout={15000} onTimeout={onSkipAnswer} /> 
            <h2>{questionText}</h2>
            <Answers answers={answers} seletectedAnswer={seletedAnswer} answerState={answerState} onSelect={onSelectAnswer} />
        </div>
    )
}