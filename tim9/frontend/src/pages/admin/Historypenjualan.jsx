import React from 'react'

const Historypenjualan = () => {
    const data = []
  return (
    <div className="px-7">
    <div className="bg-white min-h-[300px] px-7 ">
      <p className="px-3 text-xl font-medium text-darkblue py-2">Menu</p>
      <table className=" w-full">
        <thead className="bg-[#b57344] rounded-lg">
          <tr className="rounded-lg">
            <th className="rounded-l-lg px-4   text-white">No Transaksi</th>
            <th className="px-4  text-white">Tanggal & Waktu</th>
            <th className="px-4  text-white">Nama Produk</th>
            <th className="px-4  text-white">Jumlah</th>
            <th className="px-4  text-white">Total</th>
            <th className="rounded-r-lg px-4  text-white">Metode Pembayaran</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr>
              <td>{item.no ?? "-"}</td>
              <td>{item.tanggal ?? "-"}</td>
              <td>{item.namaproduk ?? 0}</td>
              <td>{item.jumlah ?? 0}</td>
              <td>{item.total ?? 0}</td>
              <td>{item.metodepembayaran ?? 0}</td>
              <td></td>
            </tr>
          )) ?? <tr>Produk Tidak tersedia</tr>}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Historypenjualan