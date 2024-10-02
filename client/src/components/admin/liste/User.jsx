import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { MRT_Localization_FR } from "material-react-table/locales/fr";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import { Link } from "react-router-dom";

function User() {
  const [data, setData] = useState([]);

  // Fonction pour récupérer les utilisateurs
  const listeUser = async () => {
    try {
      const Utilisateur = await axios.get("http://localhost:5000/api/v1/user/list");
      setData(Utilisateur.data);
    } catch (error) {
      console.log("Erreur lors de la récupération des users:", error);
    }
  };

  useEffect(() => {
    listeUser();
  }, []);

  const handleEtatCompteChange = async (id, etatcompte) => {
    const nouveauEtat = etatcompte === "En attente" ? "Confirmé" : "En attente";

    const nif = Math.floor(100000000 + Math.random() * 900000000); 

    try {
      await axios.put(`http://localhost:5000/api/v1/user/update/${id}`, { etatcompte: nouveauEtat,nif:nif });
      alert("L'état du compte a été mis à jour !");
      listeUser();
      // Envoyer un email
      await axios.post("http://localhost:5000/api/v1/user/sendEmail", {
        userId: id,
        nouveauEtat: nouveauEtat,
      });
    } catch (error) {
      console.log("Erreur lors de la modification de l'état du compte:", error);
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "nif",
        header: "NIF",
        size: 150,
      },
      {
        accessorKey: "nom",
        header: "Nom complet",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Adresse Email",
        size: 150,
      },
      // {
      //   accessorKey: "tel",
      //   header: "Telephone",
      //   size: 150,
      // },
      {
        accessorKey: "role",
        header: "Role",
        size: 150,
      },
      {
        accessorKey: "etatcompte",
        header: "Etat de compte",
        size: 150,
      },
      {
        accessorKey: "id",
        header: "Action",
        size: 150,
        Cell: ({ row }) => (
          <div className="action">
            <button
              onClick={() => handleEtatCompteChange(row.original._id, row.original.etatcompte)}
            >
              {row.original.etatcompte!="Confirmé"?"Confirmer":""}
            </button>
            <Link href={`/pages/admin/modification/user/${row.original._id}`}>
              <Button variant="contained" color="primary" className="mx-9">
                Modifier
              </Button>
            </Link>
          </div>
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnActions: false,
    enableHiding: false,
    paginationDisplayMode: "pages",
    localization: MRT_Localization_FR,
    positionToolbarAlertBanner: "bottom",
  });

  return (
    <div>
      <MaterialReactTable table={table} />
    </div>
  );
}

export default User;
