import React from 'react';
import Accueil from './pages/Accueil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Declaration from './pages/Declaration';
import Assistant from './pages/Assistant';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Faq from './pages/Faq';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path='/declaration' element={ <Declaration />} />
        <Route path='/assistant' element={<Assistant />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/faq' element={<Faq />} />

        <Route path='/profil' element={<Profile />} />
        <Route path='*' element={<><h1>404</h1></>} />
      </Routes>
    </Router>
  );
}

export default App;
