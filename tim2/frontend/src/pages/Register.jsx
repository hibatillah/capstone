import React from "react";
import logo from "../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { GetData } from "../components/api";
import Foto from "../assets/img/fotologin.png";
import axios from "axios";
const Register = ({ handleLogin, handleUser }) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const data = {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        role: e.target.role.value,
      };
  
      axios
        .post("http://localhost:5000/user/add", data)
        .then((res) => {
          console.log(res.data);
          alert("Berhasil daftar");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          e.target.reset();
        });
    };
  return (
    <div className="p-10">
      <div>
        <img src={logo} alt="logo" className="w-20" />
      </div>
      <div className="grid grid-cols-2 mt-5">
        <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col w-[50%]">
          <h1 className="text-center font-bold text-2xl">Sign Up</h1>
          <label htmlFor="username" className="mt-2 place-items-start">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="border-2 w-full px-4 py-1 rounded-lg"
            placeholder="Input username"
          />
          <label htmlFor="email" className="mt-2 place-items-start">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-2 w-full px-4 py-1 rounded-lg"
            placeholder="Input email"
          />
          <label htmlFor="password" className="mt-2 place-items-start">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border-2 w-full px-4 py-1 rounded-lg"
            placeholder="Input password"
          />
          <label htmlFor="role" className="mt-2 place-items-start">
            Role
          </label>
          <select
            name="role"
            id="role"
            className="border-2 w-full px-4 py-1 rounded-lg"
          >
            <option value="customer">Customer</option>
            <option value="supplier">Supplier</option>
            <option value="admin">Admin</option>
          </select>
          <button
            type="submit"
            className="bg-primary w-full mt-8 rounded-lg px-4 py-2 text-white"
          >
            Sign Up
          </button>
          <div className="mt-3">
            Sudh punya akun?{" "}
            <Link to={"/"} className="text-primary">
              Masuk
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

export default Register;
