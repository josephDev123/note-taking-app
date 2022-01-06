import React from 'react'
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { MarkdownContext } from '../context/Markdown_context';


export default function Navbar() {
     let {setNotes, setValue, setRead} = useContext(MarkdownContext);
    const Notes = useSelector(state => state.note);
    
    // function that fire when the NOTE button is clicked
    function handleNoteClick(){
        setNotes(Notes.filter((item) => item.trash ===false));
    }

     // function that fire when the FAVOURITE button is clicked
     function handleFavouriteClick(){
        setNotes(Notes.filter((item) => item.favorite ===true));
    }

      // function that fire when the TRASH button is clicked
      function handleTrashClick(){
        setNotes(Notes.filter((item) => item.trash ===true));
    }

    function handleClickNewNote(){
        setRead(false);
        setValue('hello world');
    }

    return (
        <div className='m-2 flex-grow-1 border border-1 bg-white shadow-sm' id='navbar'>

            <div className='form-group p-2' >
                <button className='btn btn-primary btn-sm me-2' onClick={handleClickNewNote}>+</button>
                <span className='text-dark'>New Note</span><hr/>
            </div>
           
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" onClick={handleNoteClick}>Notes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={handleFavouriteClick}>Favourites</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={handleTrashClick}>Trash</a>
                </li>
            </ul>
            <hr/>
        </div>
       
    )
}
