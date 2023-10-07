// Write an "rafce" then automatically  adding the function and export default
// This is a meaning of "rafce" is "React functional component with arrow function and export default"

import React from 'react';
import './navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import logoimage from './logo.jpeg';
import { NavLink } from 'react-router-dom';//Page linked but without reloading the page

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="left">
                    <div className="navlogo">
                        <NavLink to="/"><img src={logoimage} alt="Logo" /></NavLink>
                    </div>
                    <h1>Bajrang Makhana Foodstuff</h1>
                    {/* <div className="nav_searchbar">
                        <input type="text" name="" id="" />
                        <div className="search_icon">
                            <SearchIcon id="search" />
                        </div>
                    </div> */}
                </div>
                <div className="right">
                    <div className="nav_btn">
                        <NavLink to="/login ">signin</NavLink>
                    </div>
                    <div className="cart_btn">
                        <NavLink to="/cart">
                            <Badge badgeContent={0} color="primary">
                                <ShoppingCartIcon id="icon" />
                            </Badge>
                        </NavLink>
                        <p>Buy Now</p>
                    </div>
                    <Avatar className='avtar' />
                </div>
            </nav>
        </header>
    )
}

export default Navbar;