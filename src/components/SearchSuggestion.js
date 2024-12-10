import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SearchSuggestion = () => {
    const { gptMovies, gptMovieNames } = useSelector((store) => store.search);
    // console.log("gptMovieNames:", gptMovieNames, "Type:", typeof gptMovieNames);
    // console.log("gptMovies:", gptMovies);

    // rRETURN NULL IF The MOVIENAME IS NOT AN ARRAY OR THE LENGTH IS ZERO
    if (!Array.isArray(gptMovieNames) || gptMovieNames.length === 0) return "No items found";

    return (
        <div className="bg-gradient-to-r from-slate-900 to-slate-900 text-white">
            <div>
                {gptMovieNames?.map((movieName, index) => (
                    <MovieList key={movieName} title={movieName} movies={gptMovies?.[index]} />
                ))}
            </div>
        </div>
    );
};

export default SearchSuggestion;
