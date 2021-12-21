import React from 'react'
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { MarkdownContext } from '../context/Markdown_context';


export default function Navbar() {
     let {setNotes} = useContext(MarkdownContext);
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
                        <a className="nav-link" onClick={handleFavouriteClick}>Favourites</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={handleTrashClick}>Trash</a>
                    </li>
                </ul>
            
        </div>
       
    )
}
