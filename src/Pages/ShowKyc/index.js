import React from 'react'
import './profile-page.scss'
import {Link} from 'react-router-dom'
import { selectUser } from '../../redux/reducer/userSlice';
import { useSelector } from 'react-redux';
import {arrayProfile} from "./profileData";
import ProfilePageHero from '../../components/ProfilePageHero';

function ShowKyc() {
    const user= useSelector(selectUser)
    const {kyc}=user
    console.log(kyc)
    return (
        
        <div>
            <ProfilePageHero />

            
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

           <Link to='/editkyc'><p className="manintext">Edit KYC</p></Link>
        </div>
    )
}

export default ShowKyc
