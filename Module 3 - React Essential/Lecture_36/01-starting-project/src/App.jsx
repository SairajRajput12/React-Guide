import componentsImg from './assets/components.png'
import configImg from './assets/config.png'
import rectCore from './assets/state-mgmt.png';  
import jsx from './assets/jsx-ui.png'
import { CORE_CONCEPTS } from './data';
import Header from './components/Header.jsx'; 
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
// Lecture 41 Dynamic content genration: 
function App() {

  function handleClick(){
    console.log('Hello World !!');   
  }

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
          
          {/* {Lecture 48: Component customisation special children prop} */} 
          

        </ul>
        </section>
        <section id="examples"> 
            <h2>Examples</h2> 
            <menu> 

              {/* used to create the list of the buttons */} 
              {/* <TabButton>Components</TabButton> this statement ignored by react when you pass the text between opening and closing tag of the react */}
              <TabButton >JSX</TabButton> 
              <TabButton >Props</TabButton> 
              <TabButton >State</TabButton> 
            </menu>
            {/* lecture 50: passing functions as values to props, as i passed the handleClick function is passed as a value to the props */} 
             {/*In the tab TabButton.jsx file the function is passed as a value to the onClick events  */}
              <TabButton onSelect={handleClick}>Components</TabButton> 
            Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
