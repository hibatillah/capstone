import React from "react";

const DashboardSupplier = () => {
  const data =[]
  return (
    <div className="px-7">
      <p className="py-4 text-3xl font-bold text-darkblue text-center">
        Dashboard
      </p>
      <div className="min-h-[300px] px-7 bg-white rounded-lg">
        <p className="py-4 text-xl font-bold text-darkblue">Hasil Penjualan</p>
      </div>
      <div className="bg-white min-h-[200px] mt-10 px-7">
        <p className="py-4 text-xl font-bold text-darkblue">
          Riwayat Pemesanan
        </p>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Tanggal Penesanan</th>
              <th>Alamat</th>
              <th>QTY</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>{item.nama ?? "-"}</td>
                <td>{item.tanggalpemesanan ?? "-"}</td>
                <td>{item.alamat ?? 0}</td>
                <td>{item.jumlah ?? 0}</td>
                <td>{item.qty ?? 0}</td>
                <td>{item.total ?? 0}</td>
              </tr>
            )) ?? <tr>Produk Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardSupplier;
