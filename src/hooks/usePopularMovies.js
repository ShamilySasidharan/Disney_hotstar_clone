import { useDispatch, useSelector } from "react-redux"
import { addPopularPlayingMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"

const usePopularMovies = ()=>{
    const dispatch = useDispatch()
    const popularMovies  = useSelector((store)=>store.movies.popularMovies)
    // FETCHING THE MOVIES FROM TMDB AND UPDATE STORE TAKE CARE HERE 
    const getPopularPlayingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
        const movieResult =  await data.json()
        // console.log("the movie fetched :",movieResult.results)
        // DISPATCH AN ACTION TO STORE IN THE STORE THEN CHECK THE REDUX FOR TO CONFIRM IT
        dispatch(addPopularPlayingMovies(movieResult.results))
    }

    useEffect(()=>{
        if(!popularMovies)
        getPopularPlayingMovies()
    },[])
}

export default usePopularMovies