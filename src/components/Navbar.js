import React from 'react'
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { MarkdownContext } from '../context/Markdown_context';


export default function Navbar() {
     let {setNotes} = useContext(MarkdownContext);
    const Notes = useSelector(state => state.note);
    function handleNoteClick(){
        setNotes(Notes.filter((item) => item.trash ===false));
    }

    return (
        <div className='col-3 m-2 border border-1 border-secondary p-2'>
            <div className='form-group'>
                <button className='btn btn-primary btn-sm me-2'>+</button>
                <span className='text-white'>New Note</span>
            </div>
           
          
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" onClick={handleNoteClick}>Notes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Favourites</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Trash</a>
                    </li>
                </ul>
            
        </div>
       
    )
}
