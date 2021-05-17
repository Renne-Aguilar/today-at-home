import React from 'react';
import '../Style/HeaderProfile.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from "react-router-dom";
import 'fontsource-roboto';

function HeaderProfile() {
    var fonts = require('bootstrap-fonts-complete');
    return (
        <div className="header-profile">
            <div className="profile-info">
                <Link to="/">
                  <ArrowBackIosIcon/>
                </Link>
                <h2 class="display-3">Ruth Aguilar</h2>
                <p>Love photography</p>
            </div>

            <div className="footer-profile">
              <button>Follow</button>
              <button>Message</button>
              <p>256 Followers</p>
              <p>45 Following</p>
            </div>
        </div>
    )
}

export default HeaderProfile
