import React from 'react'

const Notifikasi = ({ handleNotif }) => {
  return (
    <div className="flex justify-between">
      <h3>Notifikasi</h3>
      <div
        onClick={handleNotif}
        className="p-1 rounded bg-primary-100 hover:bg-primary-200 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
}

export default Notifikasi