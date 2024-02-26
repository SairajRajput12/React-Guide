import { useState } from 'react';
import Places from './Places.jsx';
import { useEffect } from 'react';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../https.js';


export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching,setIsFetching] = useState(false); 
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error1,setError] = useState(); 
  useEffect(() => {
    async function fetchPlaces(){
        setIsFetching(true); 
        
        try{
          const places  =  await fetchAvailablePlaces(); 
          navigator.geolocation.getCurrentPosition((position)=>{
              const sortedPlaces = sortPlacesByDistance(places,position.coords.latitude,position.coords.longitude);
              setAvailablePlaces(sortedPlaces); 
          }); 
        }
        catch(error){
          setError({message:error.message || 'Could not fetch places, please try again later.'})
        }
         
        setIsFetching(false); 
    }
    fetchPlaces(); 
  }, []);

  if(error1){
    return(
      <Error title="An error occured!!" message={'Invalid response'} />
    )
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText = "Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
