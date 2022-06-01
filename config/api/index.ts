import axios, { AxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'
interface CallAPIProps extends AxiosRequestConfig{
  token? : boolean
  serverToken? : string
}
const callAPI = async ({ url, method, data,token,serverToken }: CallAPIProps) => {
  let headers = {}
  if(serverToken){
    headers = {
      Authorization : `Bearer ${serverToken}`
    }
  }else if(token){
    const tokenCookies = Cookies.get('token')
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies)
      headers = {
        Authorization : `Bearer ${jwtToken}`
      }
    }
  }
  
  const res = await axios({
    method: method,
    url: url,
    data: data,
    headers : headers
  }).catch((err) => err.response)
  if(res.status === 404){
    return {
      error : true,
      message: `${res.status} ${res.statusText}`,
      data : null
    }
  }
  if (res.status > 300) {
    const errRes: any = {
      error: true,
      message: res.data.message,
      data: null,
    }
    return errRes
  }
  const {length} = Object.keys(res.data)
  const successRes = {
    error: false,
    message: 'success',
    data: length > 1 ? res.data : res.data.data,
  }
  return successRes
}
export default callAPI
