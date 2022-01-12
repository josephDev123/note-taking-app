import React from 'react';
import { useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import {app} from '../firebase/firebase';
import {createUserWithEmailAndPassword, getAuth} from  'firebase/auth';


export function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const email_dom = useRef();
    const password_dom = useRef();
    
    const db= getAuth();
    function handleSubmitRegister(e){
        e.preventDefault();
        createUserWithEmailAndPassword(db, email,password).then(userSnaphot=>{
            console.log(userSnaphot.user)
            email_dom.current.value=''
            password_dom.current.value=''
        }).catch(e=>console.log(e.message))
    }

    return (
        <div className='container'>
            <div className='d-flex flex-column justify-conntent-center align-items-center'>
               <h3>Register</h3>
               <img src='register_img/register_img1.png' alt='' width='150px' heigth='150px'/>
                <form onSubmit={handleSubmitRegister}>
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
