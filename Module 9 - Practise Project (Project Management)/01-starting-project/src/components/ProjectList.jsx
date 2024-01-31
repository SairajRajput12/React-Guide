export default function ProjectList({projectData,data,handleShowProjectDetails}){
    const arr = data.map((value,index) => (data[index].title)); 
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
                        {arr.map((value,index) => (<li onClick={() => handleShowProjectDetails(index)} key={index}>{value}</li>))}
                    </ul>
                </div>
            </div>
        </>
    )
}