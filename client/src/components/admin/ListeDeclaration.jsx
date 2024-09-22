"use client";

import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { MRT_Localization_FR } from "material-react-table/locales/fr";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProduitTable() {

  const [data, setData] = useState([]);

  // Exemple de données pour les successions (à remplacer par ton API si nécessaire)
  const ListeSuccessions = async () => {
    try {
      const successions = [
        {
          numeroDossier: 'S001',
          description: 'Maison à Paris, compte bancaire',
          etat: 'En cours',
          droitSuccession: '100 000 EUR',
          defunt: 'Jean Dupont',
          actif: '50,000 Euro',
        },
        {
          numeroDossier: 'S002',
          description: 'Appartement à Nice, voiture',
          etat: 'Clôturé',
          droitSuccession: '50 000 EUR',
          defunt: 'Paul Martin',
          actif: '50,000 Euro',
        },
        {
          numeroDossier: 'S003',
          description: 'Tableau de maître',
          etat: 'En cours',
          droitSuccession: '30 000 EUR',
          defunt: 'Anne Lefevre',
          actif: '50,800 Euro',
        },
        {
          numeroDossier: 'S004',
          description: '50 000 EUR sur compte bancaire',
          etat: 'Clôturé',
          droitSuccession: '5 000 EUR',
          defunt: 'Michel Moreau',
          actif: '50,000 Euro',
        },
      ];
      setData(successions);
    } catch (error) {
      console.log("Erreur lors de la récupération des successions:", error);
    }
  };

  useEffect(() => {
    ListeSuccessions();
  }, []);

  const [fileName, setFileName] = useState("");

  const columns = useMemo(
    () => [
      {
        accessorKey: "numeroDossier",
        header: "Numero de dossier",
        size: 150,
      },
      {
        accessorKey: "description",
        header: "Description",
        size: 200,
      },
      {
        accessorKey: "etat",
        header: "Etat",
        size: 150,
      },
      {
        accessorKey: "actif",
        header: "Sommes actif",
        size: 150,
      },
      {
        accessorKey: "droitSuccession",
        header: "Taxes",
        size: 150,
      },
      {
        accessorKey: "defunt",
        header: "Défunt",
        size: 150,
      },
      {
        accessorKey: "id",
        header: "Detail",
        size: 150,
        Cell: ({ row }) => (
          <div className="action">
            <a href="/declaration/32">
              <button>Voir detail</button>
            </a>
          </div>
        ),
      },
      {
        accessorKey: "id",
        header: "Action",
        size: 150,
        Cell: ({ row }) => (
          <div className="action">
            <Link href={`/declaration/${row.original._id}`} passHref>
              <Button variant="contained" color="primary">
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

  const ButtonAjout = styled(Button)({
    borderRadius: "8",
    border: "1px solid gray",
    backgroundColor: "rgb(219, 219, 219)",
    color: "rgb(27, 27, 27)",
    "&:hover": {
      backgroundColor: "#e42e8c",
      color: "#fff",
    },
    marginBottom: "20px",
  });

  return (
    <>
      <a href="/demande-declaration" className="mx-5">
        <ButtonAjout style={{ textTransform: "none" }}>
          Créer une déclaration
        </ButtonAjout>
      </a>
      <div>
        <MaterialReactTable table={table} />
      </div>
    </>
  );
}
