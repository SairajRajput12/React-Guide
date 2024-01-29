import projectData from "./Projectlist";
import ProjectList from "./components/ProjectList";
import Img from './assets/no-projects.png'
function App() {
  return (
    <>
      {/* <h1 className="my-8 text-center text-5xl font-bold"></h1> */}
      <div className="grid">
        <ProjectList projectData={projectData} />
        <div className="project-setting">
          <img src={Img} className="w-16 h-16 object-contain mx-auto"  alt="no-projects" />
          <h1><b>No projects Selected</b></h1>
          <p>Select a project or get started with a new ones</p>
          <button>Create a project</button>
        </div>
      </div>
    </>
  );
}

export default App;
