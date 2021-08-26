import React from 'react'
import './profile-page.scss'
import {Link, Redirect} from 'react-router-dom'
import { selectUser,selectKyc } from '../../redux/reducer/userSlice';
import { useSelector } from 'react-redux';
import {arrayProfile} from "./profileData";
import ProfilePageHero from '../../components/ProfilePageHero';

function ShowKyc() {
    const kyc= useSelector(selectKyc)
    const user= useSelector(selectUser)
    if (!kyc.city){
        return <Redirect to={'/edit_kyc'}/>
    }
    return (
        <div>
            <ProfilePageHero status={true} kyc={kyc} avatar={false} />
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
