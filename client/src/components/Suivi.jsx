import React, { useEffect, useState } from 'react';
import ProfilLayout from '../layout/ProfilLayout';
import axios from 'axios';

function Suivi() {
  const [declarations, setDeclarations] = useState([]);
  const [IDuser, setIDuser] = useState('');
  const [valeurs, setValeurs] = useState({});  // Stocker les valeurs de chaque dossier

  // Récupérer l'ID utilisateur depuis le token
  useEffect(() => {
    const token = localStorage.getItem("token-succession-user");
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setIDuser(decodedToken.id);
    }
  }, []);

  // Fonction pour récupérer la liste des actifs d'un dossier
  const ListeActif = async (dossierNum) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/actif/lister/${dossierNum}`);
      console.log("Liste actif : ", response.data);
      
      let somme = 0;
      response.data.forEach((actif) => {
        console.log("Valeur:", actif.valeur);
        somme += actif.valeur;
      });
      return somme-somme*0.05;
    } catch (error) {
      console.error('Erreur lors de la récupération du actif utilisateur', error);
      return 0; // En cas d'erreur, retourner 0
    }
  };

  // Fonction pour récupérer la liste des déclarations
  const listeDeclaration = async (idUser) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/declaration/list/${idUser}`);
      setDeclarations(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des déclarations :", error);
    }
  };

  // Mettre à jour les valeurs des actifs pour chaque déclaration
  useEffect(() => {
    if (IDuser) {
      listeDeclaration(IDuser);
    }
  }, [IDuser]);

  useEffect(() => {
    const fetchValeurs = async () => {
      const nouvellesValeurs = {};
      for (let declaration of declarations) {
        const sommeValeur = await ListeActif(declaration.dossierNum);
        nouvellesValeurs[declaration.dossierNum] = sommeValeur;
      }
      setValeurs(nouvellesValeurs);
    };
    
    if (declarations.length > 0) {
      fetchValeurs();
    }
  }, [declarations]);

  // Fonction pour formater les dates
  function formaterDate(datetimeStr) {
    const date = new Date(datetimeStr);
    const mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    const jour = date.getDate();
    const moisNom = mois[date.getMonth()];
    const annee = date.getFullYear();
    return `${jour} ${moisNom} ${annee}`;
  }

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
                <th className="border px-4 py-2">Valeur Héritage hors taxes</th>
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
                    <td className="border px-4 py-2">{valeurs[declaration.dossierNum] !== undefined ? valeurs[declaration.dossierNum] : "Calcul en cours..."}</td>
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
