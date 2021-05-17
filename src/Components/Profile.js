import React from 'react';
import '../Style/Profile.css';
import HeaderProfile from './HeaderProfile';
import FooterProfile from './FooterProfile';

function Profile() {
    return (
        <div className="profile">
            
                <img className="user-photo" 
                src="https://firebasestorage.googleapis.com/v0/b/today-at-home.appspot.com/o/profile%20picture%2Fionut-comanici-RDcEWH5hSDE-unsplash.jpg?alt=media&token=fe2e36f8-ed28-471b-bbd6-7dbf6c6185a5"/>
                <HeaderProfile/>
                <FooterProfile/>

               
    
        </div>
    )
}

export default Profile
