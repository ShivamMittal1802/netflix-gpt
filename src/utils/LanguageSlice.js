import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice = createSlice({
    name: "language",
    initialState: {
        selectedLanguage: 'English'
    },
    reducers:{
        updateSelectedLanguage: (state, action)=>{
            state.selectedLanguage = action.payload;
        }
    }
})

export const {updateSelectedLanguage} = LanguageSlice.actions;

export default LanguageSlice.reducer;