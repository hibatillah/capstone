import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { MenuCard, TestimoniCard } from './components/Card';
function App() {
  // login state
  const [isLogin, setIsLogin] = React.useState(false);
  const handleLogin = () => setIsLogin(!isLogin);

  // user state
  const [user, setUser] = React.useState();
  const handleUser = (id) => setUser(id);
  
  return (
    <div>
      <Header />
      <Footer />
      <div className='grid grid-cols-3 gap-5'>
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
      <div className='grid grid-cols-3 gap-5 mt-10'>
        <TestimoniCard />
        <TestimoniCard />
        <TestimoniCard />
      </div>
    </div>
    // <Router>
    //   {!isLogin ? (
    //     <>

    //     </>
    //   ) : (
    //     <>
          
    //     </>
    //   )}
    // </Router>
  );
}

export default App;
