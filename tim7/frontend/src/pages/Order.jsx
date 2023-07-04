import React from 'react'

const Order = () => {
    const data =[]
  return (
    <div className='px-10 py-12 bg-white min-h-[300px] mt-10 mx-10'>
        <button className='bg-[#3a36db] px-6 py-2 mb-5'>Add New</button>
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
                <td>{item.nama ?? "-"}</td>
                <td>{item.id ?? "-"}</td>
                <td>{item.kategori ?? 0}</td>
                <td>{item.total ?? 0}</td>
                <td></td>
              </tr>
            )) ?? <tr>Produk Tidak tersedia</tr>}
          </tbody>
        </table>
    </div>
  )
}

export default Order