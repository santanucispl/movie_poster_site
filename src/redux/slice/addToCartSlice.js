import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    cart: [],
    
}

const addToCartSlice = createSlice({
    name : "addToCart",
    initialState,
    reducers : {
        addCart(state, action) {
            const index = state.cart.findIndex((item) => item.imdbID === action.payload.imdbID)
            const existingItem = state.cart[index];
            let updatedItems;
            if(existingItem) {
                // let newCartData="";
                //   state.cart.map((data)=> {
                //     if(data.imdbID === action.payload.imdbID){
                //          newCartData = {...data, quantity: action.payload.quantity + 1 }
                //     console.log(newCartData)
                //     }
                    
                //     return newCartData;

                   

                // })

                const updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1,
                  };
                  updatedItems = [...state.cart];
                  updatedItems[index] = updatedItem;

                  state.cart = updatedItems;
                  console.log(existingItem.quantity)
                
                // state.cart[index].quantity += action.payload.quantity
                 console.log(updatedItems[index])
            }else{
                state.cart.push(action.payload);
            }

           
                
               
           },
            removeCart(state, action) {
          
                
                state.cart = state.cart.filter((item) => item.imdbID !== action.payload)
                
            
            }

        },
        
    }
)

export const {addCart, removeCart, addQuantity} = addToCartSlice.actions;

export const addToCartReducer = addToCartSlice.reducer;