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

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 my-9">

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">NIF</h2>
            <p className="text-xl font-bold">909879800334</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">Contact rapide</h2>
            <p className="text-xl font-bold">+261329092922</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">Date de dépôt du dossier</h2>
            <p className="text-xl font-bold">12 septembre 2024</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">Nom du défunt</h2>
            <p className="text-xl font-bold">Rakoto</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">Droits de succession</h2>
            <p className="text-xl font-bold">5,000</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">Date de deces</h2>
            <p className="text-xl font-bold">Non defini</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">Statut de declaration</h2>
            <p className="text-xl font-bold">En cours</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">Lien de parenté du client avec le défunt</h2>
            <p className="text-xl font-bold">Grand frere</p>
          </div>
        </div>
    </>
  );
}
