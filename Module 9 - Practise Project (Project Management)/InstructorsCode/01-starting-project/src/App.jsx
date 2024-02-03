import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";
import NewTask from "./components/NewTask";

function App() {

  const [projectsState,setProjectsState] = useState({
    selectedProjectId : undefined,
    projects:[],
    tasks:[]
  }); 

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }


  function handleDeleteTasks(id){
    setProjectsState((prevState) => {
      return{
        ...prevState,
        projects : prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

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

  function handleDeleteProject(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });

  }

  console.log(projectsState)
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId); 
  let content = <SelectedProject project={selectedProject} selectedProjectId={projectsState.selectedProjectId} onDelete={handleDeleteProject} addTasks={handleAddTask} deleteTasks={handleDeleteTasks} tasks={projectsState.tasks} /> ; 
  
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
