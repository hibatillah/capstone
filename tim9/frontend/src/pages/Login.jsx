import React from "react";
import Foto from "../assets/img/Foto1.png";
import { Link, NavLink } from "react-router-dom";
const Login = () => {
  return (
    <div className="bg-[#ebe2b4] pb-10">
      <nav className="bg-white">
        <p className="px-6 py-2 text-xl font-bold">Menantea</p>
      </nav>
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="border w-[700px]  bg-white rounded-lg shadow-lg px-10 pt-10 pb-5 translate-y-20 relative">
          <img src={Foto} alt="" className="absolute -top-40 left-1/2 -translate-x-1/2 w-[370px]" />
          <div className="mt-5 flex border border-[#ff9666] rounded-lg">
            <Link className=" rounded-lg w-full text-center text-white bg-[#ff9666] px-10 py-2">
              Sign in
            </Link>
            <Link className="border-[#ff9666] text-center text-[#ff9666] rounded-r-lg w-full bg-white px-10 py-2">
              Sign up
            </Link>
          </div>
          <form action="" className="mt-16">
            <input
              type="text"
              id="email"
              name="email"
              required
              placeholder="Email"
              className="px-3 border-b w-full focus:outline-none"
            />
            <input
              type="text"
              id="password"
              name="password"
              required
              placeholder="Password"
              className="px-3 border-b w-full focus:outline-none mt-3"
            />
            <div className="flex justify-end">
              <Link className=" mt-2 text-sm text-slate-400">
                Forgot Password?
              </Link>
            </div>
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
