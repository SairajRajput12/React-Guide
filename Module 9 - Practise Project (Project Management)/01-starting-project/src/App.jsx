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
  const [data, setData] = useState([
    { title: undefined, Description: undefined, date: undefined, tasks: [] }
  ]);
  
  const [showProject,setShowProject] = useState(false); 
  const [id,setId] = useState(null); 
  const [showAddProjectCompo,setShowAddProjectCompo] = useState(false); 

  
  function showAddProject(){
      console.log('button entered'); 
      setShowProject(false); 
      setShowAddProjectCompo(true);
  }

  function handleShowProjectDetails(index){
      console.log("you clicked on list index : ",index); 
      setShowProject(true);  
      setShowAddProjectCompo(false); 
      setId(index); 
  }

  function cancelAddProject(){
      setShowAddProjectCompo(false); 
      setShowProject(false); 
  }

  function SaveProject(desc, title, dueDate) {
    const obj = { title: title, Description: desc, date: dueDate, tasks: ['Please add the tasks'] };
    console.log(obj); 
    // if(data.length === 0){

    // }
    setData(prev => [...prev, obj]); 
    console.log(obj);
  }
  
  function DeleteProject(index) {
    const dat = [...data];
    dat.splice(index, 1);
    console.log(dat); // Log the modified array
    setData(dat); // Update the state with the modified array
  }
  
  function clearTask(index1,index2){
    const dat = [...data]; 
    dat[index1].tasks.splice(index2,1);
    setData(dat); 
  }
  
  function addtasks(index,value){
    const dat = [...data]; 
    dat[index].tasks.push(value); 
    setData(dat); 
    console.log(data); 
  }
  console.log(id);

  return (
    <>
      {/* <h1 className="my-8 text-center text-5xl font-bold"></h1> */}
      <RenderedNavBar />
      <FencyAnimation />
      <div className="grid">
        {<ProjectList projectData={projectData} showAddProject={showAddProject} data={data} handleShowProjectDetails={handleShowProjectDetails} />}
        {!showProject && !showAddProjectCompo && <NoProjectsSelected  showAddProject={showAddProject} />}
        {showProject && data.length > 0 && data[id] != undefined && <AddTasks addtasks={addtasks} data={data} DeleteProject={DeleteProject} clearTask={clearTask} index={id} />} 
        {showAddProjectCompo && data.length >= 0 && <AddProjects SaveProject={SaveProject}  setShowProject={cancelAddProject} showAddProjectCompo={showAddProjectCompo} />}
      </div>
    </>
  );
}

export default App;