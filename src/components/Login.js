import React from 'react'
import { useState, useRef, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword, getAuth,setPersistence,browserLocalPersistence   } from 'firebase/auth';
import {AuthContext} from '../authContext';

export function Login() {
    const redirect = useNavigate();
    // extract 'user' auth from authentification context
    let {signIn, user} = useContext(AuthContext);
    const auth= getAuth();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const email_dom = useRef();
    const password_dom = useRef();
    const error_message_dom = useRef();
    
    function handleLoginSubmit(e){
        e.preventDefault();
        email_dom.current.value='';
        password_dom.current.value='';
        const auth = getAuth();

setPersistence(auth, browserLocalPersistence )

        signInWithEmailAndPassword(auth, email, password).then((userSnapShot)=>{
            if(userSnapShot){
                signIn(userSnapShot.user)
                // setEmail('');
                // setPassword('');
                return redirect('/home')
               
            }
           return '';
        }).catch(e=>{
            error_message_dom.current.textContent= e.code;
            error_message_dom.current.style.color='red'
        })
        
    }


    return (
        <div className='container'>
             <div className='d-flex flex-column justify-conntent-center align-items-center'>
                <h3>Login</h3>
                <img src='login_img/login_img1.png' alt='' width='150px' heigth='150px'/>
                <form onSubmit={handleLoginSubmit}>
                <div className='text-center' ref={error_message_dom}></div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={email} id="exampleInputEmail1" ref={email_dom} onChange={(e)=>setEmail(e.target.value)} aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" value={password} className="form-control" ref={password_dom} onChange={(e)=>setPassword(e.target.value)} id="exampleInputPassword1"/>
                    </div>
                    <div className="input-group mb-3">
                        <button type="submit" className="btn btn-primary">Login</button>
                        <span className="input-group-text" id="basic-addon1">Not register yet<Link className='ms-2' to='/register'>Register</Link></span> 
                    </div>
                </form>
            </div>
        </div>
    )
}
