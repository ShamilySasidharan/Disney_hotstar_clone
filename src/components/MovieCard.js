import { useDispatch } from "react-redux"
import { POSTER_URL } from "../utils/constants"
import { addDetailsOfTheMovie} from "../utils/movieSlice"
import { useNavigate } from "react-router-dom";



const MovieCard = ({posterPath,id,overview,title})=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    if(!posterPath)return null

    const movesToMovieDetails = ()=>{
        dispatch(addDetailsOfTheMovie({posterPath,id,overview
            ,title}));
           
        navigate("/moviedetails")   
    }
    
    return (
        <div className="w-48 ">
         <img src={POSTER_URL + posterPath} alt="POSTER" onClick={movesToMovieDetails}/>
      
        </div>
    )
}

export default MovieCard