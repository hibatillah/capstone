import React from 'react'

const Tambahpengantaran = () => {
  return (
    <div className='px-10'>
        <p className='font-medium py-3'>Tambah Pengiriman</p>
        <div className='flex justify-center mt-5'>
            <form action="" className='bg-white rounded-lg w-[80%] px-10 py-5'>
                <div className='grid grid-cols-2 gap-4 items-center mt-3'>
                    <p>Pengiriman Bahan</p>
                    <input type="text" name='nama' id='nama' placeholder='Nama Bahan baku' className='w-full bg-transparent px-4 py-2 focus:outline-none' />
                </div>
                <div className='grid grid-cols-2 gap-4 items-center mt-3'>
                    <p>Jumlah</p>
                    <input type="text" name='stock' id='stock' placeholder='Stok' className='w-full bg-transparent px-4 py-2 focus:outline-none' />
                </div>
                <div className='grid grid-cols-2 gap-4 items-center mt-3'>
                    <p>Tujuan</p>
                    <input type="text" name='harga' id='harga' placeholder='Harga Satuan' className='w-full bg-transparent px-4 py-2 focus:outline-none' />
                </div>
                <div className='flex justify-end'>
                    <button className='px-4 py-2 text-white bg-[#280559] rounded-lg' type='submit'>Selesai</button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Tambahpengantaran