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
    { title: 'New App', Description: 'Creating an innovative app for productivity tracking', date: '15 January', tasks: ['Design UI', 'Develop backend', 'Test functionality'] },
    { title: 'Social Media Analytics Tool', Description: 'Building a tool to analyze social media trends', date: '20 January', tasks: ['Collect data', 'Analyze data', 'Generate reports'] },
    { title: 'E-commerce Platform Upgrade', Description: 'Enhancing features of an existing e-commerce platform', date: '25 January', tasks: ['Add payment gateway', 'Optimize performance', 'Update security'] },
    { title: 'Fitness Tracking App', Description: 'Developing an app to track fitness goals and progress', date: '1 February', tasks: ['Track steps', 'Monitor heart rate', 'Record workouts'] },
    { title: 'Language Learning App', Description: 'Creating an app to facilitate language learning', date: '5 February', tasks: ['Build lesson plans', 'Implement quizzes', 'Integrate speech recognition'] },
    { title: 'Travel Planner', Description: 'Building a platform to plan and organize travel itineraries', date: '10 February', tasks: ['Search flights', 'Book accommodations', 'Plan activities'] },
    { title: 'Finance Management Tool', Description: 'Developing a tool to manage personal finances', date: '15 February', tasks: ['Track expenses', 'Set budgets', 'Generate financial reports'] }
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
  
  function addtasks(index){
    const dat = [...data]; 
    dat[index].tasks.push('this is aurther'); 
    setData(dat); 
    console.log(data); 
  }

  return (
    <>
      {/* <h1 className="my-8 text-center text-5xl font-bold"></h1> */}
      <RenderedNavBar />
      <FencyAnimation />
      <div className="grid">
        {<ProjectList projectData={projectData} showAddProject={showAddProject} data={data} handleShowProjectDetails={handleShowProjectDetails} />}
        {data.length === 0 && <NoProjectsSelected showAddProject={showAddProject}/>}
        {!showProject && !showAddProjectCompo && <NoProjectsSelected  showAddProject={showAddProject} />}
        {showProject && data.length > 0 && <AddTasks addtasks={addtasks} data={data} DeleteProject={DeleteProject} clearTask={clearTask} index={id} />} 
        {showAddProjectCompo && data.length >= 0 && <AddProjects SaveProject={SaveProject}  setShowProject={cancelAddProject} showAddProjectCompo={showAddProjectCompo} />}
      </div>
    </>
  );
}

export default App;