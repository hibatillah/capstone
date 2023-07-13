import * as React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./scenes/dashboard";
import DashboardSupplier from "./scenes/dashboard/Supplier";
import Produk from "./scenes/produk";
import Material from "./scenes/material";
import { Home, Header, About } from "./scenes/guest";
import Product from "./scenes/guest/Product";
import Detailproduct from "./scenes/guest/Detailproduct";
import Supplier from "./scenes/supplier";
import Sidebaradmin from "./components/Sidebaradmin";
// import Invoices from "./scenes/Invoices";
// import Contacts from "./scenes/contats";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Calender from "./scenes/Calender"

function App() {
  // theme state
  const [theme, colorMode] = useMode();

  // login state
  const [isLogin, setIsLogin] = React.useState(true);

  // user state
  const [user, setUser] = React.useState("supplier");

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          {!isLogin ? (
            <>
              {/* <Login /> */}
            </>
          ) : (user === "admin" ? (
            <div className="flex h-screen">
              <Sidebaradmin />
              <main className="flex-auto">
                <Topbar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/produk" element={<Produk />} />
                </Routes>
              </main>
            </div>
          ) : user === "supplier" ? (
            <div className="flex">
              <Sidebar />
              <main className="content">
                <Topbar />
                <Routes>
                  <Route path="/" element={<DashboardSupplier />} />
                  <Route path="/produk" element={<Produk />} />
                  <Route path="/material" element={<Material />} />
                  <Route path="/supplier" element={<Supplier />} />
                </Routes>
              </main>
            </div>
          ) : (
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/about" element={<About />} />
                <Route path="/detailproduct" element={<Detailproduct />} />
              </Routes>
            </>
          ))}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
