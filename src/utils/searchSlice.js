import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        showSearchPage : false,
        gptMovies:null,
        gptMovieNames:null,
        items:[]
    },
    reducers : {
        toggleSearchPage:(state)=>{
        state.showSearchPage = !state.showSearchPage
        },
     
        addGptMovieResult:(state,action)=>{
        state.gptMovies = action.payload
        },
        addGptMovieName:(state,action)=>{
            state.gptMovieNames = action.payload
        },
        removeTheCart:(state,action)=>{
           state.items = []
        }

    }

})
export const{toggleSearchPage,addGptMovieResult,addGptMovieName,removeTheCart} = searchSlice.actions
export default searchSlice.reducer