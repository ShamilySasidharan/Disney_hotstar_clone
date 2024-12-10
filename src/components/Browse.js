import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayongMovies";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpComing from "../hooks/useUpcoming";
import Search from "./Search";
import { useSelector } from "react-redux";


const Browse = () => {

  // CALLING THE CUSTOM HOOK HERE
  useNowPlayingMovies();
  usePopularMovies()
  useTopRated()
  useUpComing()
 
 const searchPage = useSelector((store)=>store.search.showSearchPage)
  return (
    <div className="flex ">
        {/* SIDEBAR- HEADER */}
      <aside className="h-screen sticky top-0 overflow-y">
        <Header />
      </aside>
     
     {/* MAIN CONTENT */}
      <main className="flex-grow min-w-96">
        {
        searchPage ? <Search/> : <> <MainComponent />
        <SecondaryComponent /></>
        }
       
       
      </main>
    </div>
  );
};

export default Browse;
