import React from 'react';
import Accueil from './pages/Accueil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Declaration from './pages/Declaration';
import Declarations from './pages/liste/Declaration';

import Assistant from './pages/Assistant';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Faq from './pages/Faq';
import FormDeclaration from './components/Form/Declaration';
import Dashboard from './pages/dashboard/Dashboard';
import Profil from './pages/dashboard/Profil';
import MesDeclaration from './pages/dashboard/MesDeclaration';
import Brouillon from './pages/dashboard/Brouillon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path='/declaration' element={ <MesDeclaration />} />
        <Route path='/assistant' element={<Assistant />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/faq' element={<Faq />} />

        <Route path='/profil' element={<Profil />} />
        <Route path='*' element={<><h1>404</h1></>} />

        <Route path='/demande-declaration' element={<FormDeclaration />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/declaration/brouillon' element={<Brouillon />} />
        
      </Routes>
    </Router>
  );
}

export default App;
