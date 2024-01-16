import { useState } from "react";

export default function Cards({data,handleChange}){
    const [edit,setEdit] = useState(); 
    const [id,setId] = useState(); 
    const [title,setTitle] = useState('Title'); 
    const [description,setDescription] = useState('Description'); 
    let content = <h1 style={{marginLeft:'15px'}}>title</h1>; 

    function editE(index){
        setId(index); 
        setEdit(edit => !edit);  
        console.log(index)
    }

    function handleChange(event){
        setTitle(event.target.value); 
    }

    if(edit){
        content = <input type="text" value={title} onChange={handleChange} />
    }   


    return(
        <>
            {data.map((value,index) => (
                <div key={index} className='Cards'>
                    {(edit && (id == index)) ? content : <h1 style={{marginLeft:'15px'}}>{value.title}</h1>}
                    <button className="createCard" onClick={() => editE(index)}>{( id==index && edit) ? "Save" : "Edit"}</button> 
                    <h1 style={{marginLeft:'15px'}}>{value.goal}</h1>
                    <p style={{marginLeft:'15px'}}>{value.description}</p>
                    <button className="deleteCard">Remove Note</button>
                </div>
            ))}
        </>
    ); 
}