import React from "react";
import { Link } from "react-router-dom";
import './Login.css'
import { FaUser } from "react-icons/fa";
import { FaLock , } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Register=()=>{
  
  return(

      <div className="registerbox">
        <form action="">
          <h1>REGISTER</h1>
          <div className="inputbox">
            <input type="Username" placeholder="Username" required></input><FaUser className="icon"/>
          </div>
          <div className="inputbox">
            <input type="Email" placeholder="Email" required></input><MdEmail className="icon"/>
          </div>
          <div className="inputbox">
            <input type="password" placeholder="Password" required></input><FaLock className="icon"/>

          </div>
          <div className="remember-forgot">
            <label><input type="checkbox"></input>I agree to the terms and conditions</label>
          </div>
          <Link to="/home"><button>Register</button></Link>
          <div className="registerlink">
          <br></br><br></br>
            <p> Alrady have an account ? <Link to="/">Login</Link> </p>
          </div>
        </form>
      </div>
  );
};
export default Register;