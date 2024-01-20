import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result";


function App() {
  const [data,setData] = useState({
      initialInvestment:10000, 
      annualInvestment:1200,
      expectedReturn:6,
      duration:12,
  }); 

  const isValid = (data.duration > 0) ? true : false; 

  function handleChange(identifier,newValue){
      setData((prevData) => {
        return{
          ...prevData, 
          [identifier] :+newValue, 
        };
      })
  }

  console.log(data); 
  return (
    <>
      <Header />
      <UserInput data={data} handleChange={handleChange} /> 
      {!isValid && <p style={{alignContent:'center'}}>Please enter the valid duration</p>}
      {isValid && <Result data={data}/>}
    </>
  )
}

export default App
