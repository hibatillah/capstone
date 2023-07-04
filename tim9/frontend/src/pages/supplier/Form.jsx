import React from 'react'

const Form = () => {
  return (
    <div className='px-7 py-10 w-1/2'>
        <p>Id Manufaktur</p>
        <input type="text" className='border-2 px-4 w-full' />
        <p>Nama Manufaktur</p>
        <input type="text" className='border-2 px-4 w-full' />
        <p>Bahan yang dipesan</p>
        <input type="text" className='border-2 px-4 w-full' />
        <p>Quantity</p>
        <input type="text" className='border-2 px-4 w-full' />
        <p>Alama yag dituju</p>
        <input type="text" className='border-2 px-4 w-full' />
        <p>Tanggal Pemesanan</p>
        <input type="datetime-local" className='border-2 px-4 w-full' />
        <div className='flex gap-4 mt-5'>
            <button className='bg-[#e14d4d] rounded-lg px-5 py-2'>Tutup</button>
            <button className='bg-[#3527cd] rounded-lg px-5 py-2'>Simpan</button>
        </div>
    </div>
  )
}

export default Form