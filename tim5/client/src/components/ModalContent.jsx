import React from "react";

const ModalContent = ({ modalForm, handleModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return modalForm === "request material" ? (
    <>
      <h2>Pesan Bahan Baku</h2>
      <hr />
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="material">Bahan Baku</label>
          <select type="text" name="material" id="material" className="form">
            <option value="name">name</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="amount">Stok dipesan</label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Masukkan jumlah dipesan"
            className="form"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="satuan">Satuan</label>
          <input
            type="text"
            name="satuan"
            id="satuan"
            placeholder="Masukkan satuan bahan"
            className="form"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="supplier">Supplier</label>
          <select
            type="text"
            name="supplier"
            id="supplier"
            placeholder="Choose supplier"
            className="form"
          >
            <option value="name">name</option>
          </select>
        </div>
        <div className="flex gap-3 justify-end">
          <button onClick={() => handleModal("")} className="btn btn-cancel">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
    </>
  ) : modalForm === "make product" ? (
    <>
      <h2>Tambah Stok Produk</h2>
      <hr />
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="produk">Nama Produk</label>
          <select type="text" name="produk" id="produk" className="form">
            <option value="name">name</option>
          </select>
        </div>
        <div className="flex flex-col">
            <label htmlFor="stok">Stok ditambahkan</label>
          <input
            type="number"
            name="stok"
            id="stok"
            placeholder="Masukkan jumlah stok"
            className="form"
          />
        </div>
        <div className="flex gap-3 justify-end">
          <button onClick={() => handleModal("")} className="btn btn-cancel">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
    </>
  ) : modalForm === "add material" ? (
    <>
      <h2>Tambah Bahan Baku</h2>
      <hr />
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="gambar">Gambar</label>
          <input type="file" name="gambar" id="gambar" className="form" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="nama">Nama</label>
          <select
            type="text"
            name="nama"
            id="nama"
            placeholder="Masukkan nama bahan"
            className="form"
          >
            <option value="name">name</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="minimum">Stok Minimum</label>
          <input
            type="number"
            name="minimum"
            id="minimum"
            placeholder="Masukkan jumlah minimum"
            className="form"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="satuan">Satuan</label>
          <input
            type="text"
            name="satuan"
            id="satuan"
            placeholder="Masukkan satuan"
            className="form"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="stok">Stok Tersedia</label>
          <input
            type="number"
            name="stok"
            id="stok"
            placeholder="Masukkan stok"
            className="form"
          />
        </div>
        <div className="flex gap-3 justify-end">
          <button onClick={() => handleModal("")} className="btn btn-cancel">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
    </>
  ) : modalForm === "add product" ? (
    <>
      <h2>Tambah Produk</h2>
      <hr />
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="gambar">Gambar</label>
          <input type="file" name="gambar" id="gambar" className="form" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="product">Nama</label>
          <input
            type="text"
            name="product"
            id="product"
            placeholder="Masukkan nanma produk"
            className="form"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="harga">Harga</label>
          <input
            type="number"
            name="harga"
            id="harga"
            placeholder="Masukkan harga"
            className="form"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="minimum">Stok Minimum</label>
          <input
            type="number"
            name="minimum"
            id="minimum"
            placeholder="Masukkan minimum stok"
            className="form"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="stok">Stok Tersedia</label>
          <input
            type="number"
            name="stok"
            id="stok"
            placeholder="Masukkan stok"
            className="form"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="satuan">Satuan</label>
          <input
            type="text"
            name="satuan"
            id="satuan"
            placeholder="Masukkan satuan"
            className="form"
          />
        </div>
        <div className="flex gap-3 justify-end">
          <button onClick={() => handleModal("")} className="btn btn-cancel">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
    </>
  ) : modalForm === "send material" ? (
    <>
      <h2>Kirim Bahan Baku</h2>
      <hr />
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="material">Bahan Baku</label>
          <select
            type="text"
            name="material"
            id="material"
            className="form"
          >
            <option value="name">name</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="jumlah">Jumlah Stok Dikirim</label>
          <input
            type="number"
            name="jumlah"
            id="jumlah"
            placeholder="Jumlah jumlah"
            className="form"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="satuan">Satuan</label>
          <input
            type="text"
            name="satuan"
            id="satuan"
            placeholder="Jumlah satuan"
            className="form"
          />
        </div>
        <div className="flex gap-3 justify-end">
          <button onClick={() => handleModal("")} className="btn btn-cancel">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
    </>
  ) : null;
};

export default ModalContent;
