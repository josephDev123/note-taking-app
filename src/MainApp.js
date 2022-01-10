import React from 'react'
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Login} from './components/Login';
import { Register} from './components/Register';

export default function MainApp() {
    return (
        <BrowserRouter>
        <div>
           <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/home' element={<App/>}/>
            </Routes> 
        </div>
        </BrowserRouter>
    )
}


