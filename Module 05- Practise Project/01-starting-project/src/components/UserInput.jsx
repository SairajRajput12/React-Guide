export default function UserInput({data,handleChange}){
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label> 
                    <input value={data.initialInvestment} onChange={(event) => handleChange('initialInvestment',event.target.value)} type="number" />
                </p>

                <p>
                    <label>Annual investment</label> 
                    <input value={data.annualInvestment} onChange={(event) => handleChange('annualInvestment',event.target.value)} type="number" />
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label>Expected Return</label> 
                    <input value={data.expectedReturn} onChange={(event) => handleChange('expectedReturn',event.target.value)} type="number" />
                </p>

                <p>
                    <label>Duration</label> 
                    <input value={data.duration} onChange={(event) => handleChange('duration',event.target.value)} type="number" />
                </p>
            </div>
        </section>
    )
}