import React,{useState} from 'react'
import './edit-profile.scss'
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import {gql, useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom';

const addkyc= gql`
mutation ($mobile: String!, $nationality: String!, $city: String!, $country:String!, $avatar: Upload!){
    addKyc(
      id: "60d9d2b456608723e834c284",
      mobile: $mobile,
      nationality:  $nationality,
      city: $city,
      country: $country
      avatar: $avatar
    ){
      id
      userName
      email
      kyc{
        country
        kycStatus
      }
    }
  }
`
;

function EditProfile() {
  const history = useHistory();
    const [editstate, setEditstate ] = useState({
        city: "",
        number: "",
        dob: "",
        nationality:"",
        postcode: "",
        address: "",
        country: "",
    })
    const [pic,setPic]=useState(null)
    
  

    const handelChange = (name, value) => {
        setEditstate({...editstate, [name]: value})
   }
   const handleimage= e =>{
       setPic(URL.createObjectURL(e.target.files[0]))
   }
   const [addKyc, { data, loading, error }] = useMutation(addkyc);
   if (loading) return 'Submitting...';
   if (error) return `Submission error! ${error.message}`;
   const submitForm=(e)=>{
    e.preventDefault()
    addKyc({
        variables:{
            mobile: editstate.number,
            city: editstate.city,
            nationality: editstate.nationality,
            country: editstate.country,
          }
    })
    history.push("/profile")
   }
    return (
        <div>
            <div className="edit-heading">
            <h2>Edit Profile</h2>
            </div>

            <div>
            <div >
            <input className="avatar-icon" type="file" onChange={handleimage} />
           <div className="profile-pic-position">
           <img className="profile-pic-size" src={pic} />
           </div>
            </div>
            <form className="form-design" onSubmit={submitForm}>
            <TextField
            fullWidth
            type="text"
            defaultValue="Islamabad"
            label="Location"
             onChange={(e) => handelChange('city', e.target.value)}
            value={editstate.city}
          />
           <TextField
           fullWidth
            autoComplete="mobilenumber"
            defaultValue="03441532505"
            type="text"
            label="Mobile Number"
            onChange={(e) => handelChange('number', e.target.value)}
            value={editstate.number}
          />
          
        <TextField
        fullWidth
             defaultValue="29-june-1999"
            autoComplete="dateofbirth"
            type="date"
            label="Date of Birth"
            onChange={(e) => handelChange('dob', e.target.value)}
            value={editstate.dob}
          />

          <TextField
           fullWidth
           defaultValue="Pakistan"
            autoComplete="nationality"
            type="text"
            label="Nationality"
            onChange={(e) => handelChange('nationality', e.target.value)}
            value={editstate.nationality}
          />
          <TextField
           fullWidth
           defaultValue="44000"
            autoComplete="postalcode"
            type="text"
            label="Postal Code"
            onChange={(e) => handelChange('postcode', e.target.value)}
            value={editstate.postcode}
          />
           <TextField
           fullWidth
           defaultValue="44000"
            autoComplete="country"
            type="text"
            label="Country"
            onChange={(e) => handelChange('country', e.target.value)}
            value={editstate.country}
          />
           <TextField
           fullWidth
           defaultValue="House-37-B street No1 Rawalpindi"
            autoComplete="current-password"
            type="text"
            label="Address"
            onChange={(e) => handelChange('address', e.target.value)}
            value={editstate.address}
          />

          <button className="profile-button">Update Profile</button>
          </form>

           
        </div>
        </div>
    )
}

export default EditProfile
