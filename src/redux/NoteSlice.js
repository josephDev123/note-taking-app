import {createSlice} from '@reduxjs/toolkit';


export const NoteSlice = createSlice({
    name:'note',
    initialState:{
        note:[]
    },
    reducers:{
        add_note:(state, action)=>{
            return [...state, action.payload]
        }
    }
})

export const {add_note}= NoteSlice.actions;
export default NoteSlice.reducer;
