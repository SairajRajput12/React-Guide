import { calculateInvestmentResults,formatter } from "../util/investment";

export default function Result({data}){
    const results = calculateInvestmentResults(data);  
    console.log(results);
    return(
        <>
           <table id="result">
                <thead>
                    <tr>
                        <th>Year</th> 
                        <th>Invested Value</th>
                        <th>Intrest(Year)</th>
                        <th>Total Intrest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                        {results.map((value,index) => {
                            const totalInterest = value.valueEndOfYear - value.annualInvestment * value.year - data.initialInvestment;
                            const totalAmountInvested = value.valueEndOfYear - totalInterest;  
                            return(
                                <tr key={index}>
                                    <td>{formatter.format(value.year)}</td>
                                    <td>{formatter.format(value.annualInvestment)}</td> 
                                    <td>{formatter.format(value.valueEndOfYear)}</td> 
                                    <td>{formatter.format(totalInterest)}</td> 
                                    <td>{formatter.format(totalAmountInvested)}</td>
                                </tr>
                            );
                        })}
                </tbody>

           </table> 
        </>
    );
}