import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  DashboardAdmin,
  Materials,
  Products,
  Supplier,
  Order,
} from "./pages/admin";
import { DashboardSupplier, Activity, Stok } from "./pages/supplier";
import { Home, GuestProducts, GuestOrder, GuestOrderHistory } from "./pages/guest";
import { Login, SignUp, Notifikasi } from "./pages";
import {
  Sidebar,
  Profile,
  ModalContent,
  Header,
} from "./components";
import { logo } from "./assets/img";

function App() {
  // login state
  const [isLogin, setIsLogin] = React.useState(true);
  const handleLogin = () => setIsLogin(!isLogin);

  // user state
  const [activeUser, setActiveUser] = React.useState("admin");
  const handleUser = (id) => setActiveUser(id);

  // notif state
  const [notifActive, setNotifActive] = React.useState(false);
  const handleNotif = () => setNotifActive(!notifActive);

  // modal handle
  const [modalActive, setModalActive] = React.useState(false);
  const [modalForm, setModalForm] = React.useState("");
  const handleModal = (form) => {
    setModalActive(!modalActive);
    setModalForm(form);
  };

  return (
    <Router>
      {!isLogin ? (
        <div className="w-full h-screen relative grid place-items-center">
          <img src={logo} alt="logo" className="absolute left-5 top-5 w-60" />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      ) : activeUser === "admin" ? (
        <div className="w-full max-h-screen flex relative">
          <Sidebar activeUser={activeUser} />
          <div className="flex-auto h-screen overflow-y-scroll px-8 py-6 flex flex-col gap-5">
            <Profile handleNotif={handleNotif} />
            <Routes>
              <Route path="/" element={<DashboardAdmin />} />
              <Route
                path="/materials"
                element={<Materials handleModal={handleModal} />}
              />
              <Route
                path="/products"
                element={<Products handleModal={handleModal} />}
              />
              <Route path="/supplier" element={<Supplier />} />
              <Route path="/order" element={<Order />} />
              <Route path="/notifikasi" element={<Notifikasi />} />
            </Routes>
          </div>
        </div>
      ) : activeUser === "supplier" ? (
        <div className="w-full max-h-screen flex relative">
          <Sidebar activeUser={activeUser} />
          <div className="flex-auto h-screen overflow-y-scroll px-8 py-6 flex flex-col gap-5">
            <Profile handleNotif={handleNotif} />
            <Routes>
              <Route path="/" element={<DashboardSupplier />} />
              <Route path="/activity" element={<Activity handleModal={handleModal} />} />
              <Route path="/notifikasi" element={<Notifikasi />} />
              <Route path="/stok" element={<Stok />} />
            </Routes>
          </div>
        </div>
      ) : (
        <div className="w-full min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<GuestProducts />} />
            <Route path="/product/order" element={<GuestOrder />} />
            <Route path="/order" element={<GuestOrderHistory />} />
          </Routes>
        </div>
      )}
      {modalActive ? (
        <div className="fixed top-0 left-0 bg-black/30 backdrop-blur-sm w-screen h-screen z-20">
          <div
            className={
              modalActive
                ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 card p-7 min-w-[25%] min-h-[40%] flex flex-col justify-between z-30"
                : "hidden"
            }
          >
            <ModalContent modalForm={modalForm} handleModal={handleModal} />
          </div>
        </div>
      ) : null}
    </Router>
  );
}

export default App;
