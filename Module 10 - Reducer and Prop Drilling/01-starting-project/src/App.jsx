import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from './components/Product.jsx';
import ContextProvider, { CartContext } from './store/shopping-cart-context.jsx';


function App() {
  return (
    <ContextProvider >
    {/* property of context api is provider */}
      <Header/>
      <Shop >
        {/* Lecture : 164 the solution to this problem is that component composition where we are just directly passing the state to the child components */}
      {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </ContextProvider>
  );
}

export default App;
