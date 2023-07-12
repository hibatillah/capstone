import React from "react";

const Pemesanan = () => {
  return (
    <div className="px-10 py-5 grid grid-cols-3 gap-5">
      <form className="col-span-2">
        <p className="font-medium mb-3">Nama Peneriman</p>
        <input
          type="text"
          name="namapenerima"
          id="namapenerima"
          placeholder="Nama Penerima"
          className="bg-white px-4 w-full py-2 rounded-lg mb-3"
        />
        <p className="font-medium mb-3">Alamat Lengkap</p>
        <input
          type="text"
          name="alamat"
          id="alamat"
          placeholder="Alamat Lnegkap"
          className="bg-white px-4 w-full py-2 rounded-lg mb-3"
        />
        <p className="font-medium mb-3">No Hp</p>
        <input
          type="text"
          name="nohp"
          id="nohp"
          placeholder="No Hp"
          className="bg-white px-4 w-full py-2 rounded-lg mb-3"
        />
        <p className="font-medium mb-3">Jumlah Pesanan</p>
        <input
          type="text"
          name="jumlah"
          id="jumlah"
          placeholder="Jumlah"
          className="bg-white px-4 w-full py-2 rounded-lg mb-3"
        />
        <div className="flex gap-5">
          <label htmlFor="transfer" className="flex items-center">
            <input type="radio" name="pembayaran" id="transfer" className="mr-2" />
            Transfer
          </label>
          <label htmlFor="cash" className="flex items-center">
            <input type="radio" name="pembayaran" id="cash" className="mr-2" />
            Cash
          </label>
        </div>
      </form>
      <div className="bg-white rounded-lg px-10 h-fit py-5 mt-9">
        <p>Total Pembayaran</p>
        <p>Rp.xxxxx</p>
        <div className="flex justify-end">
            <button className="bg-primary px-3 py-2 rounded-lg">Pesan</button>
        </div>
      </div>
    </div>
  );
};

export default Pemesanan;
