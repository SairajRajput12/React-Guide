import React from "react";

function Feature({data}){
    return(
        <ul style={{ display: 'flex', flexDirection: 'row',margin:'5px',padding: '2rem','border-radius': '6px','flex-wrap': 'wrap',
        'justify-content': 'center','gap':'2rem'}}>
            {data.map((val,index) => (
                <div key={index} id="feature">
                <img  src={val.link} alt="..." />
                    <h3><b>{val.featureName}</b></h3> 
                    <p>{val.description}</p>
                </div>
            ))}
        </ul>
    );
}

export default Feature; 