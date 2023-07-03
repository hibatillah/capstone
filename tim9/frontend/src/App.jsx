import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

        </>
      ) : (
        <>
          
        </>
      )}
    </Router>
  );
}

export default App;
