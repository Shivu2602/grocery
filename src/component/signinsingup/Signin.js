// Write an "rafce" then automatically  adding the function and export default
// This is a meaning of "rafce" is "React functional component with arrow function and export default"

import React from 'react';
import logoimage from './logo.jpeg';
import "./account.css";
import { NavLink } from 'react-router-dom';//Page linked but without reload the page

const Signin = () => {
  return (
    <section>
      <div className="log_container">
        <div className="log_header">
          <NavLink to="/"><img src={logoimage} alt="Logo" /></NavLink>
        </div>
        <div className="log_form">
          <form action="">
            <h1>Sign In</h1>
            <div className="input_data">
              <label htmlFor="">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="input_data">
              <label htmlFor="">Password</label>
              <input type="password" name="pasword" id="password" />
            </div>
            <button className='signin_btn'>Continue</button>
          </form>
        </div>
        <div className="create_account">
          <p>New Customer</p>
          <NavLink to="/signup"><button>Create Your Account</button></NavLink>
        </div>
      </div>
    </section>
  )
}

export default Signin