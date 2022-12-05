import { configureStore } from "@reduxjs/toolkit";
import { notesReducer } from "../Reducers/notesReducer";


export const Store = configureStore({
    reducer:notesReducer,
})

export default Store


