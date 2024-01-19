import { useState } from 'react'
import Img from './assets/investment-calculator-logo.png'
import Header from './components/Header'
import UserInput from './components/UserInput'
import Result from './components/Result'

function App() { 

    const [obj,setObj] = useState({
      initialInvestment : 10000, 
      annualInvestment : 1200, 
      expectedReturn:6, 
      duration:12, 
  })

  const inputIsValid = obj.duration >= 1;


  function handleChange(identifier,newValue){
      setObj((prevData) => {
          return{
              ...prevData, 
              [identifier] :+newValue, 
          };
          // event.target.value always returns value in the form of the string 
          // so by adding + will convert the string into the value
      }); 
  }



  return (
    <>
      <Header Img={Img}/> 
      <UserInput onChange={handleChange} userInput={obj} />
      {/* this is a table */}  
      {!obj && <p>Please enter a duration greater than zero.</p>}
      {obj && <Result data={obj}/>}
    </>
  )
}

export default App
