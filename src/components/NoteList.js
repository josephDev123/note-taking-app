import React, { Fragment } from 'react';
import { useContext, useEffect } from 'react';
import { MarkdownContext } from '../context/Markdown_context';
import { useDispatch } from 'react-redux';
import {toggle_favorite, trash_toggle, delete_note} from '../redux/NoteSlice';

export default function NoteList() {
    let dispatch = useDispatch();
   let {notes} = useContext(MarkdownContext);
     let noteList = notes.map(item => 
                        <Fragment key={item.id}>
                            <div className="card m-2 border border-1 border-secondary p-2 position-relative">
                                <div className="card-body">
                                    <h5 className="card-title">Note: {item.id.substr(0, 8)}</h5>
                                    <p className="card-text">{item.note.substr(0, 25).concat('....')}.</p>
                                </div>
                                <div className='position-absolute d-flex justify-content-between top-0 end-0'>

                                    <span className='me-3 icon'><i style={item.favorite?{color:"yellow" }:{}} className="far fa-star fa-xs" onClick={()=>dispatch(toggle_favorite({id:item.id}))}></i></span>

                                    <span className='me-3 icon'><i className="fas fa-trash fa-xs" onClick={()=>dispatch(trash_toggle({id:item.id}))}></i></span>

                                    <span style={{ fontSize:'7px' }} className='text-danger fs-6 me-2 fw-bold icon' onClick={()=>dispatch(delete_note({id:item.id}))}>x</span>
                                </div>
                            </div>
                        </Fragment> 
                        )

            return (
                <div className='mt-2'>
                    <h6 className='text-white text-center'>Notes, Favourite, trash</h6>
                    {noteList}
                </div>       
            )
}





 