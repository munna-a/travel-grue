import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Logo.png';
import './logNav.css'
import SearchIcon from '@material-ui/icons/Search';
import { Input, InputAdornment } from '@material-ui/core';
import { UserContext } from '../../App';
import { handleSignOut } from '../Login/LoginManagement';

const LogNav = () => {
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    console.log(loggedInUser.email);
    const logOut = () => {
        handleSignOut();
        window.location.reload();
    }
    return (
        <div className='d-flex flex-row justify-content-center nav-main'>
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <input className='search-bar' type="text" placeholder='Search your Destination'/>
            <ul className='d-flex flex-row justify-content-center nav-list'>
            <li><Link className='nav-item' to="/">Home</Link></li>
                <li><Link className='nav-item' to="/news">News</Link></li>
                <li><Link className='nav-item' to="/destination">Destination</Link></li>
                <li><Link className='nav-item' to="/blog">Blog</Link></li>
                <li><Link className='nav-item' to="/contact">Contact</Link></li>
                {
                        loggedInUser.email ? <p className='btn btn-warning' onClick={logOut}>Log Out</p> : <p><Link className='btn btn-warning' to="/login">Login</Link></p>
                }
                {
                    loggedInUser.email ? <p><Link className='nav-item btn btn-primary ml-3'>{loggedInUser.name}</Link></p> : <p></p>
                }
            </ul>
        </div>
    );
};

export default LogNav;