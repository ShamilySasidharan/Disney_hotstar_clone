import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../utils/userSlice"
import movieReducer from "../utils/movieSlice"
import searchReducer from "../utils/searchSlice"
import languageReducer from "../utils/languageConfig"
const appStore =  configureStore(
    {
        reducer:{
         user : userReducer,
         movies: movieReducer,
         search: searchReducer,
         langConfig:languageReducer
        }
    }
)
export default appStore;
