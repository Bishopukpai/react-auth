import React, {useState} from 'react'

const useToken = () => {
    const getToken =() =>{
        const tokenString = sessionStorage.getItem('token')
        const userToken = JSON.parse(tokenString)
        return userToken?.token
      }
    const [token, settoken] = useState(getToken())
    const saveToken = (userToken) =>{
        sessionStorage.setItem('token', JSON.stringify(userToken))
        settoken(userToken.token)
      }
  return {
    settoken: saveToken,
    token
  }
}

export default useToken