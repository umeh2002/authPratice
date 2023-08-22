import axios from "axios";

const URL="http://localhost:2350/api/v2/auth"

export const registerUser=async(data:any)=>{
    const config:{}={
        "content-type":"multipart/form-data"
    }
    try {
        return await axios.post(`${URL}/sign-up`, data,config).then((res:any)=>{
return res.data.data
// console.log(res.data.data)
        })
    } catch (error) {
        console.log(error)
    }
}

export const signIn =async(data:any)=>{
    try {
        return await axios.post(`${URL}/sign-in` , data).then((res:any)=>{
            return res.data.data
            // console.log(res.data.data)
        })
    } catch (error) {
        console.log(error)
    }
}