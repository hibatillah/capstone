import React from "react";
import { location } from "../assets/img";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-3/4 h-2/3 grid grid-cols-2 bg-white overflow-hidden">
      <div className="col-span-1 grid place-items-center">
        <div className="w-2/3 -translate-y-[10%]">
          <h1 className="text-3xl text-primary mb-5 text-center">Daftar</h1>
          <form className=" flex flex-col gap-3">
            <input
              type="text"
              name="namaDepan"
              id="namaDepan"
              placeholder="Nama depan"
              className="form"
            />
            <input
              type="text"
              name="namaBelakang"
              id="namaBelakang"
              placeholder="Nama belakang"
              className="form"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Alamat surel"
              className="form"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Kata Sandi"
              className="form"
            />
            <div className="text-left text-secondary">Lupa kata sandi?</div>
            <button type="submit" className="btn btn-primary">
              Daftar
            </button>
          </form>
          <div className="my-3 text-slate-600">
            Sudah memiliki akun?{" "}
            <Link to="/" className="text-secondary">
              Masuk Sekarang!
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-1 h-full">
        <img
          src={location}
          alt="address"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignUp;
