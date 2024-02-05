import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContext = createContext({
    items:[],
    addToCart: () => {},
    updateItemQuantity : () => {}, 
}); 

function shoppingCartReducer(state,action){
  // this function must be defined outside of the component. 
  if(action.type === 'add-item'){
     // ... update state accordingly 
     const updatedItems = [...state.items];
    
          const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === action.payload
          );
          const existingCartItem = updatedItems[existingCartItemIndex];
    
          if (existingCartItem) {
            const updatedItem = {
              ...existingCartItem,
              quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
          } else {
            const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
            updatedItems.push({
              id: action.payload,
              name: product.title,
              price: product.price,
              quantity: 1,
            });
          }
    
          return {
            ...state,
            items: updatedItems,
          };
  }

  if(action.type === 'update_item'){
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  return state; 
}

export default function ContextProvider({children}){
    const [shoppingCartState,shoppingCartDispatch] = useReducer(shoppingCartReducer,
      {
        items: [],
      }
      ); 
      function handleAddItemToCart(id) {
        shoppingCartDispatch({
            type:'add-item', // it identifies the type of the action which is can be any kind of identifier. 
            payload: id
        });

      }

      function handleUpdateCartItemQuantity(productId, amount) {
        shoppingCartDispatch({
          type:'update_item',
          payload:{
            productId:productId,
            amount:amount
          }
        })
      }
    
      const ctxValue = {
        items: shoppingCartState.items, 
        addToCart:handleAddItemToCart, 
        updateItemQuantity : handleUpdateCartItemQuantity
      }

      return(
        <CartContext.Provider value={ctxValue} >
            {children}
        </CartContext.Provider>
      )



}