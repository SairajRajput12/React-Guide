export default function AddProjects({setShowProject,SaveProject}){
    return(
        <div className="project-panel">
            <p className="buttons">
              <button className="h11" onClick={setShowProject}>Cancel</button> 
              <button onClick={() => SaveProject('1','2','3')}>Save</button>
            </p>
            <div className="m">
                <label className="title">Title</label> 
                <input type="text" className="title-input"></input>
                <label className="title">Description</label> 
                <input type="text" className="title-input"></input>
                <label className="title">Due Date</label> 
                <input type="date" className="title-input" ></input>
            </div>
        </div>
    )
}