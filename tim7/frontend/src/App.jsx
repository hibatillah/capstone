import Header from "./components/Header";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Dashboard } from "./pages/Dashboard";
import Order from "./pages/Order";
import DashboardSupplier from "./pages/DashboardSupplier";
import Home from "./pages/Home";
import Stock from "./pages/Stock";
import Adminpendatapan from "./pages/Adminpendatapan";
import Sidebarsupplier from "./components/Sidebarsupplier";
import Sidebarcustomer from "./components/Sidebarcustomer";
import Pemesanan from "./pages/Pemesanan";
import { Login } from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  // login state
  const [isLogin, setIsLogin] = React.useState(true);
  const handleLogin = () => setIsLogin(!isLogin);

  // user state
  const [user, setUser] = React.useState("admin");
  const handleUser = (id) => setUser(id);
  return (
    <Router>
      {!isLogin ? (
        <>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </>
      ) : (
        <div>
          <Header />
          <div className="w-full h-screen flex">
            {user === "admin" ? (
              <Sidebar />
            ):user === "supplier" ? (
              <Sidebarsupplier />
            ) : (
              <Sidebarcustomer />
            )}
            <div className="flex-auto h-screen overflow-y-scroll bg-[#f5f5f5]">
              <Routes>
                {user === "admin" ? (
                  <>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/pendatapan" element={<Adminpendatapan />} />
                    <Route path="/stock" element={<Stock />} />
                  </>
                ) : user === "supplier" ?  (
                  <>
                    <Route path="/" element={<DashboardSupplier />} />
                    <Route path="/order" element={<Order />} />
                  </>
                ):(
                  <>
                    <Route path="/" element={<Home />} />
                    <Route path="/pemesanan" element={<Pemesanan />} />
                  </>
                )}
              </Routes>
            </div>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
