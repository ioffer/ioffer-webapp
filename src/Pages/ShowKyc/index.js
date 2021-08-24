import React from 'react'
import './profile-page.scss'
import {Link, Redirect} from 'react-router-dom'
import { selectUser } from '../../redux/reducer/userSlice';
import { useSelector } from 'react-redux';
import {arrayProfile} from "./profileData";
import ProfilePageHero from '../../components/ProfilePageHero';

function ShowKyc() {
    const user= useSelector(selectUser)
    const {kyc}=user
    if (!kyc.city){
        console.log(kyc)
        return <Redirect to={'/edit_kyc'}/>
    }
    return (
        <div>
            <ProfilePageHero status={true} avatar={false} />
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

           <Link to='/edit_kyc'><p className="manintext">Edit KYC</p></Link>
        </div>
    )
}

export default ShowKyc
