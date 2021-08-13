import React from 'react'
import './profile-page.scss'
import Avatar from '@material-ui/core/Avatar';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import CallIcon from '@material-ui/icons/Call';
import EventIcon from '@material-ui/icons/Event';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import EmailIcon from '@material-ui/icons/Email';
import PostAddIcon from '@material-ui/icons/PostAdd';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import {Link} from 'react-router-dom'
import { selectUser } from '../../redux/reducer/userSlice';
import { useSelector } from 'react-redux';

function ProfilePage() {
    const user= useSelector(selectUser)
    const arrayprofile =[
        {
            icon: <AddLocationIcon /> ,
            title: "Location" ,
            data: "Islamabad",
        },
        {
            icon: <CallIcon /> ,
            title: "Mobile" ,
           data: "+923441532505",
        },
        {
            icon: <EventIcon /> ,
            title: "Date of Birth" ,
            data: "29 June 1999",
        },
        {
            icon: <MyLocationIcon /> ,
            title: "Nationality" ,
            data: "Pakistan",
        },
        {
            icon: <PostAddIcon /> ,
            title: "Postal Code" ,
            data: "44-000",
        },
        {
            icon: <EmailIcon /> ,
            title: "Email" ,
            data: "mohsinwaheed90@gmail.com",
        },
        {
            icon: <LocationCityIcon /> ,
            title: "City" ,
            data: "Islamabad",
        },
        {
            icon: <AddLocationIcon /> ,
            title: "Address" ,
            data: "House-37-B street No1 Rawalpindi",
        },
    ];
    return (
        
        <div>
            <div  className="profile-banner">
            <div className="font-postion">
            <h2>{ user ? <p>{user.userName} </p> : !user ?  <p></p> : ""}</h2>
            <p>{ user ? <p>{user.email} </p> : !user ?  <p></p> : ""}</p>
            </div>
            <div className="image-postion">
            <Avatar className="avatar-size" src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </div>
            </div>

            <div>
              {
                 arrayprofile.map((kyc)=>(
                      <div className="profile-info">
                      <span>{kyc.icon}</span>
                      <div className="profile-text">
                      
                      <p>{kyc.title}</p>
                      <h3>{kyc.data}</h3>
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
