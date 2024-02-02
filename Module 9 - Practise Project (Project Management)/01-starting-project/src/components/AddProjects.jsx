import { useRef } from "react"


export default function AddProjects({setShowProject,SaveProject}){
    const title = useRef(); 
    const desc = useRef(); 
    const dueDate = useRef(); 
    // console.log(title.current.value); 
    // console.log(desc.current.value); 
    // console.log(dueDate.current.value); 
    return(
        <div className="project-panel">
            <p className="buttons">
              <button className="h11" onClick={setShowProject}>Cancel</button> 
              <button onClick={() => SaveProject(title.current.value,desc.current.value,dueDate.current.value)}>Save</button>
            </p>
            <div className="m">
                <label className="title">Title</label> 
                <input ref={title} type="text" className="title-input"></input>
                <label className="title">Description</label> 
                <input ref={desc} type="text" className="title-input"></input>
                <label className="title">Due Date</label> 
                <input ref={dueDate} type="date" className="title-input" ></input>
            </div>
        </div>
    )
}