// import { useDispatch, useSelector } from "react-redux";
// import { SUPPORTED_LANGUAGE } from "../utils/constants";
// import langConst from "../utils/languageConst";
// import { changeLanguage } from "../utils/languageConfig";
// import { useRef, useState } from "react";
// import useSearchedMovies from "../hooks/useSearchedMovies";

// const SearchBar = () => {
//   const[query,setQuery] = useState(null)
//   const dispatch = useDispatch();
//   const searchMovies = useRef("");
//     //console.log(searchMovies);

//     //SUBSCRIBE TO THE STORE FOR LANGUAGE
//   const languageOption = useSelector((store) => store.langConfig?.lang);

//     // ACTION DISPATCH WHEN OPTION CHANGE AND STORE TO THE REDUX
//   const handleLanguageChange = (e) => {
//     dispatch(changeLanguage(e.target.value));
//   };

//   const handleSearch = () => {
//     setQuery(searchMovies.current.value);
    
//   };

//   useSearchedMovies(query);

//   return (
//     <div className="pt-[2%]">
//       <form
//         className="p-6 flex items-center"
//         onSubmit={(e) => {
//           e.preventDefault();
//         }}
//       >
//         <input
//           className="px-10 py-4 my-4 mx-8 font-semibold w-3/4 rounded-lg text-black"
//           placeholder={langConst[languageOption]?.searchPlaceholder}
//           type="text"
//           ref={searchMovies}
//         />
//         <button
//           onClick={handleSearch}
//           className="p-4 m-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white w-[100px] rounded-lg font-bold"
//         >
//           {/* IT IS IMPORTANT TO GIVE LIKE langConst[languageOption] OTHERWISE ERROR  */}
//           {langConst[languageOption]?.searchBtn}
//         </button>
//         <select
//           className="bg-slate-900 text-white font-semibold cursor-pointer rounded-md p-4 m-4"
//           onClick={handleLanguageChange}
//         >
//           {SUPPORTED_LANGUAGE.map((lang) => (
//             <option key={lang.id} value={lang.id}>
//               {lang.name}
//             </option>
//           ))}
//         </select>
//       </form>
//     </div>
//   );
// };

// export default SearchBar;
//THE ABOVE CODE WORK FOR SEARCH GIVE RESULT ONLT FOR THE TITLE AND ACTOR NAME.



// GPT SEARCH INTERGATION FOR UNIQUE SEARCH
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, SUPPORTED_LANGUAGE } from "../utils/constants";
import langConst from "../utils/languageConst";
import { changeLanguage } from "../utils/languageConfig";
import { useRef} from "react";
import client from "../utils/openAi";
import { addGptMovieName, addGptMovieResult } from "../utils/searchSlice";
// import useSearchedMovies from "../hooks/useSearchedMovies";

const SearchBar = () => {
  
  const dispatch = useDispatch();
  const searchMovies = useRef("");
    //console.log(searchMovies);

    //SUBSCRIBE TO THE STORE FOR LANGUAGE
        const languageOption = useSelector((store) => store.langConfig?.lang);

    // ACTION DISPATCH WHEN OPTION CHANGE AND STORE TO THE REDUX
         const handleLanguageChange = (e) => {
         dispatch(changeLanguage(e.target.value));
         };


    // THE TMDB MOVIE FETCH FOR SEARCH MOVIE CALLS WHEN MAPPING HAPPENS IN 
    const searchMoviesInTmdb =async (movie)=>{
        const promise = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS)
        const data = await promise.json()
        // console.log("TMDB search results:",data.results)
       
        return data.results
    }

    // onClick FUNCTION FROM THE BUTTON INTEGRATING THE GPT API
    const handleSearch = async() => {
        const query = "Act as a movie recommended system for the query: " + searchMovies.current.value + "the movies should be comma separated and should be a list of five movies,given them as an example ahead example:Isaw the devil,bewildered,silence,train to busan,forgotten"
        const gptResults = await client.chat.completions.create({
        messages: [{ role: 'user', content: query }],
        model: 'gpt-3.5-turbo',
      });
    //  console.log(gptResults.choices)
    //RETURN NOTHING WHEN IT IS EMPTY
      if(!gptResults.choices) return

    //GPT RESULT WILL BE Karnan, Malik, Kuruthi, Hridayam, Member Ramesh FORM
     const gptResultsInContent = gptResults?.choices?.[0]?.message?.content
     console.log("gptResultsInContent",gptResultsInContent)
    
   
    
    //  CONVERTING IT TO AN ARRAY BY ADDING SPLIT FUNCTION
    // ['Lucifer','Appu','Nadan','Ravanaprabhu','devadoothan']
    const gptResultsInArray = gptResultsInContent.split(",")
    // console.log("gptResultsInArray",gptResultsInArray)
      
    //  DISPATCHING AN ACTION TO STORE THE NAME,SHOULD ALWAYS STORE IN ARRAY(***)
      dispatch(addGptMovieName(gptResultsInArray))
 
    // MAKE A FETCH CALL FOR TMDB MOVIES AND PASS EACH MOVIE IN THE ARRAY
    const promiseArray = gptResultsInArray?.map((movie)=>searchMoviesInTmdb(movie))
    // GIVES 5 PROMISES, WE NEED TO RESOLVE THEM
    // console.log("promise result",promiseArray)

    // GETTING THE TMDB RESULTS FINALLY USING THE Promise.all() TO RESOLVE ALL THE PROMISE
    const TMDBresults = await Promise.all(promiseArray)
    console.log("the promise resolved and adding to store:",TMDBresults)

    // STORE THEM IN THE REDUX STORE 
    dispatch(addGptMovieResult(TMDBresults))
    
  };



  return (
    <div className="pt-[2%]">
      <form
        className="p-6 flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="px-10 py-4 my-4 mx-8 font-semibold w-3/4 rounded-lg text-black"
          placeholder={langConst[languageOption]?.searchPlaceholder}
          type="text"
          ref={searchMovies}
        />
        <button
          onClick={handleSearch}
          className="p-4 m-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white w-[100px] rounded-lg font-bold"
        >
          {/* IT IS IMPORTANT TO GIVE LIKE langConst[languageOption] OTHERWISE ERROR  */}
          {langConst[languageOption]?.searchBtn}
        </button>
        <select
          className="bg-slate-900 text-white font-semibold cursor-pointer rounded-md p-4 m-4"
          onClick={handleLanguageChange}
        >
          {SUPPORTED_LANGUAGE?.map((lang) => (
            <option key={lang.id} value={lang.id}>
              {lang.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default SearchBar;

