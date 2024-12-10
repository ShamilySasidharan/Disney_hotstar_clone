
import {  useSelector } from "react-redux";
import useTrailerOfMovie from "../hooks/useTrailerOfMovie";

const VideoBackground = ({ movieID }) => {
//   const [trailerId, setTrailerId] = useState();
console.log("the movieid:",movieID)
  
//GETTING THE TRAILER FROM THE STORE USING THE USE SELECTOR
  const trailerVideo = useSelector((store)=>store.movies.trailer)
//   console.log("key",trailerVideo)


  // FETCHING TRAILER HANDLES IN CUSTOM HOOK
  useTrailerOfMovie(movieID)
    
  return (
    <div>
      <iframe
      className="w-full  h-full aspect-video -mt-14"
        width="560"
        height="315"
        // src will contain the url + trailer.key which is needed for the video to display
        // src={
        //   "https://www.youtube.com/embed/FKBN1qAzW3s?si=7_p9fuG7tKSpoFRw" +
        //   trailerId
        // }
        src= {"https://www.youtube.com/embed/FKBN1qAzW3s?si=7_p9fuG7tKSpoFRw" + trailerVideo?.key + "?&autoplay=1&mute=1"} 
           
          
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default VideoBackground;
