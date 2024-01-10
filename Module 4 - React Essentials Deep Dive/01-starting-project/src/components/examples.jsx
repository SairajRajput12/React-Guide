import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Tabs from "./Tabs.jsx";
import Section from "./Section.jsx";



export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState();   
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

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
      tabContent = (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      );
    }
  

  function handleClick(selectedButton){
    // selected Buttomg => 'components','props','jsx',state

    console.log('Hello World -selected');
    if(selectedButton === 'components')
    {
      console.log('components button clicked'); 
      // tabContent = selectedButton;  // this text is not changing on clicking the buttons
      // console.log(tabContent); 
      setSelectedTopic(selectedButton);
    }
    else if(selectedButton === 'state'){
      console.log('state button clicked');
      // tabContent = selectedButton; 
      // console.log(tabContent); 
      setSelectedTopic(selectedButton); 
    }
    else if(selectedButton === 'jsx'){
      console.log('jsx button clicked');
      // tabContent = selectedButton; 
      // console.log(tabContent); 
      setSelectedTopic(selectedButton);
    }
    else{
      console.log('props button clicked');
      // tabContent = selectedButton;
      // console.log(tabContent);
      setSelectedTopic(selectedButton); 
    }
  }
    return(
        
      <Section  title='Examples' id="examples"> 
      {/* Lecture 64 */}
      {/* if i used then it will show the repture style */}
      {/* the id is not automatically forwarded to the custom components */}
      {/* we should add it to using props */}
      {/* the styles will be loss beacuse the jsx treats them as a props */}
      <Tabs buttons={<><TabButton
          isSelected={selectedTopic === 'components'}
          onSelect={() => handleClick('components')}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'jsx'}
          onSelect={() => handleClick('jsx')}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'props'}
          onSelect={() => handleClick('props')}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'state'}
          onSelect={() => handleClick('state')}
        >
          State
        </TabButton></>} >{tabContent}</Tabs>    
    </Section>     
    );
}