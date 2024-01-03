import componentsImg from './assets/components.png'
import configImg from './assets/config.png'
import rectCore from './assets/state-mgmt.png';  
import jsx from './assets/jsx-ui.png'
import { CORE_CONCEPTS } from './data';
import Header from './components/Header.jsx'; 
import CoreConcept from './components/CoreConcepts.jsx';
// Lecture 41 Dynamic content genration: 
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2> 
        <ul>
          {/* <CoreConcept title ={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
          <CoreConcept title ={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
          <CoreConcept title ={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
          <CoreConcept title ={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/>  */}
          {/*Lecture 45: Alternative syntaxes for props:  */}
          <CoreConcept {...CORE_CONCEPTS[0]}/>  
          <CoreConcept {...CORE_CONCEPTS[1]}/>  
          <CoreConcept {...CORE_CONCEPTS[2]}/>  
          <CoreConcept {...CORE_CONCEPTS[3]}/>  

        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
