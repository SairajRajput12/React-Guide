export default function Header({Img}){
    return(
        <header id="header">
            <img src={Img} alt='Investment png'/>
            <h1>React Investment Calculator</h1> 
        </header>
    );
}