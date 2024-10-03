import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layout/ProfilLayout';
import Heritier from '../../components/admin/ListeHeritier';
import { Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

function Dashboard() {
  const [profil, setProfil] = useState({});
  const [IDuser, setIDuser] = useState('');
  const [Declaration, setDeclaration] = useState([]);
  const [Actif, setActif] = useState([]);
  const [Valeur, setValeur] = useState(0);


  useEffect(() => {
    const token = localStorage.getItem("token-succession-user");
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setIDuser(decodedToken.id);
    }
  }, []);

  const profilUser = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/user/${IDuser}`);
      setProfil(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération du profil utilisateur', error);
    }
  };

  const ListeActif = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/actif/list/${IDuser}`);
      console.log("Liste actif : ",response.data);
      let somme = 0
      for (let i = 0; i < response.data.length; i++) {
        console.log(`Élément ${i + 1}:`);
        console.log("Valuer:", response.data[i].valeur);
        somme +=response.data[i].valeur
      }
      setValeur(somme)

      setActif(response.data);

    } catch (error) {
      console.error('Erreur lors de la récupération du actif utilisateur', error);
    }
  };

  const declaration = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/declaration/list/${IDuser}`);
      setDeclaration(response.data);
      console.log("Déclaration....", response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des déclarations', error);
    }
  };

  function formaterDate(datetimeStr)
  {
    const date = new Date(datetimeStr);
    const mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    const jour = date.getDate();
    const moisNom = mois[date.getMonth()];
    const annee = date.getFullYear();
    return `${jour} ${moisNom} ${annee}`;
  }

  useEffect(() => {
    if (IDuser) {
      profilUser();
      declaration();
      ListeActif()
    }
  }, [IDuser]);

  return (
    <>
      <AdminLayout>
        <h1 className='text-4xl text-start font-bold mx-4 my-5'>Tableau de bord</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">NIF</h2>
            <p className="text-xl font-semibold">{profil.nif || "Non précisé"}</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">Contact rapide</h2>
            <p className="text-xl font-bold">{profil.tel || "Non précisé"}</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">Membre depuis</h2>
            <p className="text-xl font-semibold">{profil.createdAt ? formaterDate(profil.createdAt) : "Non précisé"}</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">Situation familiale</h2>
            <p className="text-xl font-semibold">{profil.situation || "Non précisé"}</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">Nombre d'enfants</h2>
            <p className="text-xl font-semibold">{profil.nbEnfant || "Non précisé"}</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">Nombre de déclarations</h2>
            <p className="text-xl font-semibold">{Declaration.length || "Non précisé"}</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">Total actif</h2>
            <p className="text-xl font-semibold">{Actif.length || "Non précisé"}</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">Somme de valeur Total actif</h2>
            <p className="text-xl font-semibold">{Valeur || "Non précisé"} Ariary</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">Taxes à payer (5%)</h2>
            <p className="text-xl font-semibold">{Valeur*0.05 || "Non précisé"} Ariary</p>
          </div>

        </div>

        <div className="heritier">

        </div>
      </AdminLayout>
    </>
  );
}

export default Dashboard;
