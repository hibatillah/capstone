import React from 'react'

const Tambahsupplier = () => {
  return (
    <div className='px-10'>
        <p className='font-medium py-3'>Detail product</p>
        <div className='flex justify-center mt-5'>
            <form action="" className='bg-white rounded-lg w-[80%] px-10 py-5'>
                <div className='grid grid-cols-2 gap-4 items-center mt-3'>
                    <p>Nama Perusahaan</p>
                    <input type="text" name='nama' id='nama' placeholder='Nama Perusahaan' className='w-full bg-transparent px-4 py-2 focus:outline-none' />
                </div>
                <div className='grid grid-cols-2 gap-4 items-center mt-3'>
                    <p>Bahan Baku</p>
                    <input type="text" name='bahanbaku' id='bahanbaku' placeholder='Bahan Baku' className='w-full bg-transparent px-4 py-2 focus:outline-none' />
                </div>
                <div className='grid grid-cols-2 gap-4 items-center mt-3'>
                    <p>Status</p>
                    <input type="text" name='status' id='status' placeholder='Status' className='w-full bg-transparent px-4 py-2 focus:outline-none' />
                </div>
                <div className='flex justify-end'>
                    <button className='px-4 py-2 text-white bg-[#280559] rounded-lg' type='submit'>Selesai</button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Tambahsupplier