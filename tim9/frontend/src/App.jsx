import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { MenuCard, TestimoniCard } from "./components/Card";
import Home from "./pages/customer/Home";
import Product from "./pages/customer/Product";
import Cart from "./pages/customer/Cart";
import Payment from "./pages/customer/Payment";
import HeaderAdmin from "./components/HeaderAdmin";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/admin/Dashboard";
import DashboardSupplier from "./pages/supplier/DashboardSupplier";
import Pesanan from "./pages/admin/Pesanan";
import Supplier from "./pages/admin/Supplier";
import Calender from "./pages/admin/Calender";
import { DataProduct } from "./pages/admin/DataProduct";
import HeaderSupplier from "./components/HeaderSupplier";
import SidebarSupplier from "./components/SidebarSupplier";
import BahanBaku from "./pages/supplier/BahanBaku";
import Permintaan from "./pages/supplier/Permintaan";
import Form from "./pages/supplier/Form";
import History from "./pages/customer/History";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orderan from "./pages/supplier/Orderan";
import BahanbakuAdmin from "./pages/admin/BahanbakuAdmin";
import Historypenjualan from "./pages/admin/Historypenjualan";
function App() {
  // login state
  const [isLogin, setIsLogin] = React.useState(false);
  const handleLogin = () => setIsLogin(!isLogin);

  // user state
  const [user, setUser] = React.useState({
    id: "",
    name: "",
    role: "",
  });
  const handleUser = (id, name, role) => setUser({
    id: id,
    name: name,
    role: role,
  });

  return (
    <Router>
      {!isLogin ? (
        <>
          <Routes>
            <Route path="/" element={<Login handleUser={handleUser} handleLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </>
      ) : user.role === "admin" ? (
        <div className="w-full h-screen flex">
          <Sidebar user={user} />
          <div className="flex-auto h-screen overflow-y-scroll bg-[#f5f5f5]">
            <HeaderAdmin user={user} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pesanan" element={<Pesanan />} />
              <Route path="/bahanbakuadmin" element={<BahanbakuAdmin />} />
              <Route path="/historypenjualan" element={<Historypenjualan />} />
              <Route path="/product" element={<DataProduct />} />
            </Routes>
          </div>
        </div>
      ) : user.role === "supplier" ? (
        <div className="w-full h-screen flex">
          <Sidebar user={user} />
          <div className="flex-auto h-screen overflow-y-scroll bg-[#f5f5f5]">
            <HeaderSupplier user={user} />
            <Routes>
              <Route
                path="/"
                element={<DashboardSupplier />}
              />
              <Route path="/bahanbaku" element={<BahanBaku />} />
              <Route path="/orderan" element={<Orderan />} />
              <Route path="/form" element={<Form />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/history" element={<History />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
