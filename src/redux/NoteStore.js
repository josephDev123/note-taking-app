import { configureStore } from "@reduxjs/toolkit";
import NoteReducer from './NoteSlice';
import {SendDataToLocalStorage} from '../save_and_load_data/SaveAndLoadData';

export const NoteStore = configureStore({
    reducer:{
        note:NoteReducer
    }
})

NoteStore.subscribe(()=>{
    SendDataToLocalStorage(NoteStore.getState().note);  
})