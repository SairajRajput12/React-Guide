import { useState } from "react";


export default function UserInput({onChange,userInput}){
    // const [annualInvestment,setAnnualInvestment] = useState(1200); 
    // const [initialInvestment,setInitialInvestment] = useState(10000); 
    // const [expectedValue,setExpectedValue] = useState(6); 
    // const [duration,setDuration] = useState(12); 
    // solve(initialInvestment,annualInvestment,expectedValue,duration);

    // function handleAnnualInvestment(event){
    //     setAnnualInvestment(event.target.value); 
    //     console.log(setAnnualInvestment)
    // }

    // function handleDuration(event){
    //     setDuration(event.target.value); 
    //     console.log(duration);
    //     // solve(initialInvestment,annualInvestment,expectedValue,duration);
    // }

    // function handleExpectedValue(event){
    //     setExpectedValue(event.target.value);  
    //     console.log(expectedValue); 
    //     // solve(initialInvestment,annualInvestment,expectedValue,duration);
    // }

    // function handleInitialInvestment(event){
    //     setInitialInvestment(event.target.value);
    //     console.log(initialInvestment); 
    //     // solve(initialInvestment,annualInvestment,expectedValue,duration);
    // }

    

    return(
        <>
        <section id='user-input' >
        <div className='input-group'>
                <p>
                    <label>Initial Investment</label>
                    <input type='number' value={userInput.initialInvestment} onChange={(event) => onChange('initialInvestment',event.target.value)} required/>
                </p>
                <p>
                    <label>Expected Return</label>
                    <input type='number' value={userInput.annualInvestment} onChange={(event) => onChange('annualInvestment',event.target.value)} required/>
                </p>
        </div>

        <div className='input-group'>   
            <p>
                <label>Annual Investment</label>
                <input type='number' value={userInput.duration} onChange={(event) => onChange('duration',event.target.value)} required/>
            </p>
            <p>
                <label>Duration</label>
                <input type='number' value={userInput.expectedReturn} onChange={(event) => onChange('expectedReturn',event.target.value)}  required/>
            </p>
        </div>
      </section>
        </>
    );
}