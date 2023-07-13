import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Tambahtransaksi = () => {
    const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      tanggal: event.target.tanggal.value,
      namapembeli: event.target.namapembeli.value,
      nohp: event.target.nohp.value,
      produk: event.target.produk.value,
      amount: event.target.amount.value,
      status: event.target.status.value,
    };
    axios
      .post("http://127.0.0.1:5000/riwayatadmin/add", data)
      .then((res) => {
        console.log(res);
        event.target.reset();
        navigate("/transaksi");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className='px-10'>
        <p className='font-medium py-3'>Detail Transaksi</p>
        <div className='flex justify-center mt-5'>
            <form action="" className='bg-white rounded-lg w-[80%] px-10 py-5'  onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-4 items-center mt-3'>
                    <p>Tanggal</p>
                    <input type="date" name='tanggal' id='tanggal' className='w-full bg-transparent px-4 py-2 focus:outline-none' />
                </div>
                <div className='grid grid-cols-2 gap-4 items-center mt-3'>
                    <p>Nama Pembeli</p>
                    <input type="text" name='namapembeli' id='namapembeli' placeholder='Nama Pembeli' className='w-full bg-transparent px-4 py-2 focus:outline-none' />
                </div>
                <div className='grid grid-cols-2 gap-4 items-center mt-3'>
                    <p>No Hp</p>
                    <input type="text" name='nohp' id='nohp' placeholder='Harga Satuan' className='w-full bg-transparent px-4 py-2 focus:outline-none' />
                </div>
                <div className='grid grid-cols-2 gap-4 items-center mt-3'>
                    <p>Produk</p>
                    <input type="text" name='produk' id='produk' placeholder='Nama Produk' className='w-full bg-transparent px-4 py-2 focus:outline-none' />
                </div>
                <div className='grid grid-cols-2 gap-4 items-center mt-3'>
                    <p>Amount</p>
                    <input type="text" name='amount' id='amount' placeholder='Amount' className='w-full bg-transparent px-4 py-2 focus:outline-none' />
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

export default Tambahtransaksi