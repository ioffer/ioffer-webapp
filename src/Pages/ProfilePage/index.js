import React from 'react'
import ProfilePageHero from '../../components/ProfilePageHero'
import { selectUser } from '../../redux/reducer/userSlice';
import { useSelector } from 'react-redux';
import './profile-page.scss'
import FaceIcon from '@material-ui/icons/Face';
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function ProfilePage() {
    const user= useSelector(selectUser)
    const submitProfile=(e)=>{
        e.preventDefault();
    }
    return (
        <div>
            <ProfilePageHero avatar={true} status={false} />
            <div>
                <div className="profile-info">
                         <EmailIcon />
                          <div className="profile-text">
                              <p>Email</p>
                              <h3>{user.email}</h3>
                          </div>
                 </div>
                <div className="profile-info">
                         <AccountCircleIcon />
                          <div className="profile-text">
                              <p>User Name</p>
                              <h3>{user.userName}</h3>
                          </div>
                 </div>
                 <div className="profile-info">
                         <FaceIcon />
                          <div className="profile-text">
                              <p>Full Name</p>
                              <h3>{user.fullName}</h3>
                          </div>
                </div>
                         
            </div>
            <div className="profile-button-info">
                <button type="submit" onClick={submitProfile} className="button">Save</button>
            </div>
            
            </div>
    )
}

export default ProfilePage
