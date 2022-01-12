import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    console.log(email,password);
    return (
        <div className='container'>
             <div className='d-flex flex-column justify-conntent-center align-items-center'>
                <h3>Login</h3>
                <img src='login_img/login_img1.png' alt='' width='150px' heigth='150px'/>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e)=>setEmail(e.target.value)} aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} id="exampleInputPassword1"/>
                    </div>
                    <div class="input-group mb-3">
                        <button type="submit" className="btn btn-primary">Login</button>
                        <span class="input-group-text" id="basic-addon1">Not register yet<Link className='ms-2' to='/register'>Register</Link></span> 
                    </div>
                </form>
            </div>
        </div>
    )
}
