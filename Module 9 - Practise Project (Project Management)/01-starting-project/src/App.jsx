import { useState } from "react";
import projectData from "./Projectlist";
import NoProjectsSelected from "./components/NoProjectsSelected";
import ProjectList from "./components/ProjectList";
import AddTasks from "./components/AddTasks";
import RenderedNavBar from "./components/RenderedNavBar";
import FencyAnimation from "./components/FencyAnimation";
// import AddProjects from "./components/AddProjects";

// declarations

function App() {
  const [data,setData] = useState([{title:'App recommendation',Description:'To make recoomendation application using machine learning',date:'10 Januvary',tasks:['task 1','task 2','task 3']},{title:'App recommendation1',Description:'To make recoomendation application using machine learning',date:'10 Januvary',tasks:['task 11','task 12','task 13']},{title:'App recommendation2',Description:'To make recoomendation application using machine learning',date:'10 Januvary',tasks:['task 21','task 22','task 23']}]); 
  const [showProject,setShowProject] = useState(false); 
  const [id,setId] = useState(null); 

  function handleShowProjectDetails(index){
      console.log("you clicked on list index : ",index); 
      setShowProject(true);  
      setId(index); 
  }

  return (
    <>
      {/* <h1 className="my-8 text-center text-5xl font-bold"></h1> */}
      <RenderedNavBar />
      <FencyAnimation />
      <div className="grid">
        <ProjectList projectData={projectData} data={data} handleShowProjectDetails={handleShowProjectDetails} />
        {!showProject && <NoProjectsSelected />}
        {showProject &&  <AddTasks data={data} index={id} />} 
        {/* <AddProjects /> */}
      </div>
    </>
  );
}

export default App;