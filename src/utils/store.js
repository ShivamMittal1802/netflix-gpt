import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice';
import moviesReducer from './moviesSlice';
import GptToggleReducer from "./GptToggleSlice";
import LanguageReducer from "./LanguageSlice";

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        GptToggle: GptToggleReducer,
        Language: LanguageReducer
    }
});

export default appStore;