import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Login  from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Routes>
     
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path = "*"element={<NotFound/>} />
     

  
    </Routes>
  );
};

export default App;
