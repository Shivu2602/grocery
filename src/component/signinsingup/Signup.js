// Write an "rafce" then automatically  adding the function and export default
// This is a meaning of "rafce" is "React functional component with arrow function and export default"

import React, { useState } from "react";
import logoimage from './logo.jpeg'
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the password and confirm password.
    if (password !== confirmPassword) {
      // Display an error message.
      alert('Password and confirm password do not match.');
      return;
    }
    else{
      alert("You have successfully created your account.");
      return;
    }
    // Submit the form to the server.
    // ...
  };

  const [value, setValue] = useState('');
  
  const onInput = (event) => {
    setValue(event.target.value.replace(/[^0-9]/g, ''));
  }


  return (
    <>
      <section>
        <div className="log_container">
          <div className="log_header">
            <NavLink to="/"><img src={logoimage} alt="Logo" /></NavLink>
          </div>
          <div className="log_form">
            <form onSubmit={handleSubmit}>
              <h1>Sign In</h1>
              <div className="input_data">
                <label htmlFor="">Your Name</label>
                <input type="text" name="fname" id="fname" required />
              </div>

              <div className="input_data">
                <label htmlFor="">Email</label>
                <input type="email" name="email" id="email" required />
              </div>

              <div className="input_data">
                <label htmlFor="">Mobile</label>
                <input type="text" name="mobile" id="mobile" onInput={onInput} pattern="[0-9]+" required />
              </div>

              <div className="input_data">
                <label htmlFor="">Password</label>
                <input type="password" name="password"  id="password" onChange={(event) => setPassword(event.target.value)} required />
              </div>

              <div className="input_data">
                <label htmlFor="">Confirm Password</label>
                <input type="password" name="cpassword" id="cpassword" onChange={(event) => setConfirmPassword(event.target.value)} required />
                {/* <span>{validatePasswords()}</span> */}
              </div>
              <button className='signin_btn' type="submit">Continue</button>
              <div className="signin_info">
                <p>Already have an account?</p>
                <NavLink to="/login">Signin</NavLink>
              </div>
            </form>
          </div>
        </div>
      </section>

      
    </>
  )
};

export default Signup;