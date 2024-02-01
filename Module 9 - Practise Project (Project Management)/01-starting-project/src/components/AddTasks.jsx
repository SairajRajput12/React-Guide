export default function AddTasks({data,index,DeleteProject,clearTask,addtasks}){
    return(
        <div className="project-panel">
            <div className="display-project-details">
               <div className="button-and-title"> 
                  <h1 style={{color:"black"}}>{data[index].title}</h1>
                  <button onClick={() => DeleteProject(index)}>Delete</button>
               </div>
               <div>{data[index].date}</div>
               <h2>{data[index].Description}</h2> 
            </div>
            <div className="add-tasks">
            <h1>Tasks</h1>
                <div className="input">
                  <input type="text" />
                  <button onClick={()=>addtasks(index)}>Add Tasks</button>
                </div>
                <div className="display-tasks">
                    <div className="n1">
                        <ul>
                            {data[index].tasks.map((value, index1) => (
                                <li className="lists" key={index1}>
                                    {value}
                                    <button onClick={()=>clearTask(index,index1)}>clear</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      
    )
}