import { useState } from "react";
import projectData from "./Projectlist";
import NoProjectsSelected from "./components/NoProjectsSelected";
import ProjectList from "./components/ProjectList";
import AddTasks from "./components/AddTasks";
import RenderedNavBar from "./components/RenderedNavBar";
import FencyAnimation from "./components/FencyAnimation";
import AddProjects from "./components/AddProjects";

// declarations

function App() {
  const [data,setData] = useState([{title:'App recommendation',Description:'To make recoomendation application using machine learning',date:'10 Januvary',tasks:[]}])
  
  return (
    <>
      {/* <h1 className="my-8 text-center text-5xl font-bold"></h1> */}
      <RenderedNavBar />
      <FencyAnimation />
      <div className="grid">
        <ProjectList projectData={projectData} data={data} />
        {data.length == 0 && <NoProjectsSelected />}
        {data.length > 0 &&  <AddTasks />} 
        {/* <AddProjects /> */}
      </div>
    </>
  );
}

export default App;
