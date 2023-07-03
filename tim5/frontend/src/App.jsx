import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashboardAdmin, Stock, Supplier, Order } from "./pages/admin";
import { DashboardSupplier, Activity } from "./pages/supplier";
import { Login } from "./pages";
import { Sidebar } from "./components";

function App() {
  // login state
  const [isLogin, setIsLogin] = React.useState(true);
  const handleLogin = () => setIsLogin(!isLogin);

  // user state
  const [activeUser, setActiveUser] = React.useState("supplier");
  const handleUser = (id) => setActiveUser(id);

  return (
    <Router>
      {!isLogin ? (
        <Routes>
          <Route path="/" element={<Login handleLogin={handleLogin} handleUser={handleUser} />} />
        </Routes>
      ) : (
        <div className="w-full h-screen flex">
          <Sidebar activeUser={activeUser} handleLogin={handleLogin} />
          <Routes>
            {activeUser === "admin" ? (
              <>
                <Route path="/" element={<DashboardAdmin />} />
                <Route path="/stock/materials" element={<Stock />} />
                <Route path="/stock/products" element={<Stock />} />
                <Route path="/supplier" element={<Supplier />} />
                <Route path="/order" element={<Order />} />
              </>
            ) : (
              <>
                <Route path="/" element={<DashboardSupplier />} />
                <Route path="/activity" element={<Activity />} />
              </>
            )}
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
