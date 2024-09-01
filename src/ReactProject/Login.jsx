import React from "react";
import './Login.css'
import { FaUser } from "react-icons/fa";
import { FaLock , } from "react-icons/fa";
import {Link } from 'react-router-dom'

const Login=()=>{
  
  return(
      <div className="loginbox">
        <form action="">
          <h1>LOGIN</h1>
          <div className="inputbox">
            <input type="Username" placeholder="Username" required></input><FaUser className="icon"/>

          </div>
          <div className="inputbox">
            <input type="password" placeholder="Password" required></input><FaLock className="icon"/>

          </div>
          <div className="remember-forgot">
            <label><input type="checkbox"></input>Remember me</label>
            <a href="#">Forgot Password?</a>
          </div>
          <Link to="/home"><button>Login</button></Link>
          <div className="registerlink">
            <br></br><br></br>
            <p> Don't have an account ? <Link to="/register"> Register</Link> </p>
          </div>
        </form>
      </div>
  );
};
export default Login;