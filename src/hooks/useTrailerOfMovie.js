
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector, } from "react-redux";
import { addTrailerOfTheMovie } from "../utils/movieSlice";

const useTrailerOfMovie = (movieID)=>{
   // DISPATCH AN ACTION TO STORE INSIDE THE STORE
  //  console.log(movieID)
   const dispatch = useDispatch()
   const trailerOfTheMovies  = useSelector((store)=>store.movies.trailer)

   // MAKING THE FETCH CALL TO GET ALL THE VIDEOS OF THE MOVIE
    const getAllMovieVideos = async () => {
   const promise = await fetch(
     "https://api.themoviedb.org/3/movie/"+movieID+"/videos?language=en-US",
     API_OPTIONS
   );
   const data = await promise.json();
   //  console.log("all videos fetched now",data.results)

   // EACH MOVIE MAY HAVE MULTIPLE VIDEOS,FILTERING THE VIDEOS TO GET ONLY THE type:"TRAILER"
   const filterTrailerTypeOnly = data.results.filter(
     (video) => video.type === "Trailer"
   );
    // IF THE VIDEO DON'T HAVE A TYPE 'TRAILER' THEN RETURN ANY VIDEO FROM THE DATA
   const trailer = filterTrailerTypeOnly.length
     ? filterTrailerTypeOnly[0]
     : data.results[0];
  

   // THE TRAILER HAS A YOUTUBE VIDEO KEY WE NEED KEY TO GET IT FROM THE YOUTUBE
  //  console.log("trailer type:", trailer);
   // WE CAN MAKE THEM DYNAMIC BY (TRAILER WILL LOAD ACCORDING TO THE ID)
   // USING STATE VARIBLE OR
   //  USING THE REDUX STORE
   // setTrailerId(trailer);
   dispatch(addTrailerOfTheMovie(trailer))

 };
 // CALLIING THE FUNCTION INSIDE THE USE EFFECT HOOK SO IT WILL ONLY CALL ONCE
 useEffect(() => {
  if(trailerOfTheMovies)
   getAllMovieVideos();
 }, []);

}
export default useTrailerOfMovie