import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layout/AdminLayout';
import { Box, Grid, Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const StatCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
  marginBottom: '20px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));


function Dashboard() {
  const [Declaration, setDeclaration] = useState([]);
  const [User, setUser] = useState([]);
  const [Actif, setActif] = useState([]);
  const [Valeur, setValeur] = useState(0);



  const declaration = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/declaration/list`);
      setDeclaration(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des déclarations', error);
    }
  };

  const Users = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/user/list`);
      setUser(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des users', error);
    }
  };


  const ListeActif = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/actif/list`);
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


  useEffect(()=>
  {
    declaration()
    Users()
    ListeActif()
  },[])

  return (
    <>
      <AdminLayout>
        <Box sx={{ padding: 3 }}>
          <Typography variant="h4" gutterBottom>
            Tableau de Bord Administrateur
          </Typography>

          <Grid container spacing={3}>
            {/* Stat cards */}
            <Grid item xs={12} sm={6} md={4}>
              <StatCard>
                <div>
                  <Typography variant="h5">Utilisateurs</Typography>
                  <Typography variant="h6">{User.length}</Typography>
                </div>
                <div>
                  <Typography variant="h6">+5%</Typography>
                </div>
              </StatCard>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <StatCard>
                <div>
                  <Typography variant="h5">Déclarations</Typography>
                  <Typography variant="h6">{Declaration.length}</Typography>
                </div>
                <div>
                  <Typography variant="h6">+10%</Typography>
                </div>
              </StatCard>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <StatCard>
                <div>
                  <Typography variant="h5">Taxes obtenu</Typography>
                  <Typography variant="h6">{Valeur*0.05}</Typography>
                </div>
                <div>
                  <Typography variant="h6">+8%</Typography>
                </div>
              </StatCard>
            </Grid>
          </Grid>

          {/* Additional content */}
          <Box sx={{ marginTop: 3 }}>
            <Typography variant="h6" gutterBottom>
              Dernières Activités
            </Typography>
            <Card sx={{ padding: 2, marginBottom: 2 }}>
              <Typography variant="body1">
                Nouveau processus de validation de déclaration démarré avec succès.
              </Typography>
            </Card>
            <Card sx={{ padding: 2, marginBottom: 2 }}>
              <Typography variant="body1">
                Nouveau utilisateur ajouté avec l'ID: 66fee3eea9d385f2ac99a562.
              </Typography>
            </Card>
            <Card sx={{ padding: 2 }}>
              <Typography variant="body1">
                Une nouvelle déclaration a été soumise par l'utilisateur 66fee3eea9d385f2ac99a55b.
              </Typography>
            </Card>
          </Box>
        </Box>
      </AdminLayout>
    </>
  );
}

export default Dashboard;
