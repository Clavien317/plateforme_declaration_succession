import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'


function DetailDeclaration() {
  return (
    <>
        <div className="detail">
            <h1 className='text-2xl text-black font-bold mx-4'>Detail de declaration</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-xl">Numero de dossier</h2>
                    <p className="text-xl font-semibold">900</p>
                </div>

                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-xl">Contact legataire</h2>
                    <p className="text-xl font-bold">+261329092922</p>
                </div>

                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-xl">Date de dépôt du dossier</h2>
                    <p className="text-xl font-semibold">12 septembre 2024</p>
                </div>

                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-xl">Nom du legataire</h2>
                    <p className="text-xl font-semibold">Rakoto</p>
                </div>

                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-xl">Total actif</h2>
                    <p className="text-xl font-semibold">5,000</p>
                </div>

                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-xl">Total passif</h2>
                    <p className="text-xl font-bold"> 0</p>
                </div>

                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-xl">Raison du passif</h2>
                    <p className="text-xl font-semibold">.........</p>
                </div>

                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-xl">Taxes</h2>
                    <p className="text-xl font-semibold">800</p>
                </div>



                <div className="w-full col-span-4 mx-5">
                    <h1 className="text-2xl font-bold mt-4">Biens ou donation</h1>
                    <hr className='h-1 w-36 bg-black' />
                </div>

                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-xl">Designation</h2>
                    <p className="text-xl font-semibold">Voiture</p>
                </div>

                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-xl">Description</h2>
                    <p className="text-xl font-bold">......</p>
                </div>

                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-xl">Valeur (montant)</h2>
                    <p className="text-xl font-semibold">6,000</p>
                </div>

                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-xl">Proprietaire</h2>
                    <p className="text-xl font-semibold">Non defini</p>
                </div>



                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-xl">Designation</h2>
                    <p className="text-xl font-semibold">Maison</p>
                </div>

                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-xl">Description</h2>
                    <p className="text-xl font-bold">......</p>
                </div>

                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-xl">Valeur (montant)</h2>
                    <p className="text-xl font-semibold">6,900</p>
                </div>

                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-xl">Proprietaire</h2>
                    <p className="text-xl font-semibold">Non defini</p>
                </div>
            </div>

            <div className="heritier-grid">
            <h1 className="text-2xl font-bold mx-7">Héritier</h1>
            <hr className='h-1 w-9 bg-black mb-6 mx-7' />


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Card sx={{ maxWidth: 345, margin: '20px' }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                    Randrianantenaina
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    Lien parental
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Date de naissance
                    </Typography>
                </CardContent>
                </Card>

                <Card sx={{ maxWidth: 345, margin: '20px' }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                    Randrianantenaina
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    Lien parental
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Date de naissance
                    </Typography>
                </CardContent>
                </Card>

                <Card sx={{ maxWidth: 345, margin: '20px' }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                    Randrianantenaina
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    Lien parental
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Date de naissance
                    </Typography>
                </CardContent>
                </Card>

                <Card sx={{ maxWidth: 345, margin: '20px' }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                    Randrianantenaina
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lien parental
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Date de naissance
                    </Typography>
                </CardContent>
                </Card>
            </div>
            </div>
        </div>
    </>
  )
}

export default DetailDeclaration