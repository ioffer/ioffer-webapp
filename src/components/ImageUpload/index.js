import React,{useState} from 'react'
import {ImageUploadHook} from '../../hooks/useMutationsHooks'
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { makeStyles } from '@material-ui/core/styles';
import './imgae-upload.scss'
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from '../../redux/reducer/userSlice';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
    large: {
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
      small:{
        width: theme.spacing(3),
        height: theme.spacing(3),
      }
  }));
function ImageUpload() {
    const classes = useStyles();
    const dispatch= useDispatch()
    const user= useSelector(selectUser)
    const [onfile,setFile]=useState([])
    const [logoPath,setLogoPath]=useState(null)

    const onSuccess=(data)=>{
        console.log(data)
        dispatch(login(user))
    }
    const onError=(error)=>{
        alert.error(error.message,{timeout:4000})
    }
    const [imageUploader]=ImageUploadHook(onError,onSuccess)

    const handleImage= e =>{
        setFile(e.target.files[0])
        setLogoPath(URL.createObjectURL(e.target.files[0]))
        let file=e.target.files[0]
        imageUploader({
            variables: {file:file}
        }).catch(err =>{
            console.log(err)
        });
       }
    return (
        <div>
                    <div className="main-imageupload-div" >
                        <Avatar className={classes.large} src={logoPath} />

                        <div className="camera-icon">
                    <input accept="image/*"  className={classes.input} id="icon-button-file" type="file" onChange={handleImage} />
                <label htmlFor="icon-button-file">
                    <IconButton  style={{background: "#3F51B5",color:"white"}} aria-label="upload picture" component="span">
                    <PhotoCamera  className={classes.small} />
                    </IconButton>
                </label>
                </div>
                    </div>
        </div>
    )
}

export default ImageUpload
