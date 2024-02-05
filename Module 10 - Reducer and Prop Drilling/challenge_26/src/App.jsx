import Page from './components/Page';
import ThemeContextProvider from './components/ThemeContextProvider';


function App() {
  return (
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  );
}
 
export default App;
