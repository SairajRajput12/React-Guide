// Todo: Create & manage context in this file
import React from 'react'; 
import { createContext } from 'react';

export const Theme = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export default function ThemeContextProvider({children}) {
  // Todo: Add the component code (incl. dynamic context value)

  const [theme,setTheme] = React.useState('light'); 
  
  const toggleTheme = ()=>{
      setTheme((prevTheme) => {
          return prevTheme === 'light' ? 'dark' : 'light'; 
      });
  };
  
  return(
        <Theme.Provider value={{theme,toggleTheme}} >
            {children}        
        </Theme.Provider>
    );
  
  
  
}
