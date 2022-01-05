import {createSlice} from '@reduxjs/toolkit';
import {getDataFromLocalStorage} from '../save_and_load_data/SaveAndLoadData';


export const NoteSlice = createSlice({
    name:'note',
    initialState:getDataFromLocalStorage(),
    reducers:{
        
        add_note:(state, action)=>{
            return [...state, action.payload]
        },

        toggle_favorite:(state, action)=>{
            const{id} = action.payload;
            return state.map(item =>item.id===id?{...item, favorite:!item.favorite}:item)
        },

        trash_toggle: (state, action)=>{
            const{id}= action.payload;
            return state.map(item=> item.id===id? {...item, trash:!item.trash}:item);
        },

        delete_note:(state, action)=>{
            const{id}= action.payload;
             return state.filter(item=> item.id !== id);
        },

        edit_note:(state, action)=>{
            const {id,edited_note } = action.payload;
            return state.map(item=>item.id===id?{...item, note:edited_note}:item)
        }
    }
})

export const {add_note, toggle_favorite, trash_toggle, delete_note, edit_note}= NoteSlice.actions;
export default NoteSlice.reducer;
