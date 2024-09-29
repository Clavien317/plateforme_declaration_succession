import React from 'react';
import ProfilLayout from '../layout/ProfilLayout';

function Suivi() {

  // Données statiques pour les déclarations de succession
  const declarations = [
    { id: 1, dossierNum: 1049, date: '2024-09-20', type: 'Succession immobilière', statut: 'En attente', etatHeritage: "60%" },
    { id: 2, dossierNum: 4059, date: '2024-08-15', type: 'Succession mobilière', statut: 'Approuvée', etatHeritage: "30%" },
    { id: 3, dossierNum: 3800, date: '2024-07-10', type: 'Succession de comptes bancaires', statut: 'En cours', etatHeritage: "90%" },
  ];

  return (
    <div>
      <ProfilLayout>
        <div className="suivi">
          <h1 className="text-2xl font-bold mb-4">Suivi des Déclarations de Succession</h1>
          <table className=" border border-gray-200">
            <thead>
              <tr>
                <th className="border px-4 py-2">N° dossier</th>
                <th className="border px-4 py-2">Date de dépôt</th>
                <th className="border px-4 py-2">Type de Succession</th>
                <th className="border px-4 py-2">% Héritage attribué</th>
                <th className="border px-4 py-2">Statut</th>
              </tr>
            </thead>
            <tbody>
              {declarations.map((declaration) => (
                <tr key={declaration.dossierNum}>
                  <td className="border px-4 py-2">{declaration.dossierNum}</td>
                  <td className="border px-4 py-2">{declaration.date}</td>
                  <td className="border px-4 py-2">{declaration.type}</td>
                  <td className="border px-4 py-2">{declaration.etatHeritage}</td>
                  <td className="border px-4 py-2">{declaration.statut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ProfilLayout>
    </div>
  );
}

export default Suivi;
