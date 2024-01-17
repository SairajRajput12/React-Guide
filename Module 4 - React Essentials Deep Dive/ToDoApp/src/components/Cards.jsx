import { useState } from "react";

export default function Cards({data,handleChange,updateData,updateDataDes,updateDataGoal,removeCard}){
    const [edit,setEdit] = useState(false);  
    const [id,setId] = useState(0); 
    const [title,setTitle] = useState('Title'); 
    const [editD,setEditD] = useState(false); 
    const [des,editDes] = useState('this is description');
    const [editG,setEditG] = useState(false); 
    const [goal,editGoal] = useState('Edit your goal');
    let content = <h1 style={{marginLeft:'15px'}}>title</h1>; 
    
   
    let contentG = (
            <input
              type="text"
              value={goal}
              onChange={handleChangeG}
              style={{
                padding: '10px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                width: '300px',
                marginTop:'15px', 
                marginLeft:'12px',
                marginBottom:'15px', 
                backgroundColor:'black', 
                color:'white'
              }}
            />
          );        
    
    function handleChangeG(event){
        editGoal(event.target.value);
        updateDataGoal(goal,id); 
    }

    function handleChangeDes(event){
        editDes(event.target.value);
        updateDataDes(des,id);  
    }

    let descriptionContent = (
        <input
          type="textArea"
          value={des}
          onChange={handleChangeDes}
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '300px',
            marginTop:'15px', 
            marginLeft:'12px',
            marginBottom:'15px', 
            backgroundColor:'black', 
            color:'white'
          }}
        />
      );     

    function editGo(index){
        setId(index); 
        setEditG(edit => !edit);  
        console.log(index)
        
    }

    function editE(index){
        setId(index); 
        
        setEdit(edit => !edit);  
        console.log(index)
        
    }

    function editDesc(index){
        setId(index); 
        
        setEditD(edit => !edit);  
        console.log(index)
        
    }

    function handleChange(event){
        setTitle(event.target.value);
        let identitye = id; 
        let Title = title; 
        updateData(identitye,Title);
    }

    if(edit){
        content = (
            <input
              type="text"
              value={title}
              onChange={handleChange}
              style={{
                padding: '10px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                width: '300px',
                marginTop:'15px', 
                marginLeft:'12px',
                marginBottom:'15px', 
                backgroundColor:'black', 
                color:'white'
              }}
            />
          );        
    }   

    function deleteCard(index){
        console.log('id of',index); 
        removeCard(index); 
    }



    


    return(
        <>
            {data.map((value,index) => (
                <div key={index} className='Cards'>
                    {(edit && (id == index)) ? content : <h1 style={{marginLeft:'15px'}}>{value.title}</h1>}
                    <button className="createCard" onClick={() => editE(index)}>{( id==index && edit) ? "Save" : "Edit"}</button> 
                    {(editG && (id == index)) ? contentG :<h1 style={{marginLeft:'15px'}}>{value.goal}</h1>}
                    <button className="createCard" onClick={() => editGo(index)}>{( id==index && editG) ? "Save" : "Edit"}</button> 
                    {(editD && (id == index)) ? descriptionContent : <p style={{marginLeft:'15px'}}>{value.description}</p>}
                    <button className="createCard" style={{marginBottom:"19px"}} onClick={() => editDesc(index)}>{( id==index && editD) ? "Save" : "Edit"}</button> 
                    <button className="deleteCard" onClick={() => deleteCard(index)}>Remove Note</button>
                </div>
            ))}
        </>
    ); 
}