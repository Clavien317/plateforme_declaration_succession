import { Card, CardContent, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function DetailDeclaration() {
    const [heritier,setHeritier] = useState([])
    const [Declaration,setDeclaration] = useState([])
    const [Actif,setActif] = useState([]) 
    const dossierNum = useParams()


    const listeHeritier = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/v1/heritier/list/${dossierNum.id}`);
          setHeritier(response.data);
        } catch (error) {
          console.error("Erreur lors de la récupération des héritiers :", error);
        }
      };

      const listeDeclaration=async()=>
      {
        const response = await axios.get(`http://localhost:5000/api/v1/declaration/list`);
        console.log("Listes des declarations...",response);
        setDeclaration(response.data)
      }

      const listeActif=async()=>
      {
        const response = await axios.get(`http://localhost:5000/api/v1/actif/list`);
        console.log("Liste des actifs...",response);
        setActif(response.data)
      }


useEffect(()=>
{
    listeHeritier()
    listeDeclaration()
    listeActif
},[])


  return (
    <>
      <form action="">
        <div className="detail">
          <h1 className='text-2xl text-black font-bold mx-4'>Modification de déclaration</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-xl">Numero de dossier</h2>
              <input 
                type="text" 
                value="" 
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>

            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-xl">Contact legataire</h2>
              <input 
                type="text" 
                defaultValue="+261329092922" 
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>

            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-xl">Date de dépôt du dossier</h2>
              <input 
                type="date" 
                defaultValue="2024-09-12" 
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>

            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-xl">Nom du legataire</h2>
              <input 
                type="text" 
                defaultValue="Rakoto" 
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>

            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-xl">Total actif</h2>
              <input 
                type="number" 
                defaultValue="5000" 
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>

            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-xl">Total passif</h2>
              <input 
                type="number" 
                defaultValue="0" 
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>

            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-xl">Raison du passif</h2>
              <textarea 
                defaultValue="........." 
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>

            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-xl">Taxes</h2>
              <input 
                type="number" 
                defaultValue="800" 
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>

            <div className="w-full col-span-4 mx-5">
              <h1 className="text-2xl font-bold mt-4">Biens ou donation</h1>
              <hr className='h-1 w-36 bg-black' />
            </div>

            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-xl">Designation</h2>
              <input 
                type="text" 
                defaultValue="Voiture" 
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>

            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-xl">Description</h2>
              <textarea 
                defaultValue="......" 
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>

            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-xl">Valeur (montant)</h2>
              <input 
                type="number" 
                defaultValue="6000" 
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>

            <div className="bg-white p-4 shadow rounded">
                <h2 className="text-xl">Propriétaire</h2>
                <select name="beneficier" className="w-full border border-gray-300 rounded px-2 py-1">
                    {heritier.length > 0 ? (
                    heritier.map((h) => (
                        <option key={h._id} value={h.nom}>
                        {h.nom}
                        </option>
                    ))
                    ) : (
                    <option value="">Aucun héritier trouvé</option>
                    )}
                </select>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-xl">Designation</h2>
              <input 
                type="text" 
                defaultValue="Maison" 
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>

            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-xl">Description</h2>
              <textarea 
                defaultValue="......" 
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>

            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-xl">Valeur (montant)</h2>
              <input 
                type="number" 
                defaultValue="6900" 
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>

            <div className="bg-white p-4 shadow rounded">
                <h2 className="text-xl">Propriétaire</h2>
                <select name="beneficier" className="w-full border border-gray-300 rounded px-2 py-1">
                    {heritier.length > 0 ? (
                    heritier.map((h) => (
                        <option key={h._id} value={h.nom}>
                        {h.nom}
                        </option>
                    ))
                    ) : (
                    <option value="">Aucun héritier trouvé</option>
                    )}
                </select>
            </div>
          </div>

          {/* Héritier */}
            <div className="heritier-grid">
                <h1 className="text-2xl font-bold mx-7">Héritier</h1>
                <hr className='h-1 w-9 bg-black mb-6 mx-7' />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* Héritier 1 */}
                    {heritier.length > 0 ? (
                        heritier.map((heritier) => (
                        <div key={heritier._id} className="bg-white p-4 shadow rounded">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Nom</label>
                            <input
                            type="text"
                            value={heritier.nom || "Non défini"}
                            className="text-xl border-0 focus:ring-0 w-full"
                            readOnly
                            />
                            
                            <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">Lien parental</label>
                            <input
                            type="text"
                            value={heritier.relation || "Non défini"}
                            className="text-xl border-0 focus:ring-0 w-full"
                            readOnly
                            />

                            <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">Date de naissance</label>
                            <input
                            type="text"
                            value={heritier.datenaiss || "Non défini"}
                            className="text-xl border-0 focus:ring-0 w-full"
                            readOnly
                            />
                        </div>
                        ))
                    ) : (
                        <p>Aucun héritier trouvé pour ce numéro de dossier.</p>
                    )}

                </div>
            </div>
          <button className='btn-update'>Modifier</button>
        </div>
      </form>
    </>
  )
}

export default DetailDeclaration
