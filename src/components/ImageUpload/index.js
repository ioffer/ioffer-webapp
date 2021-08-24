import React,{useState} from 'react'
import {AddkycHook,ImageUploadHook} from '../../hooks/useMutationsHooks'
function ImageUpload() {
    const [file,setFile]=useState([])
    const [logoPath,setLogoPath]=useState(null)
    const [imageUploader]=ImageUploadHook({
        onCompleted: (data)=> console.log(data)
       })
        
       const handleImage= e =>{
        setFile(e.target.files[0])
        setLogoPath(URL.createObjectURL(e.target.files[0]))
        imageUploader({ variables: { file :e.target.files[0] } });
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
