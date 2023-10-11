// rafce

import React from 'react';
import './navbar.css';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import logoimage from './logo.jpeg';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { NavLink } from 'react-router-dom';//Page linked but without reloading the page

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header>
            <nav>
                <div className="left">
                    <div className="navlogo">
                        <NavLink to="/"><img src={logoimage} alt="Logo" /></NavLink>
                    </div>
                    <h1 className='storename'>Bajrang Makhana Foodstuff</h1>
                    {/* <div className="nav_searchbar">
            <input type="text" name="" id="" />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
          </div> */}
                </div>
                <div className="hamburger-menu">
                    <Button
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}                        
                    >
                       Menu
                    </Button>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    ></Menu>
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
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >

                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}><NavLink to="/login">signin</NavLink></MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </header>
    );
};

export default Navbar;
