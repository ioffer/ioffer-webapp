import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/reducer/userSlice';
import Avatar from '@material-ui/core/Avatar';


function ProfilePageHero({status,avatar}) {
    const user= useSelector(selectUser)
    return (
        <div>
             <div  className="profile-banner">
                <div className="font-postion">
                    <h2>{ user ? <p>{user.userName} </p> : !user ?  <p></p> : ""}</h2>
                    <p>{ user ? <p>{user.email} </p> : !user ?  <p></p> : ""}</p>
                </div>
                 {status&&<div>
                     Status
                 </div>}
                 {
                     avatar&&
                     <div className="image-postion">
                         <Avatar className="avatar-size" src={user.avatar} />
                     </div>
                 }

               
             </div>
        </div>
    )
}

export default ProfilePageHero
