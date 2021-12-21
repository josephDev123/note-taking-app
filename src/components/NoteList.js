import React, { Fragment } from 'react';
import { useContext } from 'react';
import { MarkdownContext } from '../context/Markdown_context';

export default function NoteList() {
   let {notes} = useContext(MarkdownContext);
   console.log(notes);

        let noteList = notes.map((item ,i) => 
        // col-3 m-2 border border-1 border-secondary p-2
                    <Fragment key={item.id}>
                        <div className="card m-2 border border-1 border-secondary p-2">
                            <div className="card-body">
                                <h5 className="card-title">Note: {item.id.substr(0, 8)}</h5>
                                <p className="card-text">{item.note.substr(0, 25).concat('....')}.</p>
                            </div>
                        </div>
                    </Fragment>   
          )


     return (
         <div>
            {noteList}
         </div>
             
            
     )
}
