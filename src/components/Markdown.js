import React from 'react';
import {useState, useContext} from 'react';
import MDEditor from '@uiw/react-md-editor';
import { MarkdownContext } from '../context/Markdown_context';
import { add_note, edit_note } from '../redux/NoteSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';


export default function Markdown() {
    const dispatch = useDispatch();
    const {value, setValue, read, edit, setEdit} = useContext(MarkdownContext);

    // handle the submission of note
    function handleSubmitClick(){
        if(!value){
            console.log('empty')
        }else{
            dispatch(add_note({
                id:uuidv4(),
                note:value,
                favorite:false,
                trash:false
            }))
            setValue('');
        }
    }


    function handleEditClick(){
        dispatch(edit_note({id:edit.id, edited_note:value}));
        setEdit({bol:false});
        setValue('')
        console.log(edit.id, value);
    }

    return (
        <div className='m-2 flex-grow-1 border border-1 border-secondary p-2'>
            <div className='text-dark bg-white'>
            <MDEditor value={value} onChange={setValue} />

            <MDEditor.Markdown source={value} />
            </div>
           {!read?<button type='submit' className='btn btn-primary mt-2 me-2' onClick ={handleSubmitClick}>Submit Note</button>: (
          
            <div>
                <button type='button' className='btn btn-primary mt-2'>Read Note</button>
                <br/>
                {/* <span className='alert alert-warning fs-6'></span> */}
                <div id="emailHelp" className="form-text text-warning">Note: click on <span className='text-primary'>New note</span> button on the top to add new note.</div>
            </div>

           )} 
           
           {edit.bol?<button type='submit' className='btn btn-primary mt-2' onClick ={handleEditClick}>Edit Note</button>:''};
        </div>
    )
}
