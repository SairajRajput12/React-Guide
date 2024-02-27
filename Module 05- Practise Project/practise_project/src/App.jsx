import { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App(){
  const [showHome,setShowHome] = useState(true); 
  const [showAbout,setShowAbout] = useState(false); 
  const [showProjects,setShowProjects] = useState(false);  
  function changeV(functionName){
    if(functionName === 'Home'){
      setShowHome(true)  
      setShowAbout(false); 
      setShowProjects(false); 
    }
    else if(functionName === 'About')
    {
      setShowHome(false)  
      setShowAbout(true); 
      setShowProjects(false);
    }
    else{
      setShowHome(false)  
      setShowAbout(false); 
      setShowProjects(true);
    }
  }

  return(
    <>
      <Navbar change={changeV} />
      {showHome && <Home />}
      {showAbout && <About />} 
      {showProjects && <Projects />}
    </>
  ); 
}

