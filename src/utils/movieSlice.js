import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
    name : "movies",
    initialState: {
        nowPlayingMovies : null,
        trailer:null,
        popularMovies:null,
        movieDetails:null,
        topRated:null,
        upComing:null,
        searchedMovies:null,
       
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addPopularPlayingMovies:(state,action)=>{
            state.popularMovies = action.payload
        },
        addTrailerOfTheMovie : (state,action)=>{
            state.trailer = action.payload
        },
        addDetailsOfTheMovie:(state,action)=>{
            state.movieDetails = action.payload
        },
        addTopRatedMovies :(state,action)=>{
            state.topRated = action.payload
        },
        addUpComingMovies :(state,action)=>{
            state.upComing = action.payload
        },
        addSearchedMovies :(state,action)=>{
            state.searchedMovies = action.payload
        }
       
        
    
    }

})

export const {addNowPlayingMovies,addTrailerOfTheMovie,addPopularPlayingMovies,addDetailsOfTheMovie,addTopRatedMovies,addUpComingMovies,addSearchedMovies} = movieSlice.actions
export default movieSlice.reducer