import React from 'react'

const Login = ({ handleLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin()
  }
  
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="card">
        <h2>Login</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-10'>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" className='form' placeholder='Masukkan email' required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" className='form' placeholder='Masukkan password' required />
          </div>
          <button type="submit" className='btn btn-primary'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login