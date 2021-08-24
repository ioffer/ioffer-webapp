import React,{useState,useEffect} from 'react'
import './edit-profile.scss'
import {useDispatch, useSelector} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { login, selectUser,selectKyc } from '../../redux/reducer/userSlice';
import {AddkycHook} from '../../hooks/useMutationsHooks'
import Loader from '../../components/Loader/loader';
import { useAlert} from "react-alert";
import ImageUpload from '../../components/ImageUpload';


function AddKyc() {
  const history = useHistory();
  const alert=useAlert();
  const dispatch= useDispatch()
  const user= useSelector(selectUser)
  const kyc= useSelector(selectKyc)
    const [loading,setLoading]=useState(false)
    const [editstate, setEditstate ] = useState({
      id:"",
      number: "",
      city:"",
      nationality:"",
      country: "",
      street:"",
      birthDate:"",
      building:"",
      postcode:""
    })
    console.log(user)

    const handleChange = (name, value) => {
        setEditstate({...editstate, [name]: value})
   }
 
   // const [addKyc, { data, loading, error }] = AddkycHook()

  //  useEffect(() => {
  //   if (error) {
  //       alert.error(error.message,{timeout:4000})
  //   }
  //   if (data&&!loading){
  //       alert.success("Profile Updated",{timeout:4000})
  //       history.push('/profile')
  //   }
  // }, [data, loading, error])

   const submitForm=(e)=>{
    e.preventDefault()
    // addKyc({
    //     variables:{
    //         id:user.id,
    //         mobile: editstate.number,
    //         city: editstate.city,
    //         nationality: editstate.nationality,
    //         country: editstate.country,
    //         street: editstate.street,
    //         birthDate: editstate.birthDate,
    //         building: editstate.building,
    //         postalCode: editstate.postcode
    //       }
    // })
    
    console.log(login)
    history.push("/profile-info")
   }
 
    return (
      loading ? <Loader/> :
        <div>
            <div className="edit-heading">
                <h2>Add KYC</h2>
            </div>
            <ImageUpload />
            <div>
         <form className="form-design" onSubmit={submitForm}  >
             <TextField
                  fullWidth
                  autoComplete="mobilenumber"
                  defaultValue="number"
                  type="text"
                  label="Mobile Number"
                  onChange={(e) => handleChange('number', e.target.value)}
                  value={editstate.number}
               />
          
           <TextField
                  fullWidth
                  autoComplete="dateofbirth"
                  type="date"
                  label="Date of Birth"
                  onChange={(e) => handleChange('birthDate', e.target.value)}
                  value={editstate.birthDate}
            />

          <TextField
                fullWidth
                defaultValue="Pakistan"
                autoComplete="nationality"
                type="text"
                label="Nationality"
                onChange={(e) => handleChange('nationality', e.target.value)}
                value={editstate.nationality}
          />
          <TextField
                fullWidth
                defaultValue="44000"
                autoComplete="postalcode"
                type="text"
                label="Postal Code"
                onChange={(e) => handleChange('postcode', e.target.value)}
                value={editstate.postcode}
          />
           <TextField
                fullWidth
                defaultValue="44000"
                autoComplete="country"
                type="text"
                label="Country"
                onChange={(e) => handleChange('country', e.target.value)}
                value={editstate.country}
          />
           <TextField
                fullWidth
                defaultValue=""
                autoComplete="City"
                type="text"
                label="City"
                onChange={(e) => handleChange('city', e.target.value)}
                value={editstate.city}
          />
          <TextField
                fullWidth
                defaultValue=""
                autoComplete="street"
                type="text"
                label="Street"
                onChange={(e) => handleChange('street', e.target.value)}
                value={editstate.street}
          />
           <TextField
                fullWidth
                defaultValue=""
                autoComplete="building"
                type="text"
                label="Building"
                onChange={(e) => handleChange('building', e.target.value)}
                value={editstate.building}
          />

            <button className="profile-button">Update Profile</button>
          </form>

           
        </div>
        </div>
    )
}

export default AddKyc
