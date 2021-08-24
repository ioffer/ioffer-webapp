export const removeLocalStorage=()=>{
    if (localStorage.getItem('token')){
        localStorage.removeItem('token')
    }
}