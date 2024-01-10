import CoreConcept from "./CoreConcepts";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts(){
    return(
        <section id="core-concepts">
        <h2>Core Concepts</h2> 
            <ul>
            {/* <CoreConcept title ={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
            <CoreConcept title ={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
            <CoreConcept title ={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
            <CoreConcept title ={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/>  */}
            {/*Lecture 45: Alternative syntaxes for props:  */}
            {/* <CoreConcept {...CORE_CONCEPTS[0]}/>  
            <CoreConcept {...CORE_CONCEPTS[1]}/>  
            <CoreConcept {...CORE_CONCEPTS[2]}/>  
            <CoreConcept {...CORE_CONCEPTS[3]}/>  
            */}
            {/* {Lecture 48: Component customisation special children prop} */} 
            
            {/* Lecture 57: Outputting list dynamically
                Above approaches fails when i make changes in the data source */}
            {/* The jsx is capable of dealing with the array and the renderable data */}
            {CORE_CONCEPTS.map((conceptItem) =>
            (
                <CoreConcept key={conceptItem.title} {...conceptItem}/>
            ))}
            </ul>
        </section>
    );
}