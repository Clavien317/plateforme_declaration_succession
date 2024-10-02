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
  const [totalActif, setTotalActif] = useState(0);

  const listeDeclaration = async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/v1/declaration/list");
      setData(result.data);

    } catch (error) {
      console.error("Erreur lors de la récupération des déclarations :", error);
    }
  };

  const DetailActif = async () =>
  {
    const result = await axios.get("http://localhost:5000/api/v1/actif/list");
      console.log(result.data[0].valeur);
      setTotalActif(result.data[0].valeur);
  }

  useEffect(() => {
    listeDeclaration();

    DetailActif()
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "dossierNum",
        header: "Numero de dossier",
        size: 150,
      },
      {
        accessorKey: "titre",
        header: "Titre de declaration",
        size: 200,
      },
      {
        accessorKey: "etat",
        header: "Etat",
        size: 150,
      },
      {
        accessorKey: "valeur",
        header: "Somme Actif (Valeur)",
        size: 150,
        Cell: () => (
          <>
            {totalActif}
          </>
        )
      },
      {
        accessorKey: "droitSuccession",
        header: "Taxes",
        size: 150,
        Cell: () => (
          <>
            {totalActif*0.005}
          </>
        )
      },
      {
        accessorKey: "nom_defunt",
        header: "Défunt",
        size: 150,
      },
      {
        accessorKey: "_id",
        header: "Action",
        size: 150,
        Cell: ({ row }) => (
          <div className="action">
            <Link to={`/declaration/${row.original._id}`}>
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
        {/* Affichage du tableau */}
        <MaterialReactTable table={table} />

        {/* Affichage de la somme totale des actifs */}
        <Box mt={2}>
          <h3>Total des Actifs : {totalActif} Ariary</h3>
        </Box>
      </div>
    </>
  );
}
