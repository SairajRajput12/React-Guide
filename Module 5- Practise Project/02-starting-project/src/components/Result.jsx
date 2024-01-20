import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({data}){
    const result = calculateInvestmentResults(data); 
    console.log(result);
    console.log(data); 
    return(
        <table id="result">
            <thead> 
                <tr>
                    <th>Year</th> 
                    <th>Investment Value</th> 
                    <th>Intrest(Value)</th> 
                    <th>Total Intrest</th> 
                    <th>Invested Capital</th> 
                </tr>
            </thead>

            <tbody>
                {result.map((value,index) => {
                    const totalInterest = value.valueEndOfYear - value.annualInvestment * value.year - data.initialInvestment;
                    const totalAmountInvested = value.valueEndOfYear - totalInterest; 
                    
                    return(
                        <tr key={index}> 
                            <td>{value.year}</td> 
                            <td>{formatter.format(value.valueEndOfYear)}</td> 
                            <td>{formatter.format(value.interest)}</td> 
                            <td>{formatter.format(totalInterest)}</td> 
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}