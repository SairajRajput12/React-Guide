import React from 'react'; 
import Review from './components/Review';

// don't change the Component name "App"
function App() {
const [val1,setVal1]= React.useState('first try');
const [val2,setVal2]= React.useState('second try'); 


function changeVal1(event){
    setVal1(event.target.value);
}

function changeVal2(event){
    setVal2(event.target.value); 
}
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea  onChange={changeVal1}/>
        </p>
        <p>
          <label>Your Name</label>
          <input type="text"  onChange={changeVal2} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={val1} student={val2}/>

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;