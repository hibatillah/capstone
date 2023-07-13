import React from "react";
import logo from "../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { GetData } from "../components/api";
import Foto from "../assets/img/fotologin.png";
const Login = ({ handleLogin, handleUser }) => {
  const navigate = useNavigate();
  const User = () => {
    const { users } = GetData("http://localhost:5000/user");
    console.log(users);
    return users;
  };
  const dataUser = User();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    if (
      dataUser?.data.some(
        (item) => item.email === data.email && item.password === data.password
      )
    ) {
      const user = dataUser.data.find(
        (item) => item.email === data.email && item.password === data.password
      );
      handleLogin();
      handleUser(user._id, user.username, user.role);
      console.log(user._id, user.username, user.role);
      console.log("login success");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      alert("Email atau password salah");
    }
  };
  return (
    <div className="p-10">
      <div>
        <img src={logo} alt="logo" className="w-20" />
      </div>
      <div className="grid grid-cols-2 mt-5">
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit} className="flex flex-col w-[50%]">
            <h1 className="text-center font-bold text-2xl">LOGIN</h1>
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-2 w-full px-4 py-1 rounded-lg"
              placeholder="Input email"
            />
            <label htmlFor="password" className="mt-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-2 w-full px-4 py-1 rounded-lg"
              placeholder="Input password"
            />
            <button className="bg-primary w-full mt-8 rounded-lg px-4 py-2 text-white">
              LOGIN
            </button>
            <div className="mt-3 flex justify-center">
              Belum punya akun?{" "}
              <Link to={"/register"} className="text-primary">
                Daftar
              </Link>
            </div>
          </form>
        </div>
        <div className="">
          <img src={Foto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
