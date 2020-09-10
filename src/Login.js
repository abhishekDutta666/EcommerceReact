import React, {useState} from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import {auth} from "./Firebase";




function Login() {
    const [email, setEmail]=useState('');
const [password, setPassword]=useState('');
const history= useHistory();

const login=event=>{
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((auth)=>{
        history.push("/");
    })
    .catch(e=>alert(e.message));
};

const signup=event=>{
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth)=>{
        history.push("/");
    })
    .catch(e=>alert(e.message));
};
    return (
        <div className="login">
            
            <div className="login_container">
            <Link to="/">
            <img 
                className="login_logo"
                src="https://firebasestorage.googleapis.com/v0/b/ecommercereact-f4a24.appspot.com/o/logo.webp?alt=media&token=bdbcee51-3fc3-4966-841f-37393be30dc0"
                alt="company logo"
            />
            </Link>
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event=>setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event=>setPassword(event.target.value)} type="password"/>
                    <button  onClick={login}>Sign In</button>
                    <p>
                        By Signing in you agree to our terms and conditions.
                    </p>
                    <button onClick={signup}>create an account</button>
                </form>
            </div>
        </div>
    );
}

export default Login
