import React, { useState } from 'react'


const Login = ({handleLogin}) => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        
        handleLogin(email, password)
        setEmail('')
        setPassword('')
               
    }

    
    
  return (
    <div className='flex flex-col h-screen bg-gray-950 w-screen items-center justify-center'>
        <h1 className='mb-20 text-5xl font-bold text-[#cfd9e5]'>Employee Management System</h1>
        <div className='border-3 p-15 bg-gray-800 rounded-xl border-blue-400 outline-none '>
            <h1 className='font-semibold mb-18 -mt-5 text-blue-200 text-5xl'>Login Page</h1>
            <form 
            onSubmit={(e) => {
                submitHandler(e)
            }}
            className='flex font-medium gap-7 justify-center items-center  flex-col '>
                
                <input 
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                className='.bg-blue-400 border-2 border-blue-300 outline-none bg-transparent text-xl w-90 rounded-3xl py-2 px-6'
                type="email" 
                placeholder='Enter Your Email' 
                />
                <input 
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                className='.bg-blue-400 border-2 border-blue-300 outline-none bg-transparent text-xl w-90 rounded-3xl py-2 px-6'
                type="password" 
                placeholder='Enter Password' 
                />
                <button className='bg-blue-400 text-xl font-bold rounded-2xl py-3 px-25 mt-8'>
                Log in
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login
