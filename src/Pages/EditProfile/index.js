import React,{useState} from 'react'
import './edit-profile.scss'
import {useDispatch, useSelector} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import {gql, useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom';
import { login, selectUser } from '../../redux/reducer/userSlice';


const addkyc= gql`
mutation ($id: String!,$mobile: String!, $nationality: String!, $city: String!, $birthDate:String!, $postalCode: String!,$country:String!,$building: String!,$street: String!){
    addKyc(
      id: $id,
      mobile: $mobile,
      nationality:  $nationality,
      city: $city,
      country: $country
      street: $street
      building: $building
      birthDate: $birthDate
      postalCode: $postalCode
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
const imageUpload =gql `
mutation( $file: Upload!) {
  imageUploader(file: $file)
}
`

function EditProfile() {
  const history = useHistory();
  const dispatch= useDispatch()
  const user= useSelector(selectUser)
    const [editstate, setEditstate ] = useState({
        city: "",
        number: "",
        dob: "",
        nationality:"",
        postcode: "",
        country: "",
        street: "",
        building:""
    })

    const [file,setFile]=useState([])
    const [logoPath,setLogoPath]=useState(null)
    const handelChange = (name, value) => {
        setEditstate({...editstate, [name]: value})
   }
   const [imageUploader]=useMutation(imageUpload,{
    onCompleted: (data)=> console.log(data)
  })
  
   const handleImage= e =>{
    setFile(e.target.files[0])
    setLogoPath(URL.createObjectURL(e.target.files[0]))
    imageUploader({ variables: { file  } }); 
   }

   const [addKyc, { data, loading, error }] = useMutation(addkyc);
   if (loading) return 'Submitting...';
   if (error) return `Submission error! ${error.message}`;
   console.log(data)
   const submitForm=(e)=>{
    e.preventDefault()
    addKyc({
        variables:{
            id:user.id,
            mobile: editstate.number,
            city: editstate.city,
            nationality: editstate.nationality,
            country: editstate.country,
            street: editstate.street,
            birthDate: editstate.dob,
            building: editstate.building,
            postalCode: editstate.postcode
          }
    })
    dispatch(login({
      variables:{
        mobile: editstate.number,
        city: editstate.city,
        nationality: editstate.nationality,
        country: editstate.country,
        street: editstate.street,
        birthDate: editstate.dob,
        building: editstate.building,
        postalCode: editstate.postcode
      }
    }))
    
   
    console.log(login)
    history.push("/profile")
   }
    return (
        <div>
            <div className="edit-heading">
            <h2>Edit Profile</h2>
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
           defaultValue=""
            autoComplete="City"
            type="text"
            label="City"
            onChange={(e) => handelChange('city', e.target.value)}
            value={editstate.city}
          />
          <TextField
           fullWidth
           defaultValue=""
            autoComplete="street"
            type="text"
            label="Street"
            onChange={(e) => handelChange('street', e.target.value)}
            value={editstate.street}
          />
           <TextField
           fullWidth
           defaultValue=""
            autoComplete="building"
            type="text"
            label="Building"
            onChange={(e) => handelChange('building', e.target.value)}
            value={editstate.building}
          />

          <button className="profile-button">Update Profile</button>
          </form>

           
        </div>
        </div>
    )
}

export default EditProfile
