import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import {gql, useMutation } from '@apollo/client'
import { AddShopHook,ImageUploadHook } from '../../hooks/useMutationsHooks';


function VendorForm() {
    const [addshop, setAddshop ] = useState({
        shopname: "",
        shopCategory: "",
        address: "",
        website:"",
        location: "",
        tags: "",
        logo: "",
        phonenumber: "",
    })
    const [file,setFile]=useState([])
    const [logoPath,setLogoPath]=useState(null)
    const handelChange = (name, value) => {
        setAddshop({...addshop, [name]: value})
   }
 
    const handleimage= e =>{
        setFile(e.target.files[0])
        setLogoPath(URL.createObjectURL(e.target.files[0]))
    }
    
    const [calluploadMutation]=ImageUploadHook({
      onCompleted:data1 => {
        console.log(data1);
          // setImgPath(data1.imageUploader);
          // alert.success("Source Uploaded",{timeout:1000})
      },
      onError:error1 => {
          // alert.error(error1.toString(),{timeout:2000})
          console.log(error1.toString())
      }
  });
  
    const [registerShop, { data, loading, error }] = AddShopHook()
      if (loading) return 'Submitting...';
      if (error) return `Submission error! ${error.message}`;
     
 const submitForm=(e)=>{
        e.preventDefault()
        calluploadMutation({variables: {file}});
        registerShop({
            variables:{
              name: addshop.shopname,
              shopCategory: addshop.shopCategory,
              address: addshop.address,
              website:  addshop.website,
              tags: addshop.tags,
              phoneNumber: addshop.phonenumber,
              location: addshop.location,
              logo: addshop.logo
            }
          })
          calluploadMutation({
            variables:{
              file : file,
            }
          })
  
         }
    
    return (
        <div className="register">
             <h1 className="h1"> Get started absolutely free.</h1>
              <p>Free forever. No credit card needed.</p>
              <form className="form-design" autoComplete="off" onSubmit={submitForm}>
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
          <div >
              <label>Upload Your Logo</label>
            <input  type="file" onChange={handleimage} />
           <div >
           <img className="profile-pic-size" src={logoPath} />
           </div>
            </div>
            <button className="button">Register</button>
          
          </form>
         

        </div>
    )
}

export default VendorForm
