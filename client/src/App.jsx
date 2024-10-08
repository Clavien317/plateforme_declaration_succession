import React from 'react';
import Accueil from './pages/Accueil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardAdmin from "./pages/administration/Dashboard"
import DeclationList from "./pages/administration/ListeDeclaration"

import Assistant from './pages/Assistant';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Faq from './pages/Faq';
import FormDeclaration from './components/Form/Declaration';
import ListeActif from './pages/dashboard/Actif'
import Dashboard from './pages/dashboard/Dashboard';
import Profil from './pages/dashboard/Profil';
import MesDeclaration from './pages/dashboard/MesDeclaration';
import Brouillon from './pages/dashboard/Brouillon';
import User from './pages/administration/ListeUser';
import Testament from './components/admin/liste/Testament';
import Detail from './pages/dashboard/Detail';
import Suivi from './pages/dashboard/Suivi';
import UserUpdate from './components/admin/update/UserUpdate';
import AjoutActif from './components/Form/Actif'
import Heritier from './pages/dashboard/Heritier';
import AddHeritier from './components/Form/Heritier';




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
        <Route path='/declaration/:id' element={ <Detail />} />
        <Route path='/declaration/actif' element={ <ListeActif />} />
        <Route path='/declaration/heritier' element={ <Heritier />} />

        <Route path='/add-actif' element={ <AjoutActif />} />
        <Route path='/add-heritier' element={ <AddHeritier />} />



        {/* Page admin */}
        <Route path='/admin' element={<DashboardAdmin />} />
        <Route path='/admin/liste/utilisateur' element={<User />} />
        <Route path='/admin/liste/declaration' element={<DeclationList />} />
        <Route path='/admin/liste/testament' element={<Testament />} />

        <Route path='/suivi' element={<Suivi />} />
        <Route path='/admin/modification/user/:id' element={<UserUpdate />}/>


      </Routes>
    </Router>
  );
}

export default App;
