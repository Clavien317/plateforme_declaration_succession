import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid, Box } from '@mui/material';

export default function Profile() {
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
          {/* Nom */}
          <Grid item>
            <Typography variant="h6" component="div" align="center">
              Nom
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Nambinina Clavien
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="h6" component="div" align="center">
              Email
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              claviennambinina@gmail.com
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="h6" component="div" align="center">
              Adresse
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Fianarantsoa Madagascar
            </Typography>
          </Grid>
          
        </Grid>
      </CardContent>
    </Card>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl">NIF</h2>
        <p className="text-xl font-semibold">090798786780334</p>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl">Contact rapide</h2>
        <p className="text-xl font-bold">+261329092922</p>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl">Membres depuis</h2>
        <p className="text-xl font-semibold">12 septembre 2024</p>
      </div>

      <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl">Situation familiale</h2>
          <p className="text-xl font-semibold">Marié</p>
      </div>

      <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl">Nombre d'enfants</h2>
          <p className="text-xl font-semibold">04</p>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl">Droits de succession</h2>
        <p className="text-xl font-semibold">5,000</p>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl">Nombre de declaration</h2>
        <p className="text-xl font-semibold">01</p>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl">Statut de dernier declaration</h2>
        <p className="text-xl font-semibold">En cours</p>
      </div>
      </div>

      <button className=" btn-update bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
        Modifier votre profil
      </button>
    </>
  );
}
