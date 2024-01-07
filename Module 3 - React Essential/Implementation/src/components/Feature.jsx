import React from "react";

function Feature(props){
    return(
        <div id="feature">
            <img  src={props.link} alt="..." />
            <h3><b>{props.featureName}</b></h3> 
            <p>{props.description}</p>
        </div>
    );
}

export default Feature; 