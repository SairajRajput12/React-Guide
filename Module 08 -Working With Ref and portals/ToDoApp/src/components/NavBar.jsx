import { useRef } from "react";
import About from "./About";
import Links from "./Links";


export default function NavBar({data,appName}){
    console.log(data); 
    const dialog = useRef(); 

    function openDialog(){
        dialog.current.showModal(); 
    }

    return(
        <>
            <About ref={dialog} />
            <nav className="nav">
              <span><h1 className="app-name">{appName}</h1></span>
               
              <div className='nav-links1'>
                {data.map((arrayE,index) => <Links key={index} data1={arrayE} />)}
                <a onClick={openDialog}><b>About</b></a>
              </div>
            </nav>
        </>
    );
}