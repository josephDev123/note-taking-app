import {createContext, useState, useEffect} from 'react';
import app from './firebase/firebase';
import {onAuthStateChanged, getAuth} from 'firebase/auth';

export const AuthContext = createContext();

export function AuthProvider({children}){
    const auth = getAuth();
    const [user, setUser] = useState();

    // firebase auth observer
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
            }else{
                setUser(null);
            }
        })



    }, []);
   

    const signIn = (loginUser)=>{
        setUser(loginUser);
    }

    const signOut = ()=>{
        setUser(null);
    }

console.log(user);
    return(
        <AuthContext.Provider value={{user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )

}
