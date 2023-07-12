import React from "react";
import Foto from "../assets/img/Login.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="grid grid-cols-2 h-screen ">
      <div className="bg-gradient-to-tr from-[#b9c6eb] to-[#50d2c6] p-10">
        <h1 className="font-bold text-2xl text-white drop-shadow-lg">
          Welcom Back!
        </h1>
        <img src={Foto} alt="" />
      </div>
      <div className="p-10 flex flex-col justify-center">
        <p className="text-2xl font-bold  text-center">Sign Up</p>
        <form className="flex flex-col">
          <p className="mt-3 mb-1 font-medium">Username</p>
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            className="w-full border rounded-xl px-3 py-1"
          />
          <p className="mt-3 mb-1 font-medium">Password</p>
          <input
            type="text"
            placeholder="Password"
            id="password"
            name="password"
            className="w-full border rounded-xl px-3 py-1"
          />
          <p className="mt-3 mb-1 font-medium">Role</p>
          <select
            id="role"
            name="role"
            className="w-full border rounded-xl px-3 py-1"
          >
            <option value="admin">Admin</option>
            <option value="supplier">Supplier</option>
            <option value="customer">customer</option>
          </select>
          <button
            type="submit"
            className="w-full bg-primary py-2 rounded-lg mt-3 text-white"
          >
            Sign in
          </button>
        </form>
        <p className="text-right mt-2">
          I have an account!
          <Link className="text-red-400 ml-1" to={"/"}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
