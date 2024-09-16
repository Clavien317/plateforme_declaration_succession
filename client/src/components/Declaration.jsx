import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Exemple de données (remplacez cette logique par une récupération réelle)
const exampleDeclarations = [
  {
    id: 1,
    titre: 'Déclaration 1',
    etat: 'Soumise',
    droits: 'Tous droits réservés',
    actifs: [
      { id: 'a1', type: 'Propriété', valeur: 'Maison', declarationID: 1 },
      { id: 'a2', type: 'Compte Bancaire', valeur: '12345678', declarationID: 1 }
    ],
    passifs: [
      { id: 'p1', type: 'Dette', valeur: 'Crédit Auto', declarationID: 1 },
      { id: 'p2', type: 'Hypothèque', valeur: 'Maison', declarationID: 1 }
    ]
  },
  {
    id: 2,
    titre: 'Déclaration 2',
    etat: 'Soumise',
    droits: 'Tous droits réservés',
    actifs: [
      { id: 'a1', type: 'Propriété', valeur: 'Maison', declarationID: 1 },
      { id: 'a2', type: 'Compte Bancaire', valeur: '12345678', declarationID: 1 }
    ],
    passifs: [
      { id: 'p1', type: 'Dette', valeur: 'Crédit Auto', declarationID: 1 },
      { id: 'p2', type: 'Hypothèque', valeur: 'Maison', declarationID: 1 }
    ]
  },
  {
    id: 3,
    titre: 'Déclaration 3',
    etat: 'Soumise',
    droits: 'Tous droits réservés',
    actifs: [
      { id: 'a1', type: 'Propriété', valeur: 'Maison', declarationID: 1 },
      { id: 'a2', type: 'Compte Bancaire', valeur: '12345678', declarationID: 1 }
    ],
    passifs: [
      { id: 'p1', type: 'Dette', valeur: 'Crédit Auto', declarationID: 1 },
      { id: 'p2', type: 'Hypothèque', valeur: 'Maison', declarationID: 1 }
    ]
  }
  // Ajoutez d'autres déclarations ici
];
  
function Mesdeclaration() {
  const [declarations, setDeclarations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setDeclarations(exampleDeclarations); // Remplacez par la logique de récupération réelle
  }, []);

  const handleDetailClick = (id) => {
    navigate(`/declaration/${id}`); // Remplacez par le chemin de votre page de détails
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">Mes Déclarations</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {declarations.length === 0 ? (
          <p className="text-center text-gray-600">Aucune déclaration trouvée.</p>
        ) : (
          declarations.map(declaration => (
            <div key={declaration.id} className="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">{declaration.titre}</h2>
              <p><strong>État:</strong> {declaration.etat}</p>
              <p><strong>Droits:</strong> {declaration.droits}</p>
              
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Actifs</h3>
                {declaration.actifs.length === 0 ? (
                  <p>Aucun actif enregistré.</p>
                ) : (
                  <ul className="list-disc pl-5">
                    {declaration.actifs.map(actif => (
                      <li key={actif.id}>
                        <strong>Type:</strong> {actif.type} <br />
                        <strong>Valeur:</strong> {actif.valeur}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Passifs</h3>
                {declaration.passifs.length === 0 ? (
                  <p>Aucun passif enregistré.</p>
                ) : (
                  <ul className="list-disc pl-5">
                    {declaration.passifs.map(passif => (
                      <li key={passif.id}>
                        <strong>Type:</strong> {passif.type} <br />
                        <strong>Valeur:</strong> {passif.valeur}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              <button
                onClick={() => handleDetailClick(declaration.id)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Voir Détail
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Mesdeclaration;
