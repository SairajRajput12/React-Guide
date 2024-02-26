export async function fetchAvailablePlaces(){
    const response = await fetch("/places"); 
          const resData = await response.json();  
          if(response.ok){
            alert('Data fetched succesfully!!'); 
          }
          else{
            throw new Error("Failed to fetch places"); 
        }
    return resData.places; 
}

export async function updateUserPlaces(places){
    const response = await fetch('/user-places',{
        method:'PUT',
        body:JSON.stringify({places:places}), 
        headers:{
            'Content-Type':'application/json'
        }
    });

    const resData = await response.json(); 
    if(!response.ok){
        throw new Error('Failed to update the user data.'); 
    }
    return resData.message; 
}

export async function fetchUserPlaces(){
    const response = await fetch('/user-places'); 
    const resData = await response.json(); 

    if(!response.ok){
        throw new Error('Failed to fetch user places'); 
    }
    return resData.places; 
}