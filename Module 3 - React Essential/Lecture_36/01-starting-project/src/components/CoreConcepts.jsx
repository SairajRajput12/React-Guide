import React from "react";
// Lecture 42: Setting HTML Attributes  dynamically and loading image files 
/*
use import statement for importing the react image as an example: 
*/


function CoreConcept({image,title,description}){ // array destructuring concept
    return(
      <li>
        <img id="image" src={image} alt="..."></img> 
        <h3>{title}</h3> 
        <p>{description}</p>
      </li>
    )
}

export default CoreConcept; 
  
  