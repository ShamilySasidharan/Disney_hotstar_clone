import { createSlice } from "@reduxjs/toolkit";

const languageConfig = createSlice({
    name :"langConfig",
    initialState:{
        lang:'en'
    },
    reducers:{
        changeLanguage:(state,action)=>{
         state.lang = action.payload
        }
    }
})
export const {changeLanguage} = languageConfig.actions

export default languageConfig.reducer