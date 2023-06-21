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
            console.log(index)
            if(index >= 0) {

                  state.cart.map((data)=> {
                    const newCartData = {...data, quantity: action.payload.quantity + 1 }
                    console.log(newCartData)
                    return newCartData;

                   

                })

               


                
                
                // state.cart[index].quantity += action.payload.quantity
                // console.log(action.payload)
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