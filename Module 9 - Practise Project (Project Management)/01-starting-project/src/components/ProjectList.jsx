export default function ProjectList({projectData}){
    return(
        <>
           
            <div className="projectDisplaying">
                <h1>Your Projects</h1>
                <button className="add-project">+ Add Project</button>
                <div className="project-list">
                    <ul >
                        {projectData.map((value,index) => (<li key={index}>{value}</li>))}
                    </ul>
                </div>
            </div>
        </>
    )
}