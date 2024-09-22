import React from 'react'
import AdminLayout from '../../layout/ProfilLayout'
import Heritier from '../../components/admin/Heritier'
import { Card, CardContent, Typography } from '@mui/material';

function Dashboard() {
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
            <h2 className="text-xl">Nom du défunt</h2>
            <p className="text-xl font-semibold">Rakoto</p>
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

          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl">Lien de parenté du client avec le défunt</h2>
            <p className="text-xl font-semibold">Grand frere</p>
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