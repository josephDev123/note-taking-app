import { configureStore } from "@reduxjs/toolkit";
import NoteReducer from './NoteSlice';

export const NoteStore = configureStore({
    reducer:{
        note:NoteReducer
    }
})