import React from 'react'

const Header = (props) => {


  const loggedOut = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    
    // window.location.reload()
  }


  return (
    <div className='flex bg-gray-900 items-center h-35 rounded-3xl justify-between p-12 '>
      <h1 className='flex flex-col text-2xl'>Hello <span className='text-4xl font-semibold'>{props.data.firstName}</span></h1>
      <button onClick={loggedOut} className='bg-red-500 cursor-pointer px-8 h-12 rounded-xl font-semibold text-xl'>Log Out</button>
    </div>
  )
}

export default Header
