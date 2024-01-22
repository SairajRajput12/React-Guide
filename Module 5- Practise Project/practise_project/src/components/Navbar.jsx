import '../components/Navbar.css'; 

export default function Navbar({change}){ 
    
    return(
        <nav>
            <a onClick={() =>change('Home')}>Home</a> 
            <a onClick={() =>change('About')}>About</a> 
            <a onClick={() =>change('Projects')}>Projects</a>
        </nav>
    );
}