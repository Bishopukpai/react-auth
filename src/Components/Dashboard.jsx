import React from 'react'
import Login from '../Components/Login/Login'
import useToken from './App/useToken'


const Dashboard = () => {

  const {token, settoken }= useToken()
  if(!token) {
    return<Login settoken={settoken} />
  }
  return (
    <div>
      <h1 className='text-white font-bold text-2xl'>DashBoard</h1>
    </div>
  )
}

export default Dashboard