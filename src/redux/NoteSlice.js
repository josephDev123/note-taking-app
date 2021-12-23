import {createSlice} from '@reduxjs/toolkit';


export const NoteSlice = createSlice({
    name:'note',
    initialState:[],
    reducers:{
        
        add_note:(state, action)=>{
            return [...state, action.payload]
        },

        toggle_favorite:(state, action)=>{
            const{id} = action.payload;
            return state.map(item =>item.id===id?{...item, favorite:!item.favorite}:item)
        }
    }
})

export const {add_note, toggle_favorite}= NoteSlice.actions;
export default NoteSlice.reducer;
