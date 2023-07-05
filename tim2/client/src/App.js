import * as React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import DashboardSupplier from "./scenes/dashboard/Supplier";
import Produk from "./scenes/produk";
import Material from "./scenes/material";
import { Home, Header, About } from "./scenes/guest";
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
  const [user, setUser] = React.useState("guest");

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          {!isLogin ? (
            <>
              {/* <Login /> */}
            </>
          ) : user === "admin" ? (
            <>
              <Sidebar />
              <main className="content">
                <Topbar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/produk" element={<Produk />} />
                </Routes>
              </main>
            </>
          ) : user === "supplier" ? (
            <>
              <Sidebar />
              <main className="content">
                <Topbar />
                <Routes>
                  <Route path="/" element={<DashboardSupplier />} />
                  <Route path="/produk" element={<Produk />} />
                  <Route path="/material" element={<Material />} />
                </Routes>
              </main>
            </>
          ) : (
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produk" element={<Produk />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </>
          )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
