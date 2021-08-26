import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import {addkyc, selectKyc,selectUser} from '../../redux/reducer/userSlice';
import {AddKycHook} from '../../hooks/useMutationsHooks'
import Loader from '../../components/Loader/loader';
import { useAlert} from "react-alert";
import './edit-kyc.scss'

function EditKyc() {
    const history = useHistory();
    const alert=useAlert();
    const dispatch= useDispatch()
    const kyc= useSelector(selectKyc)
    const user= useSelector(selectUser)
    const [editState, setEditState ] = useState(kyc)
    const handleChange = (name, value) => {
        setEditState({...editState, [name]: value})
    }
    const onSuccess=(data)=>{
        if (data){
            alert.success("KYC Updated",{timeout:4000})
            dispatch(addkyc(editState))
            history.push('/user_kyc')
        }
    }
    const onError=(error)=>{
        alert.error(error.message,{timeout:4000})
    }
    const [addKyc, { loading }] = AddKycHook(onError,onSuccess)

    const submitForm=(e)=>{
        e.preventDefault()
        if(JSON.stringify(editState) === JSON.stringify(kyc)){
            alert.error("You Did not change",{timeout:1000})
        }else {
            addKyc({
                variables:{
                    id:user.id,
                    mobile: editState.mobile,
                    city: editState.city,
                    nationality: editState.nationality,
                    country: editState.country,
                    street: editState.street,
                    birthDate: editState.birthDate,
                    building: editState.building,
                    postalCode: editState.postalCode
                }
            }).catch(err=>{
                console.log(err)
            })
        }
   }
 
    return (
      loading ? <Loader/> :
        <div>
            <div className="edit-heading">
                <h2>{kyc.country.length?"Update KYC":"Add New KYC"}</h2>
            </div>
            <div>
         <form className="form-design" onSubmit={submitForm}  >
             <TextField
                  fullWidth
                  autoComplete="mobilenumber"
                  type="text"
                  label="Mobile Number"
                  onChange={(e) => handleChange('mobile', e.target.value)}
                  value={editState.mobile}
               />
          
           <TextField
                  fullWidth
                  autoComplete="dateofbirth"
                  type="date"
                  label="Date of Birth"
                  onChange={(e) => handleChange('birthDate', e.target.value)}
                  value={editState.birthDate}
            />

          <TextField
                fullWidth
                autoComplete="nationality"
                type="text"
                label="Nationality"
                onChange={(e) => handleChange('nationality', e.target.value)}
                value={editState.nationality}
          />
          <TextField
                fullWidth
                autoComplete="postalcode"
                type="text"
                label="Postal Code"
                onChange={(e) => handleChange('postalCode', e.target.value)}
                value={editState.postalCode}
          />
           <TextField
                fullWidth
                autoComplete="country"
                type="text"
                label="Country"
                onChange={(e) => handleChange('country', e.target.value)}
                value={editState.country}
          />
           <TextField
                fullWidth
                autoComplete="City"
                type="text"
                label="City"
                onChange={(e) => handleChange('city', e.target.value)}
                value={editState.city}
          />
          <TextField
                fullWidth
                autoComplete="street"
                type="text"
                label="Street"
                onChange={(e) => handleChange('street', e.target.value)}
                value={editState.street}
          />
           <TextField
                fullWidth
                autoComplete="building"
                type="text"
                label="Building"
                onChange={(e) => handleChange('building', e.target.value)}
                value={editState.building}
          />

            <button className="profile-button">Update Profile</button>
          </form>

           
        </div>
        </div>
    )
}

export default EditKyc
