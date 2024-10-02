import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layout/AdminLayout';
import { TextField, Button, Grid, Box } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

function UserUpdate() {
  const userId = useParams(); 
  console.log("ID USER ", userId.id);
  
  const history = useNavigate();
  
  const [user, setUser] = useState({
    nom: '',
    email: '',
    tel: '',
    nif: '',
    cin: '',
    role: '',
    etatcompte: '',
  });

  const [loading, setLoading] = useState(true);


  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/user/${userId.id}`);
      console.log(response.data);
      
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      console.log('Erreur lors de la récupération des données utilisateur:', error);
    }
  };

useEffect(() => {
    fetchUserData();
}, [userId]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.put(`http://localhost:5000/api/v1/user/update/${userId.id}`, user);
      alert('Utilisateur mis à jour avec succès');
      history('/admin/liste/utilisateur');
    } catch (error) {
      console.log('Erreur lors de la mise à jour de l\'utilisateur:', error);
      alert('Erreur lors de la mise à jour de l\'utilisateur');
    }
  };

  if (loading) return <div>Chargement...</div>;

  return (
    <AdminLayout>
      <br />
      <br />
      <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: '600px', margin: 'auto' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nom complet"
              variant="outlined"
              fullWidth
              name="nom"
              value={user.nom}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Téléphone"
              variant="outlined"
              fullWidth
              name="tel"
              value={user.tel}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="NIF"
              variant="outlined"
              fullWidth
              name="nif"
              value={user.nif}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="CIN"
              variant="outlined"
              fullWidth
              name="cin"
              value={user.cin}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Rôle"
              variant="outlined"
              fullWidth
              name="role"
              value={user.role}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="État du compte"
              variant="outlined"
              fullWidth
              name="etatcompte"
              value={user.etatcompte}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Mettre à jour
            </Button>
          </Grid>
        </Grid>
      </Box>
    </AdminLayout>
  );
}

export default UserUpdate;
