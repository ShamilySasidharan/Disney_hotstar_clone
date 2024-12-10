import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryComponent =()=>{
  const movies = useSelector((store)=>store.movies)
 
 

  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-900">
      <div className="-mt-60 relative z-20 ">
      <MovieList title={"Now Playing Movies"} movies={movies?.nowPlayingMovies}/>
       <MovieList title={"Popular Movies"} movies={movies?.popularMovies}/>
       <MovieList title={"Top Rated Movies"} movies={movies?.topRated}/>
       <MovieList title={"Up Coming Movies"} movies={movies?.upComing}/>
      
      </div>
      
       
    </div>
  )
}

export default SecondaryComponent