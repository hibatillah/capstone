import { Link } from "react-router-dom";
import { GetData } from "../components/api";
const Pesananmasuksupplier = () => {
  const Bahanbaku = () => {
    const { users } = GetData("http://localhost:5000/pesanbahan");
    console.log(users);
    return users;
  };
  const databahanbaku = Bahanbaku();

  return (
    <div className="px-10 mt-3">
      <p className="text-xl font-bold text-center py-3">Pesanan Masuk</p>
      <div className="bg-white aspect-[4/1] px-10 py-10 rounded-lg mt-10">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Nama Bahan</th>
              <th>Jumlah</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {databahanbaku?.data.map((item, i) => (
              <tr>
                <td>{item.nama ?? "-"}</td>
                <td>{item.jumlah ?? "-"}</td>
                <td>{item.status ?? "-"}</td>
                <td className="text-primary">
                  Konfirmasi
                </td>
              </tr>
            )) ?? <tr>Bahan Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Pesananmasuksupplier;
