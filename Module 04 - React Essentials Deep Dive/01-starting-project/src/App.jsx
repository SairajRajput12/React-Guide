import Header from './components/Header.jsx';
import CoreConcepts from './components/coreconcept.jsx';
import Examples from './components/examples.jsx';


function App() {
  
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;