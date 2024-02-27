import React, { useState } from 'react';
import Input from './components/input';


function App() {
  const [richText, setRichText] = useState(true);

  return (
    <div id="app">
      <Input richText={richText} />
    </div>
  );
}

export default App;
