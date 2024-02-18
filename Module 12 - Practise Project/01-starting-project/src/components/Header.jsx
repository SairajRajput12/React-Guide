import Img from '../assets/quiz-logo.png'

export default function Header(){
    return(
        <header>
            <h1>I am Loki</h1>
            <img src={Img} alt='i am loki' />
        </header>
    )
}