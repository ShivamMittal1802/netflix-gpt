import { createSlice } from "@reduxjs/toolkit";

const GptToggleSlice = createSlice({
    name: "GptToggle",
    initialState : {
        GptToggle : false
    },
    reducers:{
        toggleGpt: (state)=>{
            state.GptToggle = !state.GptToggle;
        }
    }
})

 export const {toggleGpt} = GptToggleSlice.actions;

export default GptToggleSlice.reducer;
