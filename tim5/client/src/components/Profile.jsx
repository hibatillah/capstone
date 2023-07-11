import React from "react";
import { Bell } from "./Icon";
import { Link } from "react-router-dom";

const Profile = ({ handleNotif }) => {
  return (
    <header className="flex gap-3 items-center ml-auto">
      <div className="w-10 h-10 rounded-full bg-primary grid place-items-center"></div>
      <Link
        to="/notifikasi"
        className="w-10 h-10 rounded-full bg-white grid place-items-center text-primary cursor-pointer"
      >
        <Bell />
      </Link>
    </header>
  );
};

export default Profile;
