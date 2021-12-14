import React from 'react';
import {useState} from 'react';
import MDEditor from '@uiw/react-md-editor';

export default function Markdown() {
    const [value, setValue] = React.useState("**Hello world!!!**");
    return (
        <div className='col-5 m-2 border border-1 border-secondary p-2'>
            <div className='text-dark bg-white'>
            <MDEditor value={value} onChange={setValue} />

            <MDEditor.Markdown source={value} />
            </div>
        </div>
    )
}
