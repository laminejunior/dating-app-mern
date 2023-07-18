import React from 'react';
import './Header.css';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CommentIcon from '@mui/icons-material/Comment';


const Header = () => {
    return (
        <div className="header">
        <IconButton>
            <AccountCircleIcon color='success' fontSize="large" className="header__icon"></AccountCircleIcon>
        </IconButton>
        <img className="header__logo" src="logo192.png" alt="header" />
        <IconButton>
            <CommentIcon color='success' fontSize="large" className="header__icon"></CommentIcon>
        </IconButton>
           

        </div>
    )
    }
    export default Header