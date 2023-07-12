import React from 'react'

const Adminpendatapan = () => {
    const data =[]
  return (
    <div className='px-10 py-3'>
        <p className='text-xl font-bold py-2'>Pendatapan</p>
        <div className="bg-white min-h-[300px] mt-5 px-3 py-5">
        <p className="mb-5 font-bold text-lg p-2">Overview Pesanan</p>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Customer</th>
              <th>Jenis</th>
              <th>Kuantitas</th>
              <th>Tanggal Pengiriman</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>{item.no ?? "-"}</td>
                <td>{item.namacustomer ?? "-"}</td>
                <td>{item.jenis ?? 0}</td>
                <td>{item.kuantitas ?? 0}</td>
                <td>{item.tanggal ?? 0}</td>
              </tr>
            )) ?? <tr>Produk Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
      <div className=' py-12 min-h-[300px] mt-10'>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Invoce Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td className='bg-white rounded-lg'>{item.invoceid ?? "-"}</td>
                <td className='bg-white rounded-lg'>{item.name?? "-"}</td>
                <td className='bg-white rounded-lg'>{item.email ?? 0}</td>
                <td className='bg-white rounded-lg'>{item.date ?? 0}</td>
                <td className='bg-white rounded-lg'>{item.status ?? 0}</td>
                <td></td>
              </tr>
            )) ?? <tr>Produk Tidak tersedia</tr>}
          </tbody>
        </table>
    </div>
    </div>
  )
}

export default Adminpendatapan