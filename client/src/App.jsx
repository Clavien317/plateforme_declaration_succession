import React from 'react';
import Accueil from './pages/Accueil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Declaration from './pages/Declaration';
import Assistant from './pages/Assistant';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path='/declaration' element={ <Declaration />} />
        <Route path='/assistant' element={<Assistant />} />
      </Routes>
    </Router>
  );
}

export default App;
