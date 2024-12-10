import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../utils/movieSlice"


const useTopRated = ()=>{
const dispatch = useDispatch()

 const getTopRatedMovies = async()=>{
  const promise =  await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
  const data = await promise.json()

  dispatch(addTopRatedMovies(data.results))

 }

 useEffect(()=>{
  getTopRatedMovies()
 },[])
 
    return(
 <div></div>
    )
}

export default useTopRated