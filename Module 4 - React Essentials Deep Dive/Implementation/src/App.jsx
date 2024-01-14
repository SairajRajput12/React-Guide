import React, { PureComponent, useState } from 'react'
import Navbar from './components/navbar'
import Img from './assets/img1.png' 
import Card from './components/Cards';
import info from './data';
import Feature from './components/Feature';
import todoAppFeatures from './feature'; 

function App() {
    const [title,setTitle] = useState("To-do application"); 
    const [isSlidingIn, setIsSlidingIn] = useState(true);
    const arr = ["explore our website","visit one more time","your time will be saved","this is for you sir","24/7 available"]
    
    const handleToggleSlide = () => {
      setIsSlidingIn(!isSlidingIn);
    };

    function display(){
       var num = Math.floor(Math.random()*(arr.length)); 
       setTitle(arr[num]); 
       console.log(info);
    }
    return (
      <>
          < Navbar /> 
          <div id='main'>
          <img src={Img} alt="hai" />
          <h1 onClick={display}><b>{title} </b></h1>
          </div> 
          <br /> 
          {/* <h1 style={{textAlign:'center',color:'yellow'}}><b>What are the features we are offering to you ??</b></h1> */}
          <div id='bully'>
              <h1 style={{textAlign:'center'}}><b>What features we are offering ??</b></h1>
              <ul style={{ display: 'flex', flexDirection: 'row',margin:'5px',padding: '2rem','border-radius': '6px','flex-wrap': 'wrap',
      'justify-content': 'center','gap':'2rem'}}>
                  {todoAppFeatures.map((item,index) => (
                    <Feature key={index} {...item} />
                  ))}        
              </ul>
          </div>

          <ul style={{ display: 'flex', flexDirection: 'row',margin:'5px',padding: '2rem','border-radius': '6px','flex-wrap': 'wrap',
  'justify-content': 'center','gap':'2rem'}}>
            {info.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </ul>

          
      </>
    )
  }

export default App; 