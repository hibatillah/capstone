import { Link } from "react-router-dom";
import { GetData } from "../components/api";
const Transaksi = () => {
  const Transaksi = () => {
    const { users } = GetData("http://localhost:5000/riwayatadmin");
    console.log(users);
    return users;
  };
  const datatransaksi = Transaksi();

  return (
    <div className="px-10">
      <div className="flex justify-end my-5 ">
        <Link
          className="px-4 py-2 bg-[#280559] mt-4 text-white rounded-lg flex gap-4"
          to={"/tambahriwayat"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-plus-circle-fill w-6 h-6"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
          Tambah Riwayat
        </Link>
      </div>
      <div className="bg-white aspect-[4/1] px-10 py-10">
        <table className="table-auto w-full">
          <thead>
            <tr>
            <th>ID Invoice</th>
              <th>Tanggal</th>
              <th>Nama Pembeli</th>
              <th>No Hp</th>
              <th>Produk</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Opsi</th>
            </tr>
          </thead>
          <tbody>
            {datatransaksi?.data.map((item, i) => (
              <tr>
                <td>{i}</td>
                <td>{item.tanggal ?? "-"}</td>
                <td>{item.namapembeli ?? "-"}</td>
                <td>{item.nohp ?? "-"}</td>
                <td>{item.produk ?? "-"}</td>
                <td>{item.amount ?? "-"}</td>
                <td>{item.status ?? "-"}</td>
                <td>
                  <Link to={`/editbahanbaku/${item._id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pen"
                      viewBox="0 0 16 16"
                    >
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                    </svg>
                  </Link>
                </td>
              </tr>
            )) ?? <tr>Bahan Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Transaksi;
