import React from 'react'
import './footer.css'
import logoimage from './logo.jpeg';

const Footer = () => {
    const year = new Date().getFullYear();
    console.log(year);
    return (
        <footer>
            <div className='footer_container'>
                <div className='footer_details_one'>
                    <h3>get to know US</h3>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Amazon Cares</p>
                </div>
                <div className='footer_details_one'>
                    <h3>get to know US</h3>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Amazon Cares</p>
                </div>
                <div className='footer_details_one'>
                    <h3>get to know US</h3>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Amazon Cares</p>
                </div>
            </div>
            <div className='lastdetails'>
                <img src={logoimage} alt="Logo" />
                <p>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 1996-{year}, Amazon.com, Inc. or its affiliates</p>
            </div>
        </footer>
    )
}

export default Footer