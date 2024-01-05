import componentsImg from './assets/components.png'
import configImg from './assets/config.png'
import rectCore from './assets/state-mgmt.png';  
import jsx from './assets/jsx-ui.png'
import { CORE_CONCEPTS } from './data';
import Header from './components/Header.jsx'; 
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';

// Lecture 41 Dynamic content genration: 
function App() {
   const [val,setVal] = useState();
   
   /*
    Lecture 53:
    state -> hooks
    in react all things are starting with the name use are called the hooks. 
    they must only be called inside the hooks/component functions. 
    react hook must be called on top of the component function. 
  */


  /*
    Lecture 52: If i use the tabcontent variable instead of the state then: 
    on calling the handleClick function the tabContent get updated inside the function but it is not shown in the ui. 
    when the handleSelect function executes the function will not executed again. 
    the components execute only once. 
    you have to tell react if a component should be executed again.

    react compares the old output of your component function with new output and applies any differences to the actual website ui
  */

  let tabContent = 'Please enter the text'; 

  function handleClick(selectedButton){
    // selected Buttomg => 'components','props','jsx',state

    console.log('Hello World -selected');
    if(selectedButton == 'components')
    {
      console.log('components button clicked'); 
      // tabContent = selectedButton;  // this text is not changing on clicking the buttons
      // console.log(tabContent); 
      setVal(selectedButton);
    }
    else if(selectedButton == 'state'){
      console.log('state button clicked');
      // tabContent = selectedButton; 
      // console.log(tabContent); 
      setVal(selectedButton); 
    }
    else if(selectedButton == 'jsx'){
      console.log('jsx button clicked');
      // tabContent = selectedButton; 
      // console.log(tabContent); 
      setVal(selectedButton);
    }
    else{
      console.log('props button clicked');
      // tabContent = selectedButton;
      // console.log(tabContent);
      setVal(selectedButton); 
    }
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
        <section id="examples"> 
            <h2>Examples</h2> 
            <menu> 

              {/* used to create the list of the buttons */} 
              {/* <TabButton>Components</TabButton> this statement ignored by react when you pass the text between opening and closing tag of the react */}
              <TabButton isSelected={val === 'jsx' ? true : false} onSelect={() => handleClick('jsx')}>JSX</TabButton> 
              <TabButton isSelected={val === 'props' ? true : false} onSelect={() => handleClick('props')}>Props</TabButton> 
              <TabButton isSelected={val === 'state' ? true : false} onSelect={() => handleClick('state')}>State</TabButton> 
              <TabButton isSelected={val === 'components' ? true : false} onSelect={() => handleClick('components')}>Components</TabButton> 
              {/* here the arrow function is passed as a value and it get executed then the handleClick function get called */} 

            </menu>
            {/* lecture 50: passing functions as values to props, as i passed the handleClick function is passed as a value to the props */} 
             {/*In the tab TabButton.jsx file the function is passed as a value to the onClick events  */}
        </section>
        {/* {tabContent} */}
        
         {!val ? (
          <p>Please select a topic.</p>
          ) : (
            <div id="tab-content"> 
            <h3>{EXAMPLES[val].title}</h3> 
            <p>{EXAMPLES[val].description}</p> 
            <pre> 
              <code> 
                {EXAMPLES[val].code}
              </code>
            </pre>
          </div>
         )} 
         
      </main>
    </div>
  );
}

export default App;