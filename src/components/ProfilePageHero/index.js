import React from 'react'
import './profile-image-hero.scss'
import ImageUpload from '../ImageUpload';

function ProfilePageHero({status,avatar,user,kyc,handleChange,editUser}) {
    return (
        <div>
             <div  className="profile-banner">
                <div className="font-postion"> 
                  <h2> User profile</h2>
                </div>
                 {status&&<div className="status-updaing">
                     <h4 className="font-color">{kyc.kycStatus}</h4>
                 </div>}
                 {
                     avatar&&
                     <div className="image-upload">
                        <ImageUpload editUser={editUser} handleChange={handleChange} avatarUrl={user.avatar} />
                     </div>
                 }
               
             </div>
           
           
        </div>
    )
}

export default ProfilePageHero
