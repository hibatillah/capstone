import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { MenuCard, TestimoniCard } from './components/Card';
import Home from './pages/customer/Home';
import Product from './pages/customer/Product';
import Cart from './pages/customer/Cart';
import Payment from './pages/customer/Payment';
function App() {
  // login state
  const [isLogin, setIsLogin] = React.useState(false);
  const handleLogin = () => setIsLogin(!isLogin);

  // user state
  const [user, setUser] = React.useState();
  const handleUser = (id) => setUser(id);
  
  return (
    <Router>
      {!isLogin ? (
        <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/payment' element={<Payment />} />
        </Routes>

        </>
      ) : (
        <>
          
        </>
      )}
    </Router>
  );
}

export default App;
