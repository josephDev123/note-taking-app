import {createContext, useState, useEffect} from 'react';
import app from './firebase/firebase';
import {onAuthStateChanged, getAuth} from 'firebase/auth';

export const AuthContext = createContext();

export function AuthProvider({children}){
    const auth = getAuth();
    const [user, setUser] = useState();
    const [pending, setPending] = useState(true);

    // firebase auth observer
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
                setPending(false);
            }else{
                setUser(null);
                setPending(false);
            }
        })

    }, [])

    const signIn = (loginUser)=>{
        setUser(loginUser);
    }

    const sign_out = ()=>{
        setUser(null);
    }

    if(pending){
        return (
        <div className='d-flex flex-column justify-content-center align-items-center h-100 w-100'>
            <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        )
    }
    return(
        <AuthContext.Provider value={{user, signIn, sign_out }}>
            {children}
        </AuthContext.Provider>
    )

}
