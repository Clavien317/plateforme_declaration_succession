import React, { useEffect, useState } from 'react';
// import { Card, CardContent, Typography, Avatar, Grid, Box } from '@mui/material';
import { Card, CardContent, Typography, Avatar, Grid, Box, Button, Modal, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';import axios from 'axios';

export default function Profile() {

  const [profil, setProfil] = useState({});
  const [open, setOpen] = useState(false);
  const [IDuser, setIDuser] = useState('');
  const [formValues, setFormValues] = useState({
    nom: '',
    email: '',
    adresse: '',
    nif: '',
    cin: '',
    tel: '',
    situation: '',
    nbEnfant: '',
    taxe: '',
    nbDeclaration: '',
    statutDeclaration: '',
  })

  const [Declaration, setDeclaration] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token-succession-user");
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setIDuser(decodedToken.id);
    }
  }, []);

  const profilUser = async () => {

    const token = localStorage.getItem("token-succession-user")    
    if (token) {
      const tokenParts = token.split('.');
      const decodedPayload = JSON.parse(atob(tokenParts[1]));    
      const idUser = decodedPayload.id;
      const data = await axios.get(`http://localhost:5000/api/v1/user/${idUser}`)    
      setProfil(data.data)
      setFormValues(data.data);
    } else {
      console.log("Aucun token trouvé");
    }
  };


  const declaration = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/declaration/list/${IDuser}`);
      setDeclaration(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des déclarations', error);
    }
  };

  function formaterDate(datetimeStr) {
    const date = new Date(datetimeStr);
    const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    const jour = date.getDate();
    const moisNom = mois[date.getMonth()];
    const annee = date.getFullYear();
    return `${jour} ${moisNom} ${annee}`;
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/v1/user/update/${profil._id}`, formValues);
      alert('Profil mis à jour avec succès');
      setProfil(formValues);
      handleClose();
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil:', error);
    }
  };
  
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
    declaration()
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

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
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
        <p className="text-xl font-semibold">{formaterDate(profil.createdAt) || "Non precis"}</p>
      </div>

      <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl">Situation familiale</h2>
          <p className="text-xl font-semibold">{profil.situation || "Non precis"}</p>
      </div>

      <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl">Nombre d'enfants</h2>
          <p className="text-xl font-semibold">{profil.nbEnfant || "Non precis"}</p>
      </div>

      {/* <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl">Droits de succession</h2>
        <p className="text-xl font-semibold">{profil.taxe || "Non precis"}</p>
      </div> */}

      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl">Nombre de declaration</h2>
        <p className="text-xl font-semibold">{Declaration.length || "Non precis"}</p>
      </div>

      {/* <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl">Statut de dernier declaration</h2>
        <p className="text-xl font-semibold">{profil.statutDeclaration || "Non precis"}</p>
      </div> */}
      </div>

      <Button onClick={handleOpen} variant="contained" color="primary">
        Modifier votre profil
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={{ width: 400, margin: 'auto', mt: 5, p: 4, backgroundColor: 'white', borderRadius: 2, maxHeight: '80vh', overflow: 'auto' }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nom"
              name="nom"
              value={formValues.nom}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Adresse"
              name="adresse"
              value={formValues.adresse}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="NIF"
              name="nif"
              value={formValues.nif}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Téléphone"
              name="tel"
              value={formValues.tel}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            
            <TextField
              label="CIN"
              name="cin"
              value={formValues.cin}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />

            <FormControl fullWidth margin="normal">
              <InputLabel id="situation-label">Situation familiale</InputLabel>
              <Select
                labelId="situation-label"
                name="situation"
                value={formValues.situation}
                onChange={handleChange}
                label="Situation familiale"
              >
                <MenuItem value="celibataire">Célibataire</MenuItem>
                <MenuItem value="mariee">Mariée</MenuItem>
                <MenuItem value="veuf">Veuf</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Nombre d'enfants"
              name="nbEnfant"
              value={formValues.nbEnfant}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />

            <div className='mx-9'>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Sauvegarder
              </Button>
            </div>
          </form>
        </Box>
      </Modal>

    </>
  );
}
