import React,{useState,useEffect} from 'react'
import Loader from '../Loader/loader'
import {useParams,useHistory} from 'react-router-dom'
import { ConfirmEmailHook } from '../../hooks/useMutationsHooks';
import {useAlert} from 'react-alert'
import success from '../../assets/svgicons/success.svg'
import './verify-email.scss'


const VarifyEmail=()=>{
    const history = useHistory();
    const [loader,setLoader]=useState(true)
    const alert=useAlert()
    let { token } = useParams();
    
    const onSuccess=(data)=>{ 
        setLoader(false) 
    }
    const onError=(error)=>{
        alert.error(error.message,{timeout:4000})
        setLoader(false)
    }
    const [confirm, { loading}] = ConfirmEmailHook(onError,onSuccess)
    useEffect(()=>{
        confirm({
            variables: {
               token: token,
            }
        }).catch(err =>{
            console.log(err)
        })
        setTimeout(() =>{
          history.push('/login')
        }, 5000)
    },[])
    return (
       loading? <Loader/>:

        <div className="verify-height">
            <div >
           <img src={success} className="success-svg" />
           <h2>Successfully Verified</h2>
            </div>
           
            
       </div>
    )
}
export default VarifyEmail