import React from 'react'

const BahanbakuAdmin = () => {
  const data =[]
  return (
    <div className="px-7">
      <div className="bg-white min-h-[300px] px-7 ">
        <p className="px-3 text-xl font-medium text-darkblue py-2">Bahan Baku</p>
        <table className="table-auto w-full">
          <thead className="bg-[#b57344] rounded-lg">
            <tr className="rounded-lg">
              <th className="rounded-l-lg px-4 w-60  text-white">Nama Bahan</th>
              <th className="px-4 w-20  text-white">Stock Tersedia</th>
              <th className="px-4 w-20  text-white">Min</th>
              <th className="rounded-r-lg px-4 w-20  text-white">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>{item.nama ?? "-"}</td>
                <td>{item.stock ?? 0}</td>
                <td>{item.min ?? "-"}</td>
                <td></td>
              </tr>
            )) ?? <tr>Produk Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BahanbakuAdmin