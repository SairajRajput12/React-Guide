export default function AddTasks(){
    return(
        <div className="project-panel">
            <p className="display-project-details">
               <p className="button-and-title"> 
                  <h1 style={{color:"black"}}>Title</h1>
                  <button>Delete</button>
               </p>
               <p>Dec 29, 2024</p>
               <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. At exercitationem quae doloremque, accusamus nulla placeat aut nisi unde quaerat! Autem accusantium soluta vel velit delectus, necessitatibus ea nemo ipsam inventore praesentium error. Non nesciunt et vero inventore voluptatum ipsa eos, optio illo perspiciatis consequuntur delectus. Blanditiis repellendus iure consequuntur quas.</h2> 
            </p>
            <p className="add-tasks">
                <h1>Tasks</h1>
                <p className="input">
                  <input type="text" />
                  <button>Add Tasks</button>
                </p>
                <p className="display-tasks">
                  <ul>
                    <p className="tasks">
                        <li>Hello</li> 
                        <button>clear</button>
                    </p>

                    <p className="tasks">
                        <li>Hello</li> 
                        <button>clear</button>
                    </p>

                    <p className="tasks">
                        <li>Hello</li> 
                        <button>clear</button>
                    </p>
                    
                  </ul>
                </p>
            </p>
        </div>
      
    )
}