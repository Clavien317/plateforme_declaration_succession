import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import { Box, Grid, Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled Card for dashboard statistics
const StatCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
  marginBottom: '20px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

// Example Dashboard component with more content
function Dashboard() {
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
                  <Typography variant="h6">1200</Typography>
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
                  <Typography variant="h6">300</Typography>
                </div>
                <div>
                  <Typography variant="h6">+12%</Typography>
                </div>
              </StatCard>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <StatCard>
                <div>
                  <Typography variant="h5">Transactions</Typography>
                  <Typography variant="h6">500</Typography>
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
                Nouveau utilisateur ajouté avec l'ID: 1205.
              </Typography>
            </Card>
            <Card sx={{ padding: 2 }}>
              <Typography variant="body1">
                Une nouvelle déclaration a été soumise par l'utilisateur 1210.
              </Typography>
            </Card>
          </Box>
        </Box>
      </AdminLayout>
    </>
  );
}

export default Dashboard;
