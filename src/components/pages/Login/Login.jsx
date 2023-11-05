import { Link, useNavigate } from "react-router-dom";

import { FcGoogle } from 'react-icons/fc';
import {  useContext, useState } from "react";

import { Toaster, toast } from "react-hot-toast";
import Navbar from "../../Shared/Navbar/Navbar";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
    const { signIn, googleSignIn} = useContext(AuthContext);
    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        setLoginError(' ');
        
        signIn(email, password)
        .then(result=>{
          console.log(result.user);
          navigate(location?.state? location.state: '/')
          if(result.user){
             toast.success('Login has been successfully')
          }
        })
        .catch(error=>{
          console.error(error);
          setLoginError('Invalid email or password')
        })
    }
    const handleGoogleSignIn = () =>{
       googleSignIn()
       .then(result=>{
        console.log(result.user)
       })
       .catch(error=> console.error(error))
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="card flex-shrink-0 w-full max-w-sm my-10 shadow-2xl flex mx-auto bg-base-100">
                <h2 className="p-5 text-2xl font-bold">Sign In Now</h2>
      <form className="card-body" onSubmit={handleLogin}>
        {
          loginError && <p className="text-red-500">{loginError}</p>
        }
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-900 text-white">Log In</button>
        </div>
        <p className="mt-2">Do not have an account? <Link className="text-blue-500 underline ml-2" to='/signup'>Sign Up</Link></p>
        <p><button onClick={handleGoogleSignIn} className="ml-1 flex items-center text-blue-500 underline"><FcGoogle></FcGoogle>Login With Google</button></p>
      </form>
    </div>
    <Toaster></Toaster>
        </div>
    );
};

export default Login;
