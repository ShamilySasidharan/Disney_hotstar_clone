import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainComponent = ()=>{

    // TAKING THE MOVIES FROM THE STORE THAT IS SUBSCRIBING TO THE STORE
         const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
    // BEGINING THE STORE IS EMPTY, THEREFORE ERROR TO REMOVE THIS WE NEED TO RETURN IMMEDIATELY WITHOUT DOING ANYTHING
    // if(movies===null)return
         if(!movies) return 
        //  console.log("the movies subscribed:",movies)

    // GIVES 100 MOVIES WE WANT ONLY ONE MOVIE FOR THE BACKGROUND AND ITS TITLE
        const mainMovie = movies[0]
        // console.log("mainMovies:",mainMovie)

    // EXTRACTING THE TITLE AND OVERVIEW FROM HERE AND PASS AS PROPS TO THE VIDEO TITLE COMPONENT
    const {original_language,original_title,overview,release_date,id} = mainMovie
    // EXTRACTING THE YEAR
    const year = release_date.split('-')[0];
    console.log(id)

    return (
        <div className="bg-white">
            <VideoTitle title={original_title} lang={original_language} description={overview} year={year}
            />
            <VideoBackground movieID={id}/>
        </div>
    )
}

export default MainComponent;