import React from 'react'
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Login} from './components/Login';
import { Register} from './components/Register';
import {AuthProvider} from './authContext';
import Auth_route from './Auth_route';

export default function MainApp() {
    return (
        <AuthProvider>
            <BrowserRouter>
            <div>
            <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/home'
                     element={
                         <Auth_route>
                            <App/>
                         </Auth_route>
                     
                     }
                     />
                </Routes> 
            </div>
            </BrowserRouter>
        </AuthProvider>
    )
}


