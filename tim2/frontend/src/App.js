import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Sidebar } from "./components";
import { DashboardAdmin, Order, Report, Product } from "./pages/admin";
import { DashboardSupplier } from "./pages/supplier";
import { DashboardGuest, Detail, About } from "./pages/guest";
import { Login } from "./pages";

function App() {
  // login handle
  const [isLogin, setIsLogin] = React.useState(true);
  const handleLogin = () => setIsLogin(!isLogin);

  // user handle
  const [user, setUser] = React.useState("admin");
  const handleUser = (user) => setUser(user);

  return (
    <Router>
      {!isLogin ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <div className="h-screen">
          {user === "admin" ? (
            <div className="flex">
              <Sidebar handleLogin={handleLogin} user={user} />
              <div className="flex-auto h-screen overflow-y-scroll">
                <Routes>
                  <Route path="/" element={<DashboardAdmin />} />
                  <Route path="/order" element={<Order />} />
                  <Route path="/report" element={<Report />} />
                  <Route path="/product" element={<Product />} />
                </Routes>
              </div>
            </div>
          ) : user === "supplier" ? (
            <div className="flex">
              <div className="flex-auto h-screen overflow-y-scroll">
                <Routes>
                  <Route path="/" element={<DashboardSupplier />} />
                </Routes>
              </div>
            </div>
          ) : (
            <div className="">
              <Header />
              <Routes>
                <Route path="/" element={<DashboardGuest />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          )}
        </div>
      )}
    </Router>
  );
}

export default App;
