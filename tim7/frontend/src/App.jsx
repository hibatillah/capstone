import Header from "./components/Header";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Dashboard } from "./pages/Dashboard";
import Order from "./pages/Order";
import DashboardSupplier from "./pages/DashboardSupplier";
import Home from "./pages/Home";
function App() {
  // login state
  const [isLogin, setIsLogin] = React.useState(true);
  const handleLogin = () => setIsLogin(!isLogin);

  // user state
  const [user, setUser] = React.useState("customer");
  const handleUser = (id) => setUser(id);
  return (
    <Router>
      {!isLogin ? (
        <>
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
          </Routes> */}
        </>
      ) : (
        <div>
          <Header />
          <div className="w-full h-screen flex">
            <Sidebar />
            <div className="flex-auto h-screen overflow-y-scroll bg-[#f5f5f5]">
              <Routes>
                {user === "admin" ? (
                  <>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/order" element={<Order />} />
                  </>
                ) : user === "supplier" ?  (
                  <>
                    <Route path="/" element={<DashboardSupplier />} />
                    <Route path="/order" element={<Order />} />
                  </>
                ):(
                  <>
                    <Route path="/" element={<Home />} />
                    <Route path="/order" element={<Order />} />
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
