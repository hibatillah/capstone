import React from "react";
import Foto from "../assets/img/Foto1.png";
import { GetData } from "../components/api";
import { Link } from "react-router-dom";

const User = () => {
  const { users } = GetData("http://localhost:5000/user");
  console.log(users);
  return users;
};

const Login = ({ handleLogin, handleUser }) => {
  const dataUser = User();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    if (
      dataUser?.data.some(
        (item) => item.email === data.email && item.password === data.password
      )
    ) {
      const user = dataUser.data.find(
        (item) => item.email === data.email && item.password === data.password
      );
      handleLogin(true);
      handleUser(user._id, user.name, user.role);
      console.log("login success");
      alert("login success");
    } else {
      alert("email atau password salah")
    }
  };
  
  return (
    <div className="bg-[#ebe2b4] pb-10">
      <nav className="bg-white">
        <p className="px-6 py-2 text-xl font-bold">Menantea</p>
      </nav>
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="border w-[700px]  bg-white rounded-lg shadow-lg px-10 pt-10 pb-5 translate-y-20 relative">
          <img src={Foto} alt="" className="absolute -top-40 left-1/2 -translate-x-1/2 w-[370px]" />
          <div className="mt-5 flex border border-[#ff9666] rounded-lg">
            <Link to={'/'} className=" rounded-lg w-full text-center text-white bg-[#ff9666] px-10 py-2">
              Sign in
            </Link>
            <Link to='/register' className="border-[#ff9666] text-center text-[#ff9666] rounded-r-lg w-full bg-white px-10 py-2">
              Sign up
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="mt-16 space-y-4">
            <input
              type="text"
              id="email"
              name="email"
              required
              placeholder="Email"
              className="px-3 py-2 border-b w-full focus:outline-none"
            />
            <input
              type="text"
              id="password"
              name="password"
              required
              placeholder="Password"
              className="px-3 py-2 border-b w-full focus:outline-none mt-3"
            />
            <div className="w-full rounded-lg bg-[#ff9666] mt-7 py-3 flex justify-center">
              <Link className="px-4 text-white">Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
