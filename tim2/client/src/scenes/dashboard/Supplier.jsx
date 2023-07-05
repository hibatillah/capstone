/* eslint-disable react/style-prop-object */
const DashboardSupplier = () => {
  return (
    <div className="p-10 space-y-5">
      <div className="flex gap-5 text-white">
        <div className="card-2 bg-[#ffb275]">
          <h1>482</h1>
          <p>Total Penjualan</p>
        </div>
        <div className="card-2 bg-[#1388fc]">
          <h1>144</h1>
          <p>Stok Produk</p>
        </div>
        <div className="card-2 bg-[#52ec96]">
          <h1>34</h1>
          <p>Jumlah Supplier</p>
        </div>
        <div className="card-2 bg-[#ff8061]">
          <h1>232</h1>
          <p>Jumlah Pesanan</p>
        </div>
        <div className="card-2 bg-[#136efc]">
          <h1 className="text-4xl">Rp 25 juta</h1>
          <p>Pendapatan</p>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="card-2 h-40 justify-start items-start">
          <h3>loremipsum</h3>
        </div>
        <div className="card-2 h-40 justify-start items-start">
          <h3>loremipsum</h3>
        </div>
        <div className="card-2 h-40 justify-start items-start">
          <h3>loremipsum</h3>
        </div>
        <div className="card-2 h-40 justify-start items-start">
          <h3>loremipsum</h3>
        </div>
      </div>
      <div className="flex gap-5 h-60">
        <div className="w-2/5 flex-none card-2 h-60">
          <h3>loremipsum</h3>
        </div>
        <div className="flex-auto card-2 h-60">
          <h3>Riwayat Penjualan</h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardSupplier;
