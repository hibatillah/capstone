import React from 'react'
import Foto from "../assets/img/Foto1.png";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post('http://localhost:5000/user/add', {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        role: e.target.role.value,
      })
      .then((res) => {
        console.log(res)
        alert('Pendaftaran berhasil')
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  return (
    <div className="bg-[#ebe2b4] pb-10">
      <nav className="bg-white">
        <p className="px-6 py-2 text-xl font-bold">Menantea</p>
      </nav>
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="border w-[700px]  bg-white rounded-lg shadow-lg px-10 pt-10 pb-5 translate-y-20 relative">
          <img src={Foto} alt="" className="absolute -top-40 left-1/2 -translate-x-1/2 w-[370px]" />
          <div className="mt-5 flex border border-[#ff9666] rounded-lg">
            <Link to='/' className=" rounded-lg w-full text-center text-[#ff9666]  px-10 py-2">
              Sign in
            </Link>
            <Link to='/register' className="border-[#ff9666] text-center text-white bg-[#ff9666] rounded-lg w-full  px-10 py-2">
              Sign up
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="mt-16 space-y-8">
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="Input username"
              className="px-3 py-2 border-b w-full focus:outline-none"
            />
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Input email"
              className="px-3 py-2 border-b w-full focus:outline-none"
            />
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Input password"
              className="px-3 py-2 border-b w-full focus:outline-none mt-3"
            />
            <select
              id="role"
              name="role"
              required
              className="px-3 py-2 border-b w-full focus:outline-none mt-3"
            >
              <option value="customer">Customer</option>
              <option value="supplier">Supplier</option>
              <option value="admin">Admin</option>
            </select>
            <div className="w-full rounded-lg bg-[#ff9666] mt-7 py-3 flex justify-center">
              <button type='submit' className="px-4 text-white">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register