import { useState } from "react";
import projectData from "./Projectlist";
import NoProjectsSelected from "./components/NoProjectsSelected";
import ProjectList from "./components/ProjectList";
import AddTasks from "./components/AddTasks";


function App() {
  const [data,setData] = useState([{title:'App recommendation',Description:'To make recoomendation application using machine learning',date:'10 Januvary',tasks:[]}])
  
  return (
    <>
      {/* <h1 className="my-8 text-center text-5xl font-bold"></h1> */}
      <div className="grid">
        <ProjectList projectData={projectData} data={data} />
        {data.length == 0 && <NoProjectsSelected />}
        {data.length > 0 &&  <AddTasks />}
      </div>
    </>
  );
}

export default App;
