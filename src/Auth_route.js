import React from 'react'
import { useContext } from 'react';
import { useLocation,Navigate } from 'react-router-dom';
import {AuthContext} from './authContext';

export default function Auth_route({children}) {
    // extract context data from the authentifiction context
    let {user} = useContext(AuthContext);
    let url = useLocation();
    if(user){
        return children    
    }
    return <Navigate to="/" />; 
    
}
