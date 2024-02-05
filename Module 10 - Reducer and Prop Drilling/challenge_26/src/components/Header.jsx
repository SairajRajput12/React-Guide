import React from 'react'; 
import { Theme } from './ThemeContextProvider';

export default function Header() {
 const {toggleTheme} = React.useContext(Theme); 
  return (
    <header>
      <h1>Demo Website</h1>
      <button onClick={toggleTheme} >Toggle Theme</button>
    </header>
  );
}
