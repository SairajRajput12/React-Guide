import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projectsState,setProjectsState] = useState({
    selectedProjectId : undefined,
    projects:[]
  }); 

  function handleAddProject(){
    setProjectsState(prervState=>{
      return{
        ...prervState, 
        selectedProjectId : null, 
      };
    });
  }

  function addProject(projectData){
    setProjectsState(prevState => {
      const newProject = {
          ...projectData, 
          id:Math.random()
      }
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects : [...prevState.projects,newProject]
      };
    });
  }

  function handleCancelAddProject(){
    setProjectsState(prervState=>{
      return{
        ...prervState, 
        selectedProjectId : undefined, 
      };
    });
  }

  function handleSelectProject(id){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });

  }

  console.log(projectsState)
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId); 
  let content = <SelectedProject project={selectedProject} selectedProjectId={projectsState.selectedProjectId} /> ; 
  
  if(projectsState.selectedProjectId === null){
    content = <NewProject onCancel={handleCancelAddProject} onAdd={addProject} onStartAddProject={handleAddProject} />
  }
  else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleAddProject} projects={projectsState.projects}  onSelectProject={handleSelectProject} /> 
      {content}
    </main>
  );
}

export default App;
