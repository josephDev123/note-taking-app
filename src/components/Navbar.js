import React from 'react'

export default function Navbar() {
    return (
        <div className='col-3 m-2 border border-1 border-secondary p-2'>
            <div className='form-group'>
                <button className='btn btn-primary btn-sm me-2'>+</button>
                <span className='text-white'>New Note</span>
            </div>
           
          
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Notes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Favourites</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Trash</a>
                    </li>
                </ul>
            
        </div>
       
    )
}
