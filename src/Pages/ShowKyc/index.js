import React from 'react'
import './profile-page.scss'
import {Link, Redirect} from 'react-router-dom'
import { selectUser,selectKyc } from '../../redux/reducer/userSlice';
import { useSelector } from 'react-redux';
import {arrayProfile} from "./profileData";
import ProfilePageHero from '../../components/ProfilePageHero';
import ImageUpload from '../../components/ImageUpload';

function ShowKyc() {
    const kyc= useSelector(selectKyc)
    const user= useSelector(selectUser)
    if (!kyc.city){
        return <Redirect to={'/edit_kyc'}/>
    }
    return (
        <div className="static-position">
            <ProfilePageHero  status={true} kyc={kyc} avatar={false} />
            
            <div className="kyc_absoulute">
                <div className="kyc-image-position">
            <ImageUpload cameraIcon={false} />
            </div>
              {
                  arrayProfile.map((result)=>(
                      <div className="profile-info">
                         <span>{result.icon}</span>
                          <div className="profile-text">
                              <p>{result.title}</p>
                              <h5>{result.data ==="email"?user.email: kyc[result.data]}</h5>
                          </div>
                      </div>
                 ))
              }
               <div className="button-position-otp">
              <Link to='/edit_kyc'><button className="button">Edit KYC</button></Link>
              </div>
            </div>
             
        </div>
    )
}

export default ShowKyc
