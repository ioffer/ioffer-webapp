import React, { useState} from 'react'
import TextField from '@material-ui/core/TextField';
import {useHistory,useParams} from 'react-router-dom'
import { useAlert} from "react-alert";
import {selectUser} from '../../redux/reducer/userSlice';
import {CreatePromotionHook} from "../../hooks/useMutationsHooks";
import Loader from "../Loader/loader";
import TagsInput from '../Tags';
import { useSelector} from 'react-redux'


function CreatePromotionForm() {
    const user= useSelector(selectUser)
    let {shopid} =useParams();
    let history=useHistory()
    const shop=(user.shops)
    const alert=useAlert();
    const [loader,setLoader]=useState(false);
    const [state, setState] = useState({
        name: "",
        category: "",
        description: "",
        price: "",
        startDate:"",
        endDate:"",
        tags:"",

    })
    const onSuccess=(data)=>{ 
        console.log(data,"===")
        alert.success("Promotion Created ",{timeout:4000})
        setLoader(false)
        history.push({
            pathname:`/shop_data/${shopid}`
        })
    }
    const onError=(error)=>{
        console.log(error,"===")
        alert.error(error.message,{timeout:4000})
        setLoader(false)
    }
    const [promotion, { loading}] = CreatePromotionHook(onError,onSuccess)

    const handelChange = (name, value) => {
        setState({...state, [name]: value})
    }
  
    const submitForm = async(e) => {
        e.preventDefault() 
        let newPromotion={
            name: state.name,
            category: state.category,
            description: state.description,
            price: state.price,
            startDate:state.startDate,
            endDate:state.endDate,
            tags: state.tags,
        }
        console.log(user)
        promotion({
            variables: {
                shopID: shopid,
                newPromotion:newPromotion
                
            }
        }).catch(err =>{
            console.log(err)
        })
    }
    return (
        loading ? <Loader/> :
        <div className="all-item-alighn">
            <h1 className="h1"> Create a Promotion </h1>

             <form className="register-form" autoComplete="off" onSubmit={submitForm} >
                <div className="form-grid">
                    <TextField
                        fullWidth
                        required
                        autoComplete="Full Name"
                        type="text"
                        label="Promotion Name"
                        onChange={(e) => handelChange('name', e.target.value)}
                        value={state.name}
                    />
                    <TextField
                        fullWidth
                        required
                        autoComplete="Username"
                        type="text"
                        label="Category"
                        onChange={(e) => handelChange('category', e.target.value)}
                        value={state.category}
                    />
                </div>
                  <TextField
                        fullWidth
                        autoComplete="email"
                        type="text"
                        label="Enter The Detail"
                        required
                        onChange={(e) => handelChange('description', e.target.value)}
                        value={state.description}
                />
                <TextField
                        fullWidth
                        autoComplete="current-password"
                        type="text"
                        label="Tags"
                        required
                        onChange={(e) => handelChange('tags', e.target.value)}
                        value={state.tags}
                    />
                    <TextField
                        fullWidth
                        autoComplete="current-password"
                        type="text"
                        label="Price"
                        required
                        onChange={(e) => handelChange('price', e.target.value)}
                        value={state.price}
                    />
                      <TextField
                        fullWidth
                        autoComplete="current-password"
                        type="date"
                        label="Starting Date"
                        required
                        onChange={(e) => handelChange('startDate', e.target.value)}
                        value={state.startDate}
                    />
                     <TextField
                        fullWidth
                        autoComplete="current-password"
                        type="date"
                        label="Ending Date"
                        required
                        onChange={(e) => handelChange('endDate', e.target.value)}
                        value={state.endDate}
                    />
                    <button className="button">Submit Promotion</button>
                </form> 

    </div>
    )
}

export default CreatePromotionForm
