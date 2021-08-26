export const removeLocalStorage=()=>{
    if (localStorage.getItem('token')){
        localStorage.removeItem('token')
    }
}
export const matchObject=(oldValue,newValue)=>{
    return JSON.stringify(newValue) === JSON.stringify(oldValue);
}