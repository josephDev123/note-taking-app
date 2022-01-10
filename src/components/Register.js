import React from 'react'
import {Link} from 'react-router-dom'

export function Register() {
    return (
        <div className='container'>
            <div className='d-flex flex-column justify-conntent-center align-items-center'>
               <h3>Register</h3>
               <img src='register_img/register_img1.png' alt='' width='150px' heigth='150px'/>
                <form >
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
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
