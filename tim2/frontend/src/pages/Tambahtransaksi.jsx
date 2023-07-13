import React from 'react'

const Tambahtransaksi = () => {
  return (
    <div className='px-10'>
        <p className='font-medium py-3'>Detail Transaksi</p>
        <div className='flex justify-center mt-5'>
            <form action="" className='bg-white rounded-lg w-[80%] px-10 py-5'>
                <div className='grid grid-cols-2 gap-4 items-center mt-3'>
                    <p>Nama Produk</p>
                    <input type="text" name='nama' id='nama' placeholder='Nama Bahan baku' className='w-full bg-transparent px-4 py-2 focus:outline-none' />
                </div>
                <div className='grid grid-cols-2 gap-4 items-center mt-3'>
                    <p>Jumlah</p>
                    <input type="text" name='jumlah' id='jumlah' placeholder='Jumlah' className='w-full bg-transparent px-4 py-2 focus:outline-none' />
                </div>
                <div className='grid grid-cols-2 gap-4 items-center mt-3'>
                    <p>Harg Satuan</p>
                    <input type="text" name='harga' id='harga' placeholder='Harga Satuan' className='w-full bg-transparent px-4 py-2 focus:outline-none' />
                </div>
                <div className='grid grid-cols-2 gap-4 items-center mt-3'>
                    <p>Nama Pembeli</p>
                    <input type="text" name='pembeli' id='pembeli' placeholder='Nama Pembeli' className='w-full bg-transparent px-4 py-2 focus:outline-none' />
                </div>
                <div className='grid grid-cols-2 gap-4 items-center mt-3'>
                    <p>No Hp</p>
                    <input type="text" name='nohp' id='nohp' placeholder='No Hp' className='w-full bg-transparent px-4 py-2 focus:outline-none' />
                </div>
                <div className='grid grid-cols-2 gap-4 items-center mt-3'>
                    <p>Total Harga</p>
                    <input type="text" name='total' id='total' placeholder='Total Harga' className='w-full bg-transparent px-4 py-2 focus:outline-none' />
                </div>
                <div className='flex justify-end'>
                    <button className='px-4 py-2 text-white bg-[#280559] rounded-lg' type='submit'>Selesai</button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Tambahtransaksi