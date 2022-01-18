import React from 'react';
import { useState, useRef } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {app} from '../firebase/firebase';
import {createUserWithEmailAndPassword, getAuth} from  'firebase/auth';


export function Register() {
    const redirect = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const email_dom = useRef();
    const password_dom = useRef();
    const error_message_dom = useRef();
    
    const db= getAuth();
    function handleSubmitRegister(e){
        e.preventDefault();
        createUserWithEmailAndPassword(db, email,password).then(userSnaphot=>{
            email_dom.current.value=''
            password_dom.current.value=''
            redirect('/');
        }).catch(e=>{
            error_message_dom.current.textContent= e.code
        })
    }

    return (
        <div className='container'>
            <div className='d-flex flex-column justify-conntent-center align-items-center'>
               <img src='register_img/register_img1.png' alt='' width='150px' heigth='150px'/>
                <form onSubmit={handleSubmitRegister}>
                   <div className='text-center' ref={error_message_dom}></div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" ref={email_dom} className="form-control" onChange={(e)=>setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password"  ref={password_dom} className="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <div class="input-group mb-3">
                        <button type="submit" className="btn btn-primary">Register</button>
                        <span class="input-group-text" id="basic-addon1">Have an account<Link className='ms-2' to='/'>Login</Link></span> 
                    </div>
                </form>    
            </div>
        </div>
    )
}
