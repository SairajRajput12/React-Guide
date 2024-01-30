import Img from '../assets/no-projects.png'

export default function NoProjectsSelected(){
    return(
        <div className="project-setting">
          <img src={Img} className="w-16 h-16 object-contain mx-auto"  alt="no-projects" />
          <h1><b>No projects Selected</b></h1>
          <p>Select a project or get started with a new ones</p>
          <button>Create a project</button>
        </div>
    );
}