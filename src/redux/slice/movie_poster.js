import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


export const getMoviePoster = createAsyncThunk("getMoviePoster", async() => {
const response = await fetch("https://www.omdbapi.com/?apikey=d43cd4cc&s=action");

return response.json();
})


const initialState = {
    posterData : [],
    isLoding : false,
   
}


const moviePosterSlice = createSlice({
    name: "movie_poster",
    initialState,
    extraReducers : (builder) =>  {

        builder.addCase(getMoviePoster.pending, (state) => {
            state.isLoding = true;
        })
        builder.addCase(getMoviePoster.fulfilled, (state, action) => {
            //console.log(action.payload.Search)
            state.isLoding = false;
            

            state.posterData = action.payload.Search.map((data) => {
                const newData = {...data, price: Math.floor(Math.random() * 100) + 1, quantity: 1}
                return newData;

            })
         
        })
        builder.addCase(getMoviePoster.rejected, (state) => {
            state.isLoding =false;
        })


       
    },
   


})

export const moviePostReducer = moviePosterSlice.reducer;
