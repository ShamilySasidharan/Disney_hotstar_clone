import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import {addUpComingMovies } from "../utils/movieSlice"


const useUpComing = ()=>{
const dispatch = useDispatch()
const upcomingMovies  = useSelector((store)=>store.movies.upComing)
 const getUpComingMovies = async()=>{
  const promise =  await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
  const data = await promise.json()
//   console.log("upcoming",data.results)
  dispatch(addUpComingMovies(data.results))

 }

 useEffect(()=>{
   if(!upcomingMovies)
    getUpComingMovies()
 },[])
 
    return(
 <div></div>
    )
}

export default useUpComing