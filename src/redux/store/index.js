import { configureStore } from "@reduxjs/toolkit";
import {moviePostReducer} from '../slice/movie_poster'
import {addToCartReducer} from '../slice/addToCartSlice'

const store = configureStore(
    {
        reducer: {
            movie_poster: moviePostReducer,
            cartItems: addToCartReducer,
        }
    }
)

export default store;