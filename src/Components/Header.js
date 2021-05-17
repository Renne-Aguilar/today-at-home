import React from 'react';
import '../Style/Header.css';
import FaceIcon from '@material-ui/icons/Face';
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="header">
            <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/today-at-home.appspot.com/o/Today%20At%20Home%20logo.png?alt=media&token=d524cc63-f54b-4417-a44f-73daa276e14d"/>
            <div className="header_right">
                <p>Login</p>
                <Link to="/login">
                <FaceIcon color="secondary"/>
                </Link>
            </div>
        </div>
    )
}

export default Header
