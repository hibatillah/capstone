import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardAdmin, Stock, Supplier, Order } from './pages/admin';
import Sidebar from './components/Sidebar';

function App() {
  // login state
  const [isLogin, setIsLogin] = React.useState(true);
  const handleLogin = () => setIsLogin(!isLogin);

  // user state
  const [activeUser, setActiveUser] = React.useState('admin');
  const handleUser = (id) => setActiveUser(id);
  
  return (
    <Router>
      {!isLogin ? (
        <>

        </>
      ) : (
        <div className='w-full h-screen flex'>
          <Sidebar activeUser={activeUser} />
          <Routes>
            {activeUser === 'admin' ? (
              <>
                <Route path='/' element={<DashboardAdmin />} />
                <Route path='/stock/materials' element={<Stock />} />
                <Route path='/stock/products' element={<Stock />} />
                <Route path='/supplier' element={<Supplier />} />
                <Route path='/order' element={<Order />} />
              </>
            ) : (
              <></>
            )}
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
