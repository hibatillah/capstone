import React from "react";
import { Bell } from "./Icon";

const Profile = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 aspect-square rounded-full bg-white"></div>
      <div className="w-10 aspect-square rounded-full bg-white text-primary grid place-items-center">
        <Bell />
      </div>
    </div>
  );
};

export default Profile;
