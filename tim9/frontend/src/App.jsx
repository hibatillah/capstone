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
function App() {
  // login state
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
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </>
      ) : (
        <div className="w-full h-screen flex">
          {user === "admin" ? (
            <Sidebar user={user} />
          ):(<SidebarSupplier />)}
          <div className="flex-auto h-screen overflow-y-scroll bg-[#f5f5f5]">
            {user === "admin" ? (
              <HeaderAdmin />
            ):(<HeaderSupplier />)}
            <Routes>
              {user === "admin" ? (
                <>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/pesanan" element={<Pesanan />} />
                  <Route path="/supplier" element={<Supplier />} />
                  <Route path="/calender" element={<Calender />} />
                  <Route path="/product" element={<DataProduct />} />
                </>
              ) :user === "supplier"? (
                <>
                <Route path="/dashboard-suplier" element={<DashboardSupplier />} />
                <Route path="/bahanbaku" element={<BahanBaku />} />
                <Route path="/permintaan" element={<Permintaan />} />
                <Route path="/form" element={<Form />} />
                </>
              ): (
                <>
                  
                </>
              )}
            </Routes>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
