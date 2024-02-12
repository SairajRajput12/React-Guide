import { useCallback, useEffect, useRef, useState } from 'react';
import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';

const storedIds = JSON.parse(localStorage.getItem('selectedPlaces'))  || []; 
const storedPlaces = storedIds.map(
  (id) => AVAILABLE_PLACES.find((place) => place.id === id )
); 

function App() {
  // useEffect(() => {
  //   const storedIds = JSON.parse(localStorage.getItem('selectedPlaces'))  || []; 
  //   const storedPlaces = storedIds.map(
  //     (id) => AVAILABLE_PLACES.find((place) => place.id === id )
  //   ); 
  //   setPickedPlaces(storedPlaces);
  // }, []); 

  const [isOpen,setIsOpen] = useState(false); 
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
  const [AvailablePlaces, setAvailablePlaces] = useState([]); 

 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );

      setAvailablePlaces(sortedPlaces);
    });
  }, []);
  // useEffect excepts the 2 argument: first is the function which causes infinite loop and second is the state dependencies array 
  // after the execution of the app component the execution of the useEffect finishesh.  
  // empty dependency array prevents the infinite loop in case of the useEffect if it is not specified as a second parameter. 

  // console.log(navigator.geolocation.getCurrentPosition((position) => {
  //     // sortPlacesByDistance(AVAILABLE_PLACES,position.coords.latitude,position.coords.longitude); 
  //     const sortPlaces = sortPlacesByDistance(AVAILABLE_PLACES,27.1751,78.0421); 
  //     console.log(sortPlaces); 
  //     setAvailablePlaces(sortPlaces);  // this line causes infinite loop and can leads to the crashing of the application beacuse we are calling the state updating function which leads to the reexecution of the component and reexecution leads to the reexecution of the function and this cycle repeats.
  // })); 

  function handleStartRemovePlace(id) {
    // modal.current.open();
    setIsOpen(true); 
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    // modal.current.close();
    setIsOpen(false); 
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
    const storedPlaces = JSON.parse(localStorage.getItem('selectedPlaces')) || []; 
    if(storedPlaces === -1){
      // means this id does not exist and we should update our local storage 
      localStorage.setItem('selectedPlaces',JSON.stringify([id,...storedPlaces]));
    }
  }

  const handleRemovePlace  = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setIsOpen(false); 
    const storedids = JSON.parse(localStorage.getItem('selectedPlaces')) || []; 
    localStorage.setItem('selectedPlaces',JSON.stringify(storedids.filter((id) => id !== selectedPlace.current))); 
    // this hook ensures that the function will not get recreated until the execution stops.

  },[]); 

  
  return (
    <>
      <Modal open={isOpen} onClose={handleStopRemovePlace} >
        {isOpen && <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />}
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={AvailablePlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
