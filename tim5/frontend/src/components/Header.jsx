import React from 'react'
import { logo } from '../assets/img'

const Header = () => {
  return (
    <header className='flex justify-between items-center px-10 py-5'>
      <img src={logo} alt="logo" />
    </header>
  )
}

export default Header