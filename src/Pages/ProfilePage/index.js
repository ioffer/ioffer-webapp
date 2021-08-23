import React from 'react'
import './profile-page.scss'
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom'
import { selectUser } from '../../redux/reducer/userSlice';
import { useSelector } from 'react-redux';
import {arrayProfile} from "./profileData";

function ProfilePage() {
    const user= useSelector(selectUser)
    const {kyc}=user
    console.log(kyc)
    return (
        
        <div>
            <div  className="profile-banner">
            <div className="font-postion">
            <h2>{ user ? <p>{user.userName} </p> : !user ?  <p></p> : ""}</h2>
            <p>{ user ? <p>{user.email} </p> : !user ?  <p></p> : ""}</p>
            </div>
            <div className="image-postion">
            <Avatar className="avatar-size" src={user.avatar} />
            </div>
            </div>

            <div>
              {
                  arrayProfile.map((result)=>(
                      <div className="profile-info">
                         <span>{result.icon}</span>
                          <div className="profile-text">
                              <p>{result.title}</p>
                              <h3>{result.data ==="email"?user.email: kyc[result.data]}</h3>
                          </div>
                      </div>
                 ))
              }
            </div>

           <Link to='/editprofile'><p className="manintext">Edit Profile</p></Link> 
        </div>
    )
}

export default ProfilePage
