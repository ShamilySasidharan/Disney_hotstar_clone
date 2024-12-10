import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addSearchedMovies } from "../utils/movieSlice"


const useSearchedMovies = (query)=>{
    console.log("the query is",query)
    const dispatch = useDispatch()
        const fetchSearchMovies = async()=>{
            if(!query) return;
                // THE FETCH API WITHOUT THE GPT INTERGRATION, IT WILL ONLY WORK WITH MOVIE TITLE OR ACTOR NAME 
                const promise = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e699b2b72bc7f99d37d920089a4bf613&query=${query}`)
                  
                const data = await promise.json()
                console.log(data.results)
                // DISPATCH AN ACTION TO STORE INTO THE REDUX
            dispatch(addSearchedMovies(data.results))  
            }

        useEffect(()=>{
            fetchSearchMovies()
        })
        
       
    return (
        <div>

        </div>
    )
}

export default useSearchedMovies