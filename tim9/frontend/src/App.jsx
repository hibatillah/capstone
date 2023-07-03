import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { MenuCard, TestimoniCard } from './components/Card';
import Home from './pages/customer/Home';
import Product from './pages/customer/Product';
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
