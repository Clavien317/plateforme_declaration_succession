import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Avatar, Grid, Box } from '@mui/material';
import axios from 'axios';

export default function Profile() {

  
  const [profil,setProfil] = useState([])

  const profilUser=async()=>
  {
    const data = await axios.get("http://localhost:5000/api/v1/user/66f904ab17ce1470cf333dec")
    console.log(data.data);
    
    setProfil(data.data)
  }

  useEffect(()=>
  {
    profilUser()
  },[])


  return (
    <>
    <Card sx={{ maxWidth: 900, margin: 'auto', padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Avatar
          alt="Profil"
          src=""
          sx={{ width: 120, height: 120 }}
        />
      </Box>

      <CardContent>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Typography variant="h6" component="div" align="center">
              Nom
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              {profil.nom || "Non precis"}
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="h6" component="div" align="center">
              Email
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              {profil.email || "Non precis"}
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="h6" component="div" align="center">
              Adresse
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              {profil.adresse || "Non precis"}
            </Typography>
          </Grid>
          
        </Grid>
      </CardContent>
    </Card>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl">NIF</h2>
        <p className="text-xl font-semibold">{profil.nif || "Non precis"}</p>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl">Contact rapide</h2>
        <p className="text-xl font-bold">{profil.tel || "Non precis"}</p>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl">Membres depuis</h2>
        <p className="text-xl font-semibold">{profil.createdAt || "Non precis"}</p>
      </div>

      <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl">Situation familiale</h2>
          <p className="text-xl font-semibold">{profil.situation || "Non precis"}</p>
      </div>

      <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl">Nombre d'enfants</h2>
          <p className="text-xl font-semibold">{profil.nbEnfant || "Non precis"}</p>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl">Droits de succession</h2>
        <p className="text-xl font-semibold">{profil.taxe || "Non precis"}</p>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl">Nombre de declaration</h2>
        <p className="text-xl font-semibold">{profil.nbDeclaration || "Non precis"}</p>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl">Statut de dernier declaration</h2>
        <p className="text-xl font-semibold">{profil.statutDeclaration || "Non precis"}</p>
      </div>
      </div>

      <button className=" btn-update bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
        Modifier votre profil
      </button>
    </>
  );
}
