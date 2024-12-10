import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addTopRatedMovies } from "../utils/movieSlice"


const useTopRated = ()=>{
const dispatch = useDispatch()
const topRatedMovies  = useSelector((store)=>store.movies.topRated)
 const getTopRatedMovies = async()=>{
  const promise =  await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
  const data = await promise.json()

  dispatch(addTopRatedMovies(data.results))

 }

 useEffect(()=>{
   if(!topRatedMovies)
  getTopRatedMovies()
 },[])
 
    return(
 <div></div>
    )
}

export default useTopRated