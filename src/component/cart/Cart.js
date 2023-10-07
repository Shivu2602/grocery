import React, {useState, onInput} from 'react'
import { NavLink } from "react-router-dom";
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import SubNav from '../subnavbar/SubNav';
import './cart.css'
const Cart = () => {
    const [value, setValue] = useState('');
  
    const onInput = (event) => {
      setValue(event.target.value.replace(/[^0-9]/g, ''));
    }

  return (
    <>
    <Navbar />
    <SubNav />
    <section>
        <div className="product_container">
          <div className="product_form">
            {/* onSubmit={handleSubmit} */}
            <form>  
              <h1>Enter Details For Buying Product</h1>
              <div className="input_data">
                <label htmlFor="">Your Name</label>
                <input type="text" name="fname" id="fname" required />
              </div>

              <div className="input_data">
                <label htmlFor="">Email</label>
                <input type="email" name="email" id="email" required />
              </div>

              <div className="input_data">
                <label htmlFor="">Mobile Number</label>
                <input type="text" name="mobile" id="mobile" onInput={onInput} pattern="[0-9]+" required />
              </div>

              <div className="input_data">
                <label htmlFor="">Address</label><br />
                {/* <input type="text-area" name="addresss"  id="addresss" required /> */}
                <textarea name="address" id="" cols="50" ></textarea>
              </div>

              <div className="input_data">
                <label htmlFor="">Products</label><br />
                {/* <input type="products" name="products" id="products" required /> */}
                <textarea name="products" cols="50"></textarea>
                {/* <span>{validatePasswords()}</span> */}
              </div>
              <button className='signin_btn' type="submit">Buy Product</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Cart