import { useSelector } from "react-redux";
import { POSTER_URL } from "../utils/constants";
import { IoClose } from "react-icons/io5";

const MovieDetails = () => {
  const movieCardDetails = useSelector((store) => store.movies.movieDetails);
  // console.log("Movie details:", movieCardDetails);
  // console.log("id",movieCardDetails?.id)
  return (
    <div className="w-full h-screen">
    
    <div 
      className="bg-gradient-to-b from-slate-900 to-black flex px-28 py-20"
    >
    <IoClose />
    <img src={POSTER_URL + movieCardDetails?.posterPath} alt="posterImage" className="w-[400px]"/>

      <div className="text-white  pt-56  bg-blac bg-opacity-50 text-lg px-5">
        {/* <h1>ID: {movieCardDetails?.id}</h1> */}
        <h1 className="font-bold text-3xl">{movieCardDetails?.title}</h1>
        <p className="w-3/4 py-5">{movieCardDetails?.overview}</p>
      </div>
    </div>
    </div>
    
  );
  
};

export default MovieDetails;
