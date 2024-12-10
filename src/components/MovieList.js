import MovieCard from "./MovieCard";

const MovieList = ({ title, movies}) => {
//   console.log("the card movies from list:", movies);
  // console.log("preview check from movielist:",movies?.[0]);
  return (
    <div className=" p-6 text-white ">
      <h1 className="text-3xl py-2 my-2 ">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar ">
        <div className="flex space-x-8 ">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} title={movie?.title}   
            overview={movie?.overview
            } id={movie?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
