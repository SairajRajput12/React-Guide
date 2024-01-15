import Feature from './components/AppFeature';
import Button from './components/Button';
import Cards from './components/Cards';
import todoAppFeatures from './components/Feature';
import Intro from './components/IntroDuction';
import NavBar from './components/NavBar';
import './index.css'; 


const navBarContent = ['Home','About','Services','Contact']
const appName = 'To Do App'; 
const greet = 'Welcome to this application'


export default function App(){
  return(
      <>
        <NavBar data={navBarContent} appName={appName} />
        <Intro greet={greet} />
        <div id='bully'>
            <Feature data={todoAppFeatures}/> 
        </div>
        <Button />
        <div className='CardBox'>
          <Cards />
        </div>
      </>
  );
};