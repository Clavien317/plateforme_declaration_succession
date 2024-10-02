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

  const ListeSuccessions = async () => {
    try {
      const successions = await axios.get("http://localhost:5000/api/v1/declaration/list")
      setData(successions.data);
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
        accessorKey: "dossierNum",
        header: "Numero de dossier",
        size: 150,
      },
      {
        accessorKey: "titre",
        header: "Entete",
        size: 200,
      },
      {
        accessorKey: "description_test",
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
        accessorKey: "nom_defunt",
        header: "Défunt",
        size: 150,
      },
      {
        accessorKey: "id",
        header: "Action",
        size: 150,
        Cell: ({ row }) => (
          <div className="action">
            <Link href={``} passHref>
              <Button variant="contained" color="primary">
                Detail
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
      {/* <a href="/demande-declaration" className="mx-5">
        <ButtonAjout style={{ textTransform: "none" }}>
          Créer une déclaration
        </ButtonAjout>
      </a> */}
      <div>
        <MaterialReactTable table={table} />
      </div>
    </>
  );
}
