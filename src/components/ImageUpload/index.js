import React,{useState} from 'react'
import {ImageUploadHook} from '../../hooks/useMutationsHooks'

function ImageUpload() {
    const [onfile,setFile]=useState([])
    const [logoPath,setLogoPath]=useState(null)

    const onSuccess=(data)=>{
        console.log(data)
    }
    const onError=(error)=>{
        console.log(error)
    }
    const [imageUploader]=ImageUploadHook(onError,onSuccess)

    const handleImage= e =>{
        setFile(e.target.files[0])
        setLogoPath(URL.createObjectURL(e.target.files[0]))
        let file=e.target.files[0]
        imageUploader({
            variables: {file}
        }).catch(err =>{
            console.log(err)
        });
       }
    return (
        <div>
            <div >
                    <input className="avatar-icon" type="file" onChange={handleImage} />
                    <div className="profile-pic-position">
                        <img className="profile-pic-size" src={logoPath} />
                    </div>
                </div>
        </div>
    )
}

export default ImageUpload
