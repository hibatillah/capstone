import React from 'react'

const Orderan = () => {
    const data =[]
  return (
    <div className="px-7 py-2">
      <p className="py-4 text-3xl font-bold text-darkblue">Orderan</p>
      <div className="bg-white min-h-[300px] px-8">
        <p className='py-4 text-xl font-bold text-darkblue'>Pemesanan</p>
        <table className="table-auto w-full">
          <thead>
            <tr className=' border-b-2 border-[#f2990d]'>
              <th>Nama Admin</th>
              <th>Tanggl</th>
              <th>QTY</th>
              <th>Stock</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>{item.namaadmin ?? "-"}</td>
                <td>{item.tanggal ?? "-"}</td>
                <td>{item.qty ?? "-"}</td>
                <td>{item.stock ?? 0}</td>
                <td>{item.status ?? 0}</td>
              </tr>
            )) ?? <tr>Produk Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orderan