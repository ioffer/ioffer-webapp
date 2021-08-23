import React,{useState,useEffect} from 'react'
import './edit-profile.scss'
import {useDispatch, useSelector} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { login, selectUser } from '../../redux/reducer/userSlice';
import {AddkycHook,ImageUploadHook} from '../../hooks/useMutationsHooks'


function EditProfile() {
  const history = useHistory();
  const dispatch= useDispatch()
  const user= useSelector(selectUser)
    const [editstate, setEditstate ] = useState(user.kyc)
    console.log(user)
    const [file,setFile]=useState([])
    const [logoPath,setLogoPath]=useState(null)
    const handleChange = (name, value) => {
        setEditstate({...editstate, [name]: value})
   }
   const [imageUploader]=ImageUploadHook({
    onCompleted: (data)=> console.log(data)
   })
    
   const handleImage= e =>{
    setFile(e.target.files[0])
    setLogoPath(URL.createObjectURL(e.target.files[0]))
    imageUploader({ variables: { file :e.target.files[0] } });
   }

   const [addKyc, { data, loading, error }] = AddkycHook()
  //  if (loading) return 'Submitting...';
  //  if (error) return `Submission error! ${error.message}`;
//   useEffect(() => {
//     if (error) {
//         alert.error(error.message,{timeout:4000})
//     }
//     if (data&&!loading){
//         alert.success("Profile Updated",{timeout:4000})
//         history.push('/profile')
//     }
// }, [data, loading, error])
   const submitForm=(e)=>{
    e.preventDefault();
    let dummyObject=user.kyc
       console.log(editstate,dummyObject)


    // addKyc({
    //     variables:{
    //         id:user.id,
    //         mobile: editstate.number,
    //         city: editstate.city,
    //         nationality: editstate.nationality,
    //         country: editstate.country,
    //         street: editstate.street,
    //         birthDate: editstate.dob,
    //         building: editstate.building,
    //         postalCode: editstate.postcode
    //       }
    // })
    // dispatch(login({
    //   variables:{
    //     mobile: editstate.number,
    //     city: editstate.city,
    //     nationality: editstate.nationality,
    //     country: editstate.country,
    //     street: editstate.street,
    //     birthDate: editstate.dob,
    //     building: editstate.building,
    //     postalCode: editstate.postcode
    //   }
    // }))

    // history.push("/profile")
   }
 
    return (
        <div>
            <div className="edit-heading">
                <h2>Update KYC</h2>
            </div>
            <div>
                <div >
                    <input className="avatar-icon" type="file" onChange={handleImage} />
                    <div className="profile-pic-position">
                        <img className="profile-pic-size" src={logoPath} />
                    </div>
                </div>
                <form className="form-design" onSubmit={submitForm}  >
                    <TextField
                        fullWidth
                        autoComplete="mobilenumber"
                        defaultValue="number"
                        type="text"
                        label="Mobile Number"
                        onChange={(e) => handleChange('mobile', e.target.value)}
                        value={editstate.mobile}
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
                    onChange={(e) => handleChange('postalCode', e.target.value)}
                    value={editstate.postalCode}
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

export default EditProfile
