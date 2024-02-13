import Img from '../assets/quiz-logo.png'

export default function Header(){
    return(
        <header>
            <img src={Img} alt='quiz-logo' ></img>
            <h1>React Quiz</h1>
        </header>
    )
}