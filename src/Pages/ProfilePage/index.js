import React,{useState} from 'react'
import ProfilePageHero from '../../components/ProfilePageHero'
import { login, selectUser } from '../../redux/reducer/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import './profile-page.scss'
import FaceIcon from '@material-ui/icons/Face';
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { EditUserHook } from '../../hooks/useMutationsHooks';
import TextField from '@material-ui/core/TextField';
import {useHistory} from 'react-router-dom'
import { useAlert} from "react-alert";
import Loader from '../../components/Loader/loader';
import {matchObject} from "../../lib/services";

function ProfilePage() {
    const user= useSelector(selectUser)
    const dispatch= useDispatch()
    const history = useHistory();
    const alert=useAlert();
    const [editUser,setEditUser]= useState(user)
   
    const handleChange = (name, value) => {
        setEditUser({...editUser, [name]: value})
    }

    const onSuccess=(data)=>{
        if (data){
            console.log(data)
            alert.success("User Updated",{timeout:4000})
            dispatch(login(editUser))
            history.push('/user_profile')
        }
    }
    const onError=(error)=>{
        alert.error(error.message,{timeout:4000})
    }
    const [updateUser, { loading}] = EditUserHook(onError,onSuccess)
  
    const submitProfile = (e) => {
        e.preventDefault()
        if(JSON.stringify(editUser) === JSON.stringify(user)){
            alert.error("You Did not change",{timeout:1000})
        }else {
            updateUser({
                variables: {
                  avatar:editUser.avatar,
                  fullName: editUser.fullName,
                }
            }).catch(err =>{
                console.log(err)
            })

        }
    }
    return (
        loading ? <Loader/> :
        <div > 
             <ProfilePageHero  avatar={true} editUser={editUser} handleChange={handleChange} user={user} status={false} />
            <div className="top-gap">
            <div className="profile-info">
                 <span><AccountCircleIcon /></span>
                     <div className="profile-text">
                         <p>Full Name</p>
                         <TextField
                                fullWidth
                                className="input-font-style"
                                autoComplete="dateofbirth"
                                type="text"
                                onChange={(e) => handleChange('fullName', e.target.value)}
                                value={editUser.fullName}
                             />
                     </div>
                 </div>
                <div className="profile-info">
                        <span><EmailIcon /></span> 
                          <div className="profile-text">
                              <p>Email</p>
                              <h5>{user.email}</h5>
                          </div>
                 </div>
                 <form autoComplete="off" onSubmit={submitProfile}>
             
                 <div className="profile-info">
                        <span> <FaceIcon /></span>
                          <div className="profile-text">
                              <p>User Name</p>
                              <h5>{user.userName}</h5>
                          </div>
                 </div>
                <div className="profile-button-info">
                <button disabled={matchObject(editUser, user)} className="button">Save</button>
            </div>
                   </form>      
            </div>
           
           
            </div>
    )
}

export default ProfilePage
