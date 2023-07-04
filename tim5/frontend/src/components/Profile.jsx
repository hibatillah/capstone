import React from 'react'
import { Bell } from './Icon'

const Profile = ({ handleNotif }) => {
  return (
    <header className="flex gap-3 items-center ml-auto">
      <div className="w-10 h-10 rounded-full bg-primary grid place-items-center"></div>
      <div
        onClick={handleNotif}
        className="w-10 h-10 rounded-full bg-white grid place-items-center text-primary cursor-pointer"
      >
        <Bell />
      </div>
    </header>
  );
}

export default Profile