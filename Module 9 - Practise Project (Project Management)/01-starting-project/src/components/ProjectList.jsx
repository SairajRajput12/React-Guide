export default function ProjectList({projectData,data}){
    // projectData = []; 
    const styleWhenNoObjectFound = {
        backgroundColor: 'black',
        width: '500px',
        height: '650px',
        borderRadius: '8px 8px 8px 8px',
        color: 'white'
    }

    return(
        <>
            <div className="projectDisplaying">
                <h1>Your Projects</h1>
                <button className="add-project">+ Add Project</button>
                <div style={projectData.length == 0 ? styleWhenNoObjectFound : undefined} className={projectData.length == 0 ? undefined : 'project-list'}>
                    <ul >
                        {projectData.map((value,index) => (<li key={index}>{value}</li>))}
                    </ul>
                </div>
            </div>
        </>
    )
}