import React, {useState} from 'react'
import PropTypes from 'prop-types'

async function loginUser(credentials) {
    return fetch('http://localhost:8080/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const Login = ({settoken}) => {
    const [username, setusername] = useState()
    const [password, setpassword] = useState()

    const handleSubmit = async e => {
        e.preventDefault()
        const token = await loginUser({
            username,
            password
        })
        settoken(token)
    }
  return (
    <>
    <div className='bg-black/50 fixed top-0 left-0 w-full h-screen'></div>
    <div className='fixed w-full px-4 py-24 z-50'>
    <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 text-white'>
    <div className='max-w-[320px] mx-auto py-16'>
        <h1>Sign Up Here</h1>
        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <p className='text-white font-bold'>UserName</p>
                <input type="text" onChange={e => setusername(e.target.value)} required className='p-3 my-2 rounded text-black' placeholder='JohnDoe'/>
                <p className='text-white font-bold'>PassWord</p>
                <input type="password" onChange={e => setpassword(e.target.value)} required className='p-3 my-2 rounded text-black' placeholder='Please enter a strong password'/>
            <button type="submit" className='bg-red-700 py-3 my-6 rounded font-bold px-4'>Submit</button>
            <div>
                <p><input type="checkbox" />Remember Me</p>
            </div>
        </form>
    </div>
    </div>
    </div>
    </>
  )
}

Login.propTypes={
    settoken: PropTypes.func.isRequired
}

export default Login