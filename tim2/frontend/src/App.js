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
import ProductGuest from "../src/pages/guest/Product";
import Detailproduct from "./pages/guest/Detailproduct";
// import Sidebaradmin from "./components/Sidebaradmin";
import Home from "../src/pages/guest/Home";
import About from "../src/pages/guest/About";
import Headerguest from "../src/pages/guest/Header";
import Sidebarsupplier from "./components/Sidebarsupplier";
import Pengiriman from "./pages/Pengiriman";
import Tambahpengantaran from "./pages/Tambahpengantaran";
import Bahanbakusupplier from "./pages/Bahanbakusupplier";
import Tambahbahanbakusupplier from "./pages/Tambahbahanbakusupplier";
import Editbahanbakusupplier from "./pages/Editbahanbakusupplier";
import Riwayatsupplier from "./pages/Riwayatsupplier";
import Editproduct from "./pages/Editproduct";
import Editbahanbaku from "./pages/Editbahanbaku";
import Edittransaksi from "./pages/Edittransaksi";
import Editsupplier from "./pages/Editsupplier";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pesanbahanbaku from "./pages/Pesanbahanbaku";
import Pesananmasuksupplier from "./pages/Pesananmasuksupplier";

function App() {
  const [isLogin, setIsLogin] = React.useState(true);
  const handleLogin = () => setIsLogin(!isLogin);

  // user state
  const [user, setUser] = React.useState("supplier");
  const handleUser = (id) => setUser(id);

  return (
    <Router>
      {!isLogin ? (
        <>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
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
              <Route path="/editproduct" element={<Editproduct />} />
              <Route path="/bahanbaku" element={<Bahanbbaku />} />
              <Route path="/tambahbahanbaku" element={<Tambahbahanbaku />} />
              <Route path="/editbahanbaku" element={<Editbahanbaku />} />
              <Route path="/transaksi" element={<Transaksi />} />
              <Route path="/tambahtransaksi" element={<Tambahtransaksi />} />
              <Route path="/edittransaksi" element={<Edittransaksi />} />
              <Route path="/supplier" element={<Supplier />} />
              <Route path="/editsupplier" element={<Editsupplier />} />
              <Route path="/tambahsupplier" element={<Tambahsupplier />} />
              <Route path="/riwayat" element={<Riwayat />} />
              <Route path="/pesanbahanbaku" element={<Pesanbahanbaku />} />
            </Routes>
          </div>
        </div>
      ) : user === "supplier" ? (
        <div className="w-full h-screen flex">
          <Sidebarsupplier />
          <div className="flex-auto h-screen overflow-y-scroll bg-[#e8e9eb]">
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pengiriman" element={<Pengiriman />} />
              <Route path="/tambahpengantaran" element={<Tambahpengantaran />} />
              <Route path="/bahanbakusupplier" element={<Bahanbakusupplier />} />
              <Route path="/tambahbahanbakusupplier" element={<Tambahbahanbakusupplier />} />
              <Route path="/editbahanbakusupplier" element={<Editbahanbakusupplier />} />
              <Route path="/riwayatsupplier" element={<Riwayatsupplier />} />
              <Route path="/pesananmasuk" element={<Pesananmasuksupplier />} />
            </Routes>
          </div>
        </div>
      ) : (
        <>
          <Headerguest />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/detailproduct" element={<Detailproduct />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
