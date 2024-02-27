import { useState } from 'react';
import Feature from './components/AppFeature';
import Button from './components/Button';
import Cards from './components/Cards';
import todoAppFeatures from './components/Feature';
import Intro from './components/IntroDuction';
import NavBar from './components/NavBar';
import './index.css'; 
import Toast from './components/AddedNotes';


const navBarContent = ['Home','Services','Contact']
const appName = 'To Do App'; 
const greet = 'Welcome to this application'


export default function App(){ 
  const [cardData,setCardData] = useState([]); 
  const [addedNote,showAddedNote] = useState(false); 
  
  function showNotification(){
    showAddedNote(true); 
    setTimeout(()=>{
        showAddedNote(false); 
    },3000); 
  }

  function insertCardData(){
    console.log('function has been invoked');
    setCardData((previous) => {
        let title = 'Title'; 
        let goal = 'Goal'; 
        let description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quia hic deserunt cupiditate ullam, architecto velit maiores eligendi provident rem maxime laboriosam consequatur blanditiis officia esse dicta illum tempore amet?'; 
        let updatedData = [...previous,{title:title,goal:goal,description:description}]; 
        return updatedData; 
    });

    showNotification(); 

    console.log(cardData); 
  }

  // update title heading: 
  function updateData(index=0,title1='Title'){
    // updating the title
    let data = [...cardData]; 
      // Update the title property
    data[index].title = title1;   
    setCardData(data); 

  }
  // updating the description
  function updateDataDes(des,index){
      setCardData((prevData) => {
        let data = prevData; 
        data[index].description = des; 
        return data; 
      });

      console.log(cardData); 
  }


  function updateDataGoal(des,index){
    setCardData((prevData) => {
      let data = prevData; 
      data[index].goal = des; 
      return data; 
    });

    console.log(cardData); 
  }

  function removeCard(index){
      setCardData((prevData) => {
        let data = prevData; 
        data.splice(index,1); 
        return data; 
      })
  }


  return(
      <>
        <NavBar data={navBarContent} appName={appName} />
        <Intro greet={greet} />
        <div id='bully'>
            <Feature data={todoAppFeatures}/> 
        </div>
        <Button insert={insertCardData}/>
        {addedNote && <Toast message={'Notes added succesfully'} />}
        <div className='CardBox'>
          <Cards data={cardData} setCardData={setCardData} updateData={updateData} updateDataDes={updateDataDes} updateDataGoal={updateDataGoal} removeCard={removeCard}/>
        </div>
      </>
  );
};