import Img from '../assets/quiz-complete.png'
import QUESTIONS from '../Question.js'

export default function Summary({userAnswers}){

    const skippedAnswer = userAnswers.filter(answer => answer === null); 
    const correctAnswer = userAnswers.filter((answer,index) => answer === QUESTIONS[index].answers[0]); 
    const incorrectAnswer = userAnswers.filter((answer,index) => answer !== QUESTIONS[index].answers[0]); 

    const skippedAnswerShare = Math.round((skippedAnswer.length/userAnswers.length)*100); 
    const correctAnswerShare = Math.round((correctAnswer.length/userAnswers.length)*100); 
    const incorrectAnswerShare = Math.round((incorrectAnswer.length/userAnswers.length)*100); 



    return(
        <div id="summary">
            <img src={Img} alt="quiz-completed" />
            <h2>Quiz completed!</h2>
            <div id='summary-stats' >
                <p>
                    <span className='number'>{skippedAnswerShare}%</span> 
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>{correctAnswerShare}%</span> 
                    <span className='text'>correctly answered</span>
                </p>
                <p>
                    <span className='number'>{incorrectAnswerShare}%</span> 
                    <span className='text'>incorrectly answered</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer,index) => {
                    let cssClass = 'user-answer'
                    if(answer === null){
                        cssClass += ' skipped';
                    }
                    else if(answer === QUESTIONS[index].answers[0]){
                        cssClass += ' correct'; 
                    }
                    else if(answer !== QUESTIONS[index].answers[0]){
                        cssClass += ' wrong'; 
                    }

                    return(
                        <li key={index} >
                            <h3>{index+1}</h3>
                            <p className='question' >{QUESTIONS[index].text}</p>
                            <p className={cssClass}>{answer ?? 'Skipped'}</p>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}