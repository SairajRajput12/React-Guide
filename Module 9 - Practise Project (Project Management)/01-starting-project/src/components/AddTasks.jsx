export default function AddTasks({data,index}){

    console.log(data[index].tasks); 
    return(
        <div className="project-panel">
            <div className="display-project-details">
               <div className="button-and-title"> 
                  <h1 style={{color:"black"}}>{data[index].title}</h1>
                  <button>Delete</button>
               </div>
               <div>{data[index].date}</div>
               <h2>{data[index].Description}</h2> 
            </div>
            <div className="add-tasks">
            <h1>Tasks</h1>
                <div className="input">
                  <input type="text" />
                  <button>Add Tasks</button>
                </div>
                <div className="display-tasks">
                    <div >
                        <ul>
                            {data[index].tasks.map((value, index) => (
                                <li className="lists" key={index}>
                                    {value}
                                    <button>clear</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      
    )
}