import React from 'react';
import {useState, useContext} from 'react';
import MDEditor from '@uiw/react-md-editor';
import { MarkdownContext } from '../context/Markdown_context';
import { add_note } from '../redux/NoteSlice';
import { useDispatch } from 'react-redux';


export default function Markdown() {
    const dispatch = useDispatch();
    const {value, setValue} = useContext(MarkdownContext);

    return (
        <div className='col-5 m-2 border border-1 border-secondary p-2'>
            <div className='text-dark bg-white'>
            <MDEditor value={value} onChange={setValue} />

            <MDEditor.Markdown source={value} />
            </div>
            <button type='submit' className='btn btn-primary mt-2'>Submit Note</button>
        </div>
    )
}
