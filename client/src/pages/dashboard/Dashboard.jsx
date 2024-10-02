import React, { useEffect, useState } from 'react'
import AdminLayout from '../../layout/ProfilLayout'
import Heritier from '../../components/admin/Heritier'
import { Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

function Dashboard() {

  const [profil,setProfil] = useState([])

  const profilUser=async()=>
  {
    const data = await axios.get("http://localhost:5000/api/v1/user/66f904ab17ce1470cf333dec")
    console.log(data.data);
    
    setProfil(data.data)
  }


  function formaterDate(datetimeStr) {
    const date = new Date(datetimeStr);
    const mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    const jour = date.getDate();
    const moisNom = mois[date.getMonth()];
    const annee = date.getFullYear(); 
    return `${jour} ${moisNom} ${annee}`;
  }


  useEffect(()=>
  {
    profilUser()
  },[])

  return (
    <>
      <AdminLayout>

        <h1 className='text-4xl text-start font-bold mx-4 my-5'>Tableau de bord</h1>

        {/* <Card sx={{ maxWidth: 345, margin: '20px' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              NIF
            </Typography>
            <Typography variant="body2" color="text.secondary">
              389720948029489874
            </Typography>
          </CardContent>
        </Card> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">NIF</h2>
            <p className="text-xl font-semibold">{profil.nif}</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">Contact rapide</h2>
            <p className="text-xl font-bold">{profil.tel}</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">Membres depuis</h2>
            <p className="text-xl font-semibold">{formaterDate(profil.createdAt)}</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
              <h2 className="text-xl">Situation familiale</h2>
              <p className="text-xl font-semibold">{profil.situation|| "Non precis"}</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
              <h2 className="text-xl">Nombre d'enfants</h2>
              <p className="text-xl font-semibold">{profil.nbEnfant|| "Non precis"}</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">Droits de succession</h2>
            <p className="text-xl font-semibold">{profil.taxe|| "Non precis"}</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">Nombre de declaration</h2>
            <p className="text-xl font-semibold">{profil.nbDossier|| "Non precis"}</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">Statut de dernier declaration</h2>
            <p className="text-xl font-semibold">{profil.statutDeclaration|| "Non precis"}</p>
          </div>
        </div>

        <div className="heritier">
           <Heritier />
        </div>
      </AdminLayout>
    </>
  )
}

export default Dashboard