import React, { useEffect, useState } from 'react';
import ProfilLayout from '../layout/ProfilLayout';
import axios from 'axios';

function Suivi() {
  const [declarations, setDeclarations] = useState([]);
  const id_user = "66f9093217ce1470cf333e08";

  const listeDeclaration = async (idUser) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/declaration/list/${idUser}`);
      setDeclarations(response.data); // Utilise `response.data` pour accéder aux données de l'API
    } catch (error) {
      console.error("Erreur lors de la récupération des déclarations :", error);
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

  useEffect(() => {
    listeDeclaration(id_user);
  }, []);

  return (
    <div>
      <ProfilLayout>
        <div className="suivi">
          <h1 className="text-2xl font-bold mb-4">Suivi des Déclarations de Succession</h1>
          <table className="border border-gray-200 w-full">
            <thead>
              <tr>
                <th className="border px-4 py-2">N° dossier</th>
                <th className="border px-4 py-2">Date de dépôt</th>
                <th className="border px-4 py-2">Nom du Défunt</th>
                <th className="border px-4 py-2">% Héritage attribué</th>
                <th className="border px-4 py-2">Statut</th>
              </tr>
            </thead>
            <tbody>
              {declarations.length > 0 ? (
                declarations.map((declaration) => (
                  <tr key={declaration._id}>
                    <td className="border px-4 py-2">{declaration.dossierNum}</td>
                    <td className="border px-4 py-2">{formaterDate(declaration.createdAt)}</td>
                    <td className="border px-4 py-2">{declaration.nom_defunt}</td>
                    <td className="border px-4 py-2">{declaration.etatHeritage || "Non défini"}</td>
                    <td className="border px-4 py-2">{declaration.etat}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="border px-4 py-2 text-center">Aucune déclaration trouvée</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </ProfilLayout>
    </div>
  );
}

export default Suivi;
