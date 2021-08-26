import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { AddShopHook,ImageUploadHook } from '../../hooks/useMutationsHooks';
import { selectUser } from '../../redux/reducer/userSlice';
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import ImageUpload from '../ImageUpload';
import Loader from '../Loader/loader';


function VendorForm() {
  const user= useSelector(selectUser)
  const history = useHistory();
  const [loader,setLoader]=useState(false);
    const [addshop, setAddshop ] = useState({
        shopname: "",
        shopCategory: "",
        address: "",
        website:"",
        location: "",
        tags: "",
        phonenumber: "",
    })
    const [file,setFile]=useState([])
    const [logoPath,setLogoPath]=useState(null)
    const handelChange = (name, value) => {
        setAddshop({...addshop, [name]: value})
   }

   const onSuccess=(data)=>{ 
    console.log(data,"===")
    alert.success("Successfully Register",{timeout:4000})
    setLoader(false)
    history.push('/login')
  }
  const onError=(error)=>{
      console.log(error,"===")
      alert.error(error.message,{timeout:4000})
      setLoader(false)
  }
    const [registerShop, { data, loading, error }] = AddShopHook(onSuccess,onError)
     
     
 const submitForm=(e)=>{
        e.preventDefault()
        registerShop({
            variables:{
              id:user.id,
              name: addshop.shopname,
              shopCategory: addshop.shopCategory,
              address: addshop.address,
              website:  addshop.website,
              tags: addshop.tags,
              phoneNumber: addshop.phonenumber,
              location: addshop.location,
            }
          })
         }
      
    
    return (
      loading ? <Loader/> :
        <div className="register">
             <h1 className="h1"> Get started absolutely free.</h1>
              <p>Free forever. No credit card needed.</p>
              <form className="register-form" autoComplete="off" onSubmit={submitForm}>
                 <div className="form-grid">
                    <TextField
                    fullWidth
                    autoComplete="Shop Name"
                    type="text"
                    label="Enter Your Shop name"
                    onChange={(e) => handelChange('shopname', e.target.value)}
                    value={addshop.shopname}
                />
                <TextField
                    fullWidth
                    autoComplete="Shop Category"
                    type="text"
                    label="Shop Category"
                    onChange={(e) => handelChange('shopCategory', e.target.value)}
                    value={addshop.shopCategory}
                />
                    </div>
                    <div className="form-grid">
            <TextField
                fullWidth
                autoComplete="Address"
                type="text"
                label="Enter Your Address"
                onChange={(e) => handelChange('address', e.target.value)}
                value={addshop.address}
            />
            <TextField
                fullWidth
                autoComplete="Your Website "
                type="text"
                label="Website (Optional)"
                onChange={(e) => handelChange('website', e.target.value)}
                value={addshop.website}
            />
             <TextField
                fullWidth
                autoComplete="tags"
                type="text"
                label="Tags"
                onChange={(e) => handelChange('tags', e.target.value)}
                value={addshop.tags}
            />
             <TextField
                fullWidth
                autoComplete="Location"
                type="text"
                label="Location"
                onChange={(e) => handelChange('location', e.target.value)}
                value={addshop.location}
            />
            </div>

          <TextField
            fullWidth
            autoComplete="Phone Number"
            type="text"
            label="Enter Your Phone Number"
            onChange={(e) => handelChange('phonenumber', e.target.value)}
            value={addshop.phonenumber}
          />
          <div className="shop-logo">
          <ImageUpload />
          </div>
            <button className="button">Register</button>
          
          </form>
         

        </div>
    )
}

export default VendorForm
