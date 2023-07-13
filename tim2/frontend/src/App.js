import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Siderbar";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Product from "./pages/Product";
import Tambahproduct from "./pages/Tambahproduct";
import Bahanbbaku from "./pages/Bahanbbaku";
import Tambahbahanbaku from "./pages/Tambahbahanbaku";
import Transaksi from "./pages/Transaksi";
import Tambahtransaksi from "./pages/Tambahtransaksi";
import Supplier from "./pages/Supplier";
import Tambahsupplier from "./pages/Tambahsupplier";
import Riwayat from "./pages/Riwayat";
// import ProductGuest from "./pages/guest/Product";
// import Detailproduct from "./pages/guest/Detailproduct";
// import Sidebaradmin from "./components/Sidebaradmin";

function App() {
  const [isLogin, setIsLogin] = React.useState(true);
  const handleLogin = () => setIsLogin(!isLogin);

  // user state
  const [user, setUser] = React.useState("admin");
  const handleUser = (id) => setUser(id);

  return (
    <Router>
      {!isLogin ? (
        <>
          {/* <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes> */}
        </>
      ) : user === "admin" ? (
        <div className="w-full h-screen flex">
          <Sidebar user={user} />
          <div className="flex-auto h-screen overflow-y-scroll bg-[#e8e9eb]">
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/product" element={<Product />} />
              <Route path="/tambahproduct" element={<Tambahproduct />} />
              <Route path="/bahanbaku" element={<Bahanbbaku />} />
              <Route path="/tambahbahanbaku" element={<Tambahbahanbaku />} />
              <Route path="/transaksi" element={<Transaksi />} />
              <Route path="/tambahtransaksi" element={<Tambahtransaksi />} />
              <Route path="/supplier" element={<Supplier />} />
              <Route path="/tambahsupplier" element={<Tambahsupplier />} />
              <Route path="/riwayat" element={<Riwayat />} />
            </Routes>
          </div>
        </div>
      ) : user === "supplier" ? (
        <div className="w-full h-screen flex">
          {/* <Sidebar user={user} />
          <div className="flex-auto h-screen overflow-y-scroll bg-[#f5f5f5]">
            <HeaderSupplier />
            <Routes>
              <Route
                path="/dashboard-supplier"
                element={<DashboardSupplier />}
              />
              <Route path="/bahanbaku" element={<BahanBaku />} />
              <Route path="/orderan" element={<Orderan />} />
              <Route path="/form" element={<Form />} />
            </Routes>
          </div> */}
        </div>
      ) : (
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductGuest />} />
          <Route path="/about" element={<About />} />
          <Route path="/detailproduct" element={<Detailproduct />} /> */}
        </Routes>
      )}
    </Router>
  );
}

export default App;
