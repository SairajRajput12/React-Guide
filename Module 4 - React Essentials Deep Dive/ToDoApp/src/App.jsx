import { useState } from 'react';
import Feature from './components/AppFeature';
import Button from './components/Button';
import Cards from './components/Cards';
import todoAppFeatures from './components/Feature';
import Intro from './components/IntroDuction';
import NavBar from './components/NavBar';
import './index.css'; 


const navBarContent = ['Home','About','Services','Contact']
const appName = 'To Do App'; 
const greet = 'Welcome to this application'


export default function App(){ 
  const [cardData,setCardData] = useState([]); 
  
  function handleChange(event,id){
    setTitle(event.target.value); 
  }

  function insertCardData(){
    console.log('function has been invoked');
    setCardData((previous) => {
        let title = 'Title'; 
        let goal = 'Goal'; 
        let description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quia hic deserunt cupiditate ullam, architecto velit maiores eligendi provident rem maxime laboriosam consequatur blanditiis officia esse dicta illum tempore amet?'; 
        let updatedData = [{title:title,goal:goal,description:description},...previous]; 
        return updatedData; 
    });

    console.log(cardData); 
  }

  // update title heading: 
  


  return(
      <>
        <NavBar data={navBarContent} appName={appName} />
        <Intro greet={greet} />
        <div id='bully'>
            <Feature data={todoAppFeatures}/> 
        </div>
        <Button insert={insertCardData}/>
        <div className='CardBox'>
          <Cards data={cardData} setCardData={setCardData} />
        </div>
      </>
  );
};